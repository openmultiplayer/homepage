import React from 'react';
import Head from 'next/head';
import { LanguageSelect } from './LanguageSelect';

export const HeadContent = ({ title, ...rest }) => (
  <>
    <Head>
      <title>Open Multiplayer{title ? ` - ${title}` : ''}</title>
    </Head>
    <LanguageSelect {...rest} />
  </>
);
