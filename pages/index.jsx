import React from "react";
import { useState } from "react";
import Head from "next/head";

import { HeadContent } from "../components/HeadContent";
import { LanguageSelect } from "../components/LanguageSelect";
import Wordmark from "../components/icons/Wordmark";
import Discord from "../components/icons/Discord";
import Forum from "../components/icons/Forum";

import { loadLanguages } from "../components/languages";

const Index = () => {
  let [language, setLanguage] = useState("🇬🇧");

  let languages = loadLanguages();
  let currentLanguage = languages[language];

  return (
    <div className="container">
      <HeadContent />
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
          {currentLanguage.body()}
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

export default Index;
