import React from 'react';

import Nav from './Nav';
import { Content, Anchor } from './Typography';
import { Wordmark } from './icons/Brand';
import { useLanguages } from './languages';

export const HeadContent = () => {
  const [language] = useLanguages();

  return (
    <>
      <Content centred>
        <header>
          <Anchor href={`/index?lang=${language.name}`}>
            <Wordmark width={300} height="100%" />
          </Anchor>
          <Nav />
        </header>
      </Content>
    </>
  );
};
