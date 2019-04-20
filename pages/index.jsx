import React from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';

import { HeadContent } from '../components/HeadContent';
import { FooterContent } from '../components/FooterContent';
import Wordmark from '../components/icons/Wordmark';
import Discord from '../components/icons/Discord';
import Forum from '../components/icons/Forum';

import { loadLanguages } from '../components/languages';

const Index = ({
  router: {
    query: { lang: language }
  }
}) => {
  const [currentLanguage, flags] = loadLanguages(language);

  return (
    <div className="container">
      <HeadContent flags={flags} selected={currentLanguage.name} title="FAQ" />

      <main>
        <header className="header">
          <Wordmark width={300} height="100%" stroke="#d1cec8" background="#161f2b" />
        </header>
        <section className="content">
          {currentLanguage.body(({ children }) => (
            <Link href={`/faq?lang=${currentLanguage.name}`}>
              <a>{children}</a>
            </Link>
          ))}
          <hr />
          <p>
            <span className="icon">
              <a href="https://discordapp.com/invite/hURGKHJ">
                <Discord />
              </a>
            </span>
            <span className="icon">
              <a href="https://www.burgershot.gg">
                <Forum />
              </a>
            </span>
          </p>
        </section>
      </main>

      <FooterContent />
    </div>
  );
};

export default withRouter(Index);
