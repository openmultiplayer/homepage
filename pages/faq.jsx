import React from "react";
import { useState } from "react";

import { HeadContent } from "../components/HeadContent";
import { LanguageSelect } from "../components/LanguageSelect";
import Wordmark from "../components/icons/Wordmark";

import { loadLanguages } from "../components/languages";

export default () => {
  let [language, setLanguage] = useState("🇬🇧");

  let languages = loadLanguages();
  let currentLanguage = languages[language];

  return (
    <div className="container">
      <HeadContent title="FAQ" />

      <main>
        <header className="header">
          <Wordmark width={300} height={"100%"} stroke="#d1cec8" background="#161f2b" />
        </header>
        <LanguageSelect
          flags={Object.keys(languages)}
          selected={language}
          callback={l => {
            setLanguage(l);
          }}
        />
        <section className="content">
          {currentLanguage.faq()}
          <hr />
        </section>
      </main>
    </div>
  );
};
