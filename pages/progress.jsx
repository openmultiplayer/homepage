/* eslint-disable no-unused-vars */
import React from 'react';
import fetch from 'isomorphic-unfetch';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import { matches } from 'z';

import { HeadContent } from '../components/HeadContent';
import { Content, Paragraph } from '../components/Typography';
import { Wordmark } from '../components/icons/Brand';
import Pull from '../components/icons/Pull';
import Issue from '../components/icons/Issue';

import { useLanguages } from '../components/languages';

momentDurationFormatSetup(moment);

const DEV = process.env.NODE_ENV !== 'production';
const ADDRESS = DEV ? 'http://localhost:3000' : 'https://www.open.mp';

const ProgressBox = ({ children }) => (
  <div>
    {children}
    <style jsx>{`
      div {
        border-style: solid;
        border-width: 1px;
        border-radius: 10px;
        border-color: hsla(0deg, 100%, 100%, 10%);
        margin: 10px 0px 10px 0px;
        text-align: left;
      }
    `}</style>
  </div>
);

const IssueState = ({ state, mergedBy }) => (
  <div>
    <p>
      <span>{state}</span>
    </p>
    {state === 'MERGED' ? <p>(by {mergedBy.name})</p> : null}
    <style jsx>{`
      div {
        text-align: right;
      }
      span {
        border-radius: 5px;
        background-color: ${matches(state)(
          (x = 'OPEN') => 'white',
          (x = 'MERGED') => 'green',
          (x = 'CLOSED') => 'red'
        )};
        color: ${matches(state)(
          (x = 'OPEN') => 'black',
          (x = 'MERGED') => 'white',
          (x = 'CLOSED') => 'white'
        )};
        display: inline;
        padding: 2px 4px 2px 4px;
      }
    `}</style>
  </div>
);

const Common = ({
  title,
  updatedAt,
  icon,
  children,
  detail: { state = '', mergedBy = '' } = {}
}) => (
  <section>
    <h2>
      {icon} {title}
    </h2>

    <h3>
      <time dateTime={moment(updatedAt).format()}>Updated {moment(updatedAt).fromNow()}</time>
    </h3>
    <div className="separator" />

    <div className="container">
      {children}
      <IssueState state={state} mergedBy={mergedBy} />
    </div>

    <style jsx>{`
      h2 {
        line-height: 1;
        padding: 10px 20px 1px 20px;
        margin: 2px 0px 0px 0px;
        color: #d1cec8;
      }
      h3 {
        color: hsla(0deg, 100%, 100%, 50%);
        font-size: 80%;
        font-weight: 200;
        padding: 0px 20px 10px 20px;
        margin: 2px 0px 2px 0px;
      }
      .separator {
        border-bottom: 1px solid #e0e0e0;
        margin: 0px;
        width: 100%;
        opacity: 0.2;
      }
      .container {
        padding: 10px 40px 10px 40px;
        display: flex;
        justify-content: space-between;
      }
    `}</style>
  </section>
);

const ProgressRowPull = ({
  title,
  state,
  reviews: { users },
  author: { name: author },
  mergedBy,
  updatedAt
}) => {
  return (
    <Common
      title={title}
      updatedAt={updatedAt}
      icon={<Pull fill="hsla(0deg, 100%, 100%, 80%)" display="inline" />}
      detail={{ state, mergedBy }}
    >
      <div>
        <Paragraph>Opened by: {author}</Paragraph>
        {users.length === 0 ? null : (
          <Paragraph>
            Reviewed by:{' '}
            {users.map((v, i) => {
              return (
                /* eslint-disable-next-line react/no-array-index-key */
                <span key={i}>{v.user.name}</span>
              );
            })}
          </Paragraph>
        )}
      </div>
    </Common>
  );
};

const ProgressRowIssue = ({ title, state, author: { name: author }, updatedAt }) => {
  return (
    <Common
      title={title}
      updatedAt={updatedAt}
      icon={<Issue fill="hsla(0deg, 100%, 100%, 80%)" display="inline" />}
      detail={{ state }}
    >
      <div>
        <Paragraph>Opened by: {author}</Paragraph>
      </div>
    </Common>
  );
};

const ProgressRowPeriod = ({ length }) => {
  return (
    <div className="period">
      <div className="timeline" />
      <div className="time">{moment.duration(length, 'milliseconds').format()}</div>
      <div className="timeline" />

      <style jsx>{`
        .period {
          text-align: center;
        }
        .timeline {
          border-left-style: dashed;
          border-left-width: 1px;
          display: inline;
          color: hsla(0deg, 100%, 100%, 8%);
        }
        .time {
          padding: 5px;
          color: hsla(0deg, 100%, 100%, 50%);
          font-size: 10pt;
        }
      `}</style>
    </div>
  );
};

const ProgressRowItem = (props) => {
  switch (props.type) {
    case 'pull':
      return (
        <ProgressBox>
          <ProgressRowPull {...props} />
        </ProgressBox>
      );

    case 'issue':
      return (
        <ProgressBox>
          <ProgressRowIssue {...props} />
        </ProgressBox>
      );

    case 'period':
      return <ProgressRowPeriod {...props} />;

    default:
      return null;
  }
};

const Progress = ({ items }) => {
  const [currentLanguage, flags] = useLanguages();

  return (
    <div className="container">
      <HeadContent flags={flags} selected={currentLanguage.name} title="Homepage" />

      <Content centred>
        <Wordmark width={300} height="100%" />
      </Content>

      <main>
        <Content>
          <Paragraph>
            Below is a progress report of the state of recent issues and pull requests.
          </Paragraph>

          {items.map((value, index) => {
            /* eslint-disable-next-line react/no-array-index-key */
            return <ProgressRowItem key={index} {...value} />;
          })}
        </Content>
      </main>
    </div>
  );
};
Progress.getInitialProps = async () => {
  const res = await fetch(`${ADDRESS}/api/progress`);
  const data = await res.json();
  const {
    issues: { nodes: issues },
    pullRequests: { nodes: pullRequests }
  } = data.repository.labels.nodes[0];
  const items = [
    ...issues.map((v) => ({
      ...v,
      updatedAt: moment(v.updatedAt).toISOString(),
      type: 'issue'
    })),
    ...pullRequests.map((v) => ({
      ...v,
      updatedAt: moment(v.updatedAt).toISOString(),
      type: 'pull'
    }))
  ].sort((a, b) => a.updatedAt < b.updatedAt);
  const { length } = items;

  const periods = [];
  for (let index = 0; index < length - 1; index += 1) {
    const earlier = moment(items[index].updatedAt);
    const later = moment(items[index + 1].updatedAt);
    const diff = earlier.diff(later);

    // insert a period object when the time between is over a day
    if (diff > 86400000) {
      periods.push({
        type: 'period',
        updatedAt: later.subtract(10000).toISOString(),
        length: diff
      });
    }
  }

  const sorted = [...items, ...periods].sort((a, b) => {
    if (a.updatedAt < b.updatedAt) {
      return 1;
    }
    if (a.updatedAt > b.updatedAt) {
      return -1;
    }
    return 0;
  });

  return {
    items: sorted
  };
};

export default Progress;
