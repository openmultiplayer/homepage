import React from 'react';
import Link from 'next/link';

import { HeadContent } from '../components/HeadContent';
import { FooterContent } from '../components/FooterContent';
import { Wordmark } from '../components/icons/Brand';

import { useLanguages } from '../components/languages';

const Faq = () => {
  const [currentLanguage, flags] = useLanguages();

  return (
    <div className="container">
      <HeadContent flags={flags} selected={currentLanguage.name} title="FAQ" />

      <main>
        <header className="header faq">
          <Link href={`/index?lang=${currentLanguage.name}`}>
            <Wordmark width={300} height="100%" />
          </Link>
        </header>
        <section className="content">
          <currentLanguage.faq.default />
          <hr />
        </section>
      </main>
    </div>
  );
};

export default Faq;
