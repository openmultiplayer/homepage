import React from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

import { HeadContent } from '../components/HeadContent';
import Wordmark from '../components/icons/Wordmark';
import Pull from '../components/icons/Pull';
import Issue from '../components/icons/Issue';

import { loadLanguages } from '../components/languages';

momentDurationFormatSetup(moment);

const DEV = process.env.NODE_ENV !== 'production';
const ADDRESS = DEV ? 'http://localhost:3000' : 'https://open.mp';

const ProgressRowPull = ({
  title,
  state,
  reviews: { users },
  author: { name: author },
  mergedBy,
  updatedAt
}) => {
  return (
    <div className="progress-item">
      <h2 className="progress-item-header">
        <Pull className="progress-item-icon" /> {title}
      </h2>

      <p className="progress-item-date" title={moment(updatedAt).format()}>
        Updated {moment(updatedAt).fromNow()}
      </p>
      <div className="progress-item-separator"></div>

      <div className="progress-item-body">
        <div className="progress-item-body-detail">
          <p className="progress-item-author">Opened by: {author}</p>
          {users.length === 0 ? null : (
            <p className="progress-item-reviewer">
              Reviewed by:{' '}
              {users.map((v) => {
                return <span className="progress-item-reviewer-name">{v.user.name}</span>;
              })}
            </p>
          )}
        </div>

        <div className="progress-item-body-state">
          <p className={`progress-item-state progress-item-state-${state.toLowerCase()}`}>
            <span>{state}</span>
          </p>
          {state !== 'MERGED' ? null : <p>(by {mergedBy.name})</p>}
        </div>
      </div>
    </div>
  );
};

const ProgressRowIssue = ({ title, state, author: { name: author }, updatedAt }) => {
  return (
    <div className="progress-item">
      <h2 className="progress-item-header">
        <Issue className="progress-item-icon" /> {title}
      </h2>
      <p className="progress-item-date" title={moment(updatedAt).format()}>
        Updated {moment(updatedAt).fromNow()}
      </p>
      <div className="progress-item-separator"></div>

      <div className="progress-item-body">
        <div className="progress-item-body-detail">
          <p className="progress-item-author">Opened by: {author}</p>
        </div>

        <div className="progress-item-body-state">
          <p className={`progress-item-state progress-item-state-${state.toLowerCase()}`}>
            <span>{state}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

const ProgressRowPeriod = ({ length }) => {
  return (
    <div className="progress-item-period">
      <div className="progress-item-period-timeline" />
      <div className="progress-item-period-time">
        {moment.duration(length, 'milliseconds').format()}
      </div>
      <div className="progress-item-period-timeline" />
    </div>
  );
};

const ProgressRowItem = (props) => {
  switch (props.type) {
    case 'pull':
      return <ProgressRowPull {...props} />;

    case 'issue':
      return <ProgressRowIssue {...props} />;

    case 'period':
      return <ProgressRowPeriod {...props} />;

    default:
      return null;
  }
};

const Progress = ({
  router: {
    query: { lang: language }
  },
  progress: {
    issues: { nodes: issues },
    pullRequests: { nodes: pullRequests }
  }
}) => {
  const [currentLanguage, flags] = loadLanguages(language);

  let items = [
    ...issues.map((v) => ({ ...v, type: 'issue' })),
    ...pullRequests.map((v) => ({ ...v, type: 'pull' }))
  ].sort((a, b) => a.updatedAt < b.updatedAt);

  const { length } = items;
  for (let index = 0; index < length - 1; index += 1) {
    const earlier = moment(items[index].updatedAt);
    const later = moment(items[index + 1].updatedAt);
    const diff = earlier.diff(later);

    // insert a period object when the time between is over a day
    if (diff > 86400000) {
      items.push({
        type: 'period',
        updatedAt: earlier.subtract(diff / 2).toISOString(),
        length: diff
      });
    }
  }
  items = items.sort((a, b) => a.updatedAt < b.updatedAt);

  return (
    <div className="container">
      <HeadContent flags={flags} selected={currentLanguage.name} title="Progress" />

      <main>
        <header className="header faq">
          <Link href={`/index?lang=${currentLanguage.name}`}>
            <Wordmark width={300} height="100%" stroke="#d1cec8" background="#161f2b" />
          </Link>
        </header>
        <section className="content">
          <p>Below is a progress report of the state of recent issues and pull requests.</p>
          <div className="progress-items">
            {items.map((value) => {
              return <ProgressRowItem {...value} />;
            })}
          </div>
          <hr />
        </section>
      </main>
    </div>
  );
};
Progress.getInitialProps = async () => {
  const res = await fetch(`${ADDRESS}/api/progress`);
  const data = await res.json();

  return {
    progress: data.repository.labels.nodes[0]
  };
};

export default withRouter(Progress);
