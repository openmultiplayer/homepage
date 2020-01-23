import React from 'react';

import { HeadContent } from '../components/HeadContent';

import { withLanguages } from '../components/languages';

const Faq = ({ currentLanguage, flags }) => (
  <div className="container">
    <HeadContent flags={flags} currentLanguage={currentLanguage} title="FAQ" />

    <main>
      <section>
        <currentLanguage.faq.default />
        <hr />
      </section>
    </main>
  </div>
);

export default withLanguages(Faq);
