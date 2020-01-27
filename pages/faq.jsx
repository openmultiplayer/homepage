import React from 'react';

import { HeadContent } from '../components/HeadContent';
import { useLanguages } from '../components/languages';

const Faq = () => {
  const [currentLanguage, flags] = useLanguages();
  return (
    <div className="container">
      <HeadContent flags={flags} selected={currentLanguage.name} title="FAQ" />

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
