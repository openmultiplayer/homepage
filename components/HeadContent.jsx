import React from 'react';
import Head from 'next/head';

import Nav from './Nav';
import { Content, Anchor } from './Typography';
import { Wordmark } from './icons/Brand';
import { useLanguages } from './languages';

export const HeadContent = ({ title }) => {
  const [language] = useLanguages();

  return (
    <>
      <Head>
        <title>Open Multiplayer{title ? ` - ${title}` : ''}</title>
      </Head>
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
