import React from 'react';

import { HeadContent } from '../components/HeadContent';

import { withLanguages } from '../components/languages';

const Faq = ({ currentLanguage }) => (
  <div className="container">
    <HeadContent title="FAQ" />

    <main>
      <section>
        <currentLanguage.faq.default />
        <hr />
      </section>
    </main>
  </div>
);

export default withLanguages(Faq);
