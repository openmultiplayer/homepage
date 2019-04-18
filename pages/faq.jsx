import React, { useState } from 'react';
import Link from 'next/link';

import { HeadContent } from '../components/HeadContent';
import Wordmark from '../components/icons/Wordmark';

import { loadLanguages } from '../components/languages';

export default ({ url: { query: { lang: initialLang } } }) => {
  const [ currentLanguage, flags, selected, callback ] = loadLanguages(initialLang, useState('xx'));

  return (
    <div className="container">
      <HeadContent
        flags={flags}
        selected={selected}
        callback={callback}
        title="FAQ"
      />

      <main>
        <header className="header faq">
          <Link href={`/index?lang=${selected}`}>
            <Wordmark width={300} height="100%" stroke="#d1cec8" background="#161f2b" />
          </Link>
        </header>
        <section className="content">
          {currentLanguage.faq()}
          <hr />
        </section>
      </main>
    </div>
  );
};

