import React from "react";
import { useState } from "react";
import Head from "next/head";

import { HeadContent } from "../components/HeadContent";
import { LanguageSelect } from "../components/LanguageSelect";
import Wordmark from "../components/icons/Wordmark";
import Discord from "../components/icons/Discord";
import Forum from "../components/icons/Forum";

import { loadLanguages } from "../components/languages";

export default ({ url: { query: { lang: initialLang } } }) => {
  const [ currentLanguage, flags, selected, callback ] = loadLanguages(initialLang, useState("🇽🇽"));

  return (
    <div className="container">
      <HeadContent />
      <main>
        <header className="header">
          <Wordmark width={300} height={"100%"} stroke="#d1cec8" background="#161f2b" />
        </header>
        <LanguageSelect
          flags={flags}
          selected={selected}
          callback={callback}
        />
        <section className="content">
          {currentLanguage.body(`/faq?lang=${selected}`)}
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
};

