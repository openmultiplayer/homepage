import React from 'react';

import { Content } from '../components/Typography';
import Socials from '../components/Socials';
import BigLogo from '../components/BigLogo';

import { useLanguages } from '../components/languages';

const Index = () => {
  const [language] = useLanguages();
  return (
    <section>
      <language.body.default />

      <Content centred>
        <BigLogo />
        <hr />
      </Content>

      <Content centred>
        <Socials colour="#d1cec8" />
      </Content>
    </section>
  );
};

export default Index;
