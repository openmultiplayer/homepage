import React from 'react';

import { HeadContent } from '../components/HeadContent';
import { Wordmark } from '../components/icons/Brand';
import { Content } from '../components/Typography';
import Socials from '../components/Socials';
import BigLogo from '../components/BigLogo';

import { useLanguages } from '../components/languages';

const Index = () => {
  const [currentLanguage, flags] = useLanguages();

  return (
    <div className="container">
      <HeadContent flags={flags} selected={currentLanguage.name} title="Homepage" />

      <BigLogo />

      <main>
        <section>
          <currentLanguage.body.default />

          <Content centred>
            <Wordmark width={300} height="100%" />
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
