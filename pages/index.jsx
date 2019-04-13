import React from "react";
import Head from "next/head";

import Wordmark from "./icons/Wordmark";
import Discord from "./icons/Discord";
import Forum from "./icons/Forum";
import "./style.css";

const Index = () => (
  <div className="container">
    <HeadContent />

    <main>
      <header className="header">
        <Wordmark width={300} height={"100%"} stroke="#d1cec8" background="#161f2b" />
      </header>
      <section className="content">
        <h1>Open Multiplayer</h1>
        <p>
          An upcoming multiplayer mod for <em>Grand Theft Auto: San Andreas</em> that will be fully backwards compatible
          with the existing multiplayer mod <em>San Andreas Multiplayer.</em>
        </p>
        <br />
        <p>
          This means <strong>all existing SA:MP scripts will work with open.mp</strong> and, in addition to this, many
          bugs will also be fixed within the server software without the need for hacks and workarounds.
        </p>
        <hr />
        <p>
          <span className="icon">
            <a href="https://discordapp.com/invite/hURGKHJ">
              <Discord />
            </a>
          </span>
          <span className="icon">
            <a href="https://www.burgershot.gg">
              <Forum />
            </a>
          </span>
        </p>
      </section>
    </main>
  </div>
);

const HeadContent = () => (
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

    <title>Open Multiplayer</title>
    <meta
      name="description"
      content="Open Multiplayer - An upcoming multiplayer mod for Grand Theft Auto: San Andreas that will be fully backwards compatible with the existing multiplayer mod San Andreas Multiplayer."
    />
    <meta property="og:image" content="/static/logo.png" />
    <meta property="og:site_name" content="Open Multiplayer" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="open.mp" />
    <meta property="og:url" content="https://www.burgershot.gg" />
    <meta
      property="og:description"
      content="Open Multiplayer - An upcoming multiplayer mod for Grand Theft Auto: San Andreas that will be fully backwards compatible with the existing multiplayer mod San Andreas Multiplayer."
    />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@Southclaws" />
    <meta name="twitter:creator" content="@Southclaws" />
    <meta name="hostname" content="burgershot.gg" />
    <meta name="expected-hostname" content="burgershot.gg" />
    <meta name="google-site-verification" content="-1qA4kEDqC2i3_jqGD-UYCCqH7jDWZdgEejT7-4QqkE" />
  </Head>
);

export default Index;
