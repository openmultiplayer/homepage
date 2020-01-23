import React from 'react';
import Head from 'next/head';

import Nav from './Nav';
import { Content, Anchor } from './Typography';
import { Wordmark } from './icons/Brand';

export const HeadContent = ({ title, currentLanguage, flags }) => (
  <>
    <Head>
      <title>Open Multiplayer{title ? ` - ${title}` : ''}</title>
    </Head>
    <Content centred>
      <header>
        <Anchor href={`/index?lang=${currentLanguage.name}`}>
          <Wordmark width={300} height="100%" />
        </Anchor>
        <Nav currentLanguage={currentLanguage} flags={flags} />
      </header>
    </Content>
  </>
);
