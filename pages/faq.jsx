import React from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';

import { HeadContent } from '../components/HeadContent';
import { FooterContent } from '../components/FooterContent';
import { loadLanguages } from '../components/languages';
import Wordmark from '../components/icons/Wordmark';

const Faq = ({
  router: {
    query: { lang: language }
  }
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
          {currentLanguage.faq()}
          <hr />
        </section>
      </main>

      <FooterContent />
    </div>
  );
};

export default withRouter(Faq);
