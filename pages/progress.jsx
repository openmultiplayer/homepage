import React from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';

import { HeadContent } from '../components/HeadContent';
import Wordmark from '../components/icons/Wordmark';

import { loadLanguages } from '../components/languages';

const DEV = process.env.NODE_ENV !== 'production';
const ADDRESS = DEV ? 'http://localhost:3000' : 'https://open.mp';

const ProgressRowItem = (props) => {
  const {
    title,
    state,
    reviews: { users },
    author: { name: author },
    mergedBy
  } = props;

  return (
    <div className="progress-item">
      <h2 className="progress-item-header">{title}</h2>
      <p className="progress-item-state">
        <span>{state}</span>
        {state !== 'MERGED' ? null : <span> by: {mergedBy.name}</span>}
      </p>
      <p className="progress-item-author">Opened by: {author}</p>
      {users.length === 0 ? null : (
        <p>
          Reviewed by:{' '}
          {users.map((v) => {
            return <span>{v.user.name}</span>;
          })}
        </p>
      )}
    </div>
  );
};

const Progress = ({
  router: {
    query: { lang: language }
  },
  progress
}) => {
  const [currentLanguage, flags] = loadLanguages(language);

  return (
    <div className="container">
      <HeadContent flags={flags} selected={currentLanguage.name} title="FAQ" />

      <main>
        <header className="header faq">
          <Link href={`/index?lang=${currentLanguage.name}`}>
            <Wordmark width={300} height="100%" stroke="#d1cec8" background="#161f2b" />
          </Link>
        </header>
        <section className="content">
          {progress.map((value) => {
            return <ProgressRowItem {...value} />;
          })}
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
    progress: data.repository.pullRequests.nodes
  };
};

export default withRouter(Progress);
