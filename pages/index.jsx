import React from 'react';

import { HeadContent } from '../components/HeadContent';
import { Logo, Wordmark } from '../components/icons/Brand';
import Discord from '../components/icons/Discord';
import Forum from '../components/icons/Forum';
import GitHub from '../components/icons/GitHub';

import { useLanguages } from '../components/languages';

const Index = () => {
  const [currentLanguage, flags] = useLanguages();

  return (
    <div className="container">
      <HeadContent flags={flags} selected={currentLanguage.name} title="Homepage" />

      <main>
        <header className="header">
          <Logo width={300} height="100%" />
        </header>
        <section
          className="content"
          style={{
            fontFamily: currentLanguage.fontFamily || 'english-grotesque'
          }}
        >
          <currentLanguage.body.default />
          <Wordmark width={300} height="100%" />
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
            <span className="icon">
              <a href="https://www.github.com/openmultiplayer">
                <GitHub />
              </a>
            </span>
          </p>
        </section>
      </main>
    </div>
  );
};

export default Index;
