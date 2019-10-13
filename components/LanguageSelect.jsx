/* eslint-disable react/no-array-index-key */
import React from 'react';
import Link from 'next/link';
import 'flag-icon-css/css/flag-icon.css';

const LanguageSelect = ({ flags, selected }) => {
  // no-op for single-language
  if (flags.length === 1) {
    return <div className="lang-list" />;
  }

  return (
    <div className="lang-list">
      {flags.map((value, index) => {
        let className = 'lang-flag';
        if (value === selected) {
          className += ' lang-flag-selected';
        }
        return (
          <Link key={value} href={`?lang=${value}`}>
            <a key={index} className={className} role="link">
              <span className={`flag-icon flag-icon-${value}`} />
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export { LanguageSelect };
