import React from 'react';

import { useLanguages } from '../components/languages';

const Faq = () => {
  const [language] = useLanguages();
  return (
    <section>
      <language.faq.default />
      <hr />
    </section>
  );
};

export default Faq;
