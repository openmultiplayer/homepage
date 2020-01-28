import React from 'react';
import { Anchor } from './Typography';
import { LanguageSelect } from './LanguageSelect';
import { useLanguages } from './languages';

const Nav = () => {
  const { currentLanguage, flags } = useLanguages();

  return (
    <nav>
      <ul>
        <li>
          <Anchor href={`/?lang=${currentLanguage.name}`}>
            <span className="button">Home</span>
          </Anchor>
        </li>
        <li>
          <Anchor href={`/faq?lang=${currentLanguage.name}`}>
            <span className="button">FAQ</span>
          </Anchor>
        </li>
        <li>
          <Anchor href={`/progress?lang=${currentLanguage.name}`}>
            <span className="button">Progress</span>
          </Anchor>
        </li>
        <li>
          <Anchor href={`/blog?lang=${currentLanguage.name}`}>
            <span className="button">Blog</span>
          </Anchor>
        </li>
        <li>
          <LanguageSelect selected={currentLanguage.name} flags={flags}>
            <span className="button">
              <span className={`flag-icon flag-icon-${currentLanguage.name}`} />
            </span>
          </LanguageSelect>
        </li>
      </ul>

      <style jsx>{`
        ul {
          display: flex;
          list-style: none;
          padding-left: 0px;
          justify-content: space-around;
          align-items: baseline;
        }
        li {
          min-width: 40px;
          min-height: 2em;
        }
        .button {
          border-radius: 2px;
          background-color: #3d3d3d;
          padding: 0.2em 1em 0.2em 1em;
        }
        .button:hover {
          background-color: #8d8d8d;
        }
      `}</style>
    </nav>
  );
};

export default Nav;
