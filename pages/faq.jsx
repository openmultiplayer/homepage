import React from "react";
import { useState } from "react";

import { HeadContent } from "../components/HeadContent";
import { LanguageSelect } from "../components/LanguageSelect";
import Wordmark from "../components/icons/Wordmark";

import { loadLanguages } from "../components/languages";

export default ({ url: { query: { lang: initialLang } } }) => {
  const [ currentLanguage, flags, selected, callback ] = loadLanguages(initialLang, useState("🇽🇽"));

  return (
    <div className="container">
      <HeadContent title="FAQ" />

      <main>
        <header className="header">
          <a href={`/index?lang=${selected}`} id="home-link">
            <Wordmark width={300} height={"100%"} stroke="#d1cec8" background="#161f2b" />
          </a>
        </header>
        <LanguageSelect
          flags={flags}
          selected={selected}
          callback={callback}
        />
        <section className="content">
          {currentLanguage.faq()}
          <hr />
        </section>
      </main>
    </div>
  );
};

