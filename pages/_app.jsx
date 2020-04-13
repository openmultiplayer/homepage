import React from 'react';
import Router from 'next/router';
import withGA from 'next-ga';
import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';
import 'flag-icon-css/css/flag-icon.css';
import './prism-theme.css';

import { HeadContent } from '../components/HeadContent';
import { FooterContent } from '../components/FooterContent';
import CodeBlock from '../components/CodeBlock';
import {
  Content,
  Paragraph,
  Anchor,
  OrderedList,
  HeadingLarge,
  HeadingMedium,
} from '../components/Typography';

const DESC =
  'Open Multiplayer - An upcoming multiplayer mod for Grand Theft Auto: San Andreas that is a fully backwards compatible substitute for SA:MP.';

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="theme-color" content="#161f2b" />
      <meta name="msapplication-TileColor" content="#161f2b" />
      <meta name="msapplication-TileImage" content="/static/mstile-144x144.png" />
      <meta name="msapplication-config" content="/static/browserconfig.xml" />
      <meta name="theme-color" content="#161f2b" />

      <link rel="manifest" href="/static/manifest.json" />
      <link rel="shortcut icon" href="/static/favicon.ico" />

      <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
      <link rel="manifest" href="/static/site.webmanifest" />
      <link rel="mask-icon" href="/static/safari-pinned-tab.svg" color="#5bbad5" />
      <link rel="shortcut icon" href="/static/favicon.ico" />
      <link rel="stylesheet" href="/static/fonts.css" />

      <meta name="description" content={DESC} />
      <meta property="og:image" content="/static/logo.png" />
      <meta property="og:site_name" content="Open Multiplayer" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="open.mp" />
      <meta property="og:url" content="https://www.open.mp" />
      <meta property="og:description" content={DESC} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@Southclaws" />
      <meta name="twitter:creator" content="@Southclaws" />
      <meta name="hostname" content="www.open.mp" />
      <meta name="expected-hostname" content="www.open.mp" />
      <meta name="google-site-verification" content="-1qA4kEDqC2i3_jqGD-UYCCqH7jDWZdgEejT7-4QqkE" />
    </Head>

    <HeadContent title="FAQ" />

    <main>
      <MDXProvider
        components={{
          wrapper: (props) => (
            <main>
              <Content {...props} />
            </main>
          ),
          h1: HeadingLarge,
          h2: HeadingMedium,
          a: Anchor,
          p: Paragraph,
          ol: OrderedList,
          pre: (props) => <React.Fragment {...props} />,
          code: (props) => <CodeBlock {...props} />,
        }}
      >
        <Component {...pageProps} />
      </MDXProvider>
    </main>

    <FooterContent />

    <style jsx global>{`
      body,
      html,
      #__next {
        margin: 0 0 0 0;
        padding: 0 0 0 0;
        width: 100%;
        background-color: #2d2d2d;
      }
    `}</style>
  </>
);

export default withGA(process.env.GA_ID, Router)(App);
