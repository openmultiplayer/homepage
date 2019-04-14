import React from "react";
import Head from "next/head";

import "./style.css";

const DESC = 'Open Multiplayer - An upcoming multiplayer mod for Grand Theft Auto: San Andreas that is a fully backwards compatible substitute for SA:MP.';

export const HeadContent = ({ title }) => (
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

    <link rel="stylesheet" href="https://use.typekit.net/abp2gwt.css" />

    <title>Open Multiplayer{title ? ` - ${title}` : ''}</title>
    <meta
      name="description"
      content={DESC}
    />
    <meta property="og:image" content="/static/logo.png" />
    <meta property="og:site_name" content="Open Multiplayer" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="open.mp" />
    <meta property="og:url" content="https://www.burgershot.gg" />
    <meta
      property="og:description"
      content={DESC}
    />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@Southclaws" />
    <meta name="twitter:creator" content="@Southclaws" />
    <meta name="hostname" content="burgershot.gg" />
    <meta name="expected-hostname" content="burgershot.gg" />
    <meta name="google-site-verification" content="-1qA4kEDqC2i3_jqGD-UYCCqH7jDWZdgEejT7-4QqkE" />
  </Head>
);

