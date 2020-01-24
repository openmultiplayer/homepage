import React, { useContext } from 'react';
import Head from 'next/head';

import Nav from './Nav';
import { LanguageContext } from './languages';

import { Content, Anchor } from './Typography';
import { Wordmark } from './icons/Brand';

export const HeadContent = ({ title }) => {
  const { currentLanguage } = useContext(LanguageContext);

  return (
    <>
      <Head>
        <title>Open Multiplayer{title ? ` - ${title}` : ''}</title>
      </Head>
      <Content centred>
        <header>
          <Anchor href={`/index?lang=${currentLanguage.name}`}>
            <Wordmark width={300} height="100%" />
          </Anchor>
          <Nav />
        </header>
      </Content>
    </>
  );
};
