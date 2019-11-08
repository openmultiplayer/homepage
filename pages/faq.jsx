import React from 'react';
import Link from 'next/link';

import { HeadContent } from '../components/HeadContent';
import { Wordmark } from '../components/icons/Brand';
import { Content } from '../components/Typography';

import { useLanguages } from '../components/languages';

const Faq = () => {
  const [currentLanguage, flags] = useLanguages();

  return (
    <div className="container">
      <HeadContent flags={flags} selected={currentLanguage.name} title="FAQ" />

      <Content centred>
        <header>
          <Link href={`/index?lang=${currentLanguage.name}`}>
            <Wordmark width={300} height="100%" />
          </Link>
        </header>
      </Content>

      <main>
        <section>
          <currentLanguage.faq.default />
          <hr />
        </section>
      </main>
    </div>
  );
};

export default Faq;
