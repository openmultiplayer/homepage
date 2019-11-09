import React from 'react';
import { Anchor } from './Typography';
import { useLanguages } from './languages';
import { LanguageSelect } from './LanguageSelect';

const Nav = () => {
  const [{ name: lang }, flags] = useLanguages();
  return (
    <nav>
      <ul>
        <li>
          <Anchor href={`/?lang=${lang}`}>
            <span className="button">Home</span>
          </Anchor>
        </li>
        <li>
          <Anchor href={`/faq?lang=${lang}`}>
            <span className="button">FAQ</span>
          </Anchor>
        </li>
        <li>
          <Anchor href={`/progress?lang=${lang}`}>
            <span className="button">Progress</span>
          </Anchor>
        </li>
        <li>
          <Anchor href={`/blog?lang=${lang}`}>
            <span className="button">Blog</span>
          </Anchor>
        </li>
        <li>
          <LanguageSelect selected={lang} flags={flags}>
            <span className="button">
              <span className={`flag-icon flag-icon-${lang}`} />
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
