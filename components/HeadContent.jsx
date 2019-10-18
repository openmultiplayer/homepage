import React from 'react';
import Head from 'next/head';
import { LanguageSelect } from './LanguageSelect';

export const HeadContent = ({ title, ...rest }) => (
  <div className="menu-content">
    <Head>
      <title>Open Multiplayer{title ? ` - ${title}` : ''}</title>
    </Head>
    <LanguageSelect {...rest} />
  </div>
);
