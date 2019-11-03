import React from 'react';

import { HeadContent } from '../components/HeadContent';
import { Content } from '../components/Typography';
import Socials from '../components/Socials';
import BigLogo from '../components/BigLogo';

import { useLanguages } from '../components/languages';

const Index = () => {
  const [currentLanguage, flags] = useLanguages();

  return (
    <div>
      <HeadContent flags={flags} selected={currentLanguage.name} title="Homepage" />
      <main>
        <section>
          <currentLanguage.body.default />

          <Content centred>
            <BigLogo />
            <hr />
          </Content>

          <Content centred>
            <Socials colour="#d1cec8" />
          </Content>
        </section>
      </main>
    </div>
  );
};

export default Index;
