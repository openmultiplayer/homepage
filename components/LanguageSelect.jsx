/* eslint-disable react/no-array-index-key */
import React from "react";
import "flag-icon-css/css/flag-icon.css";

export const LanguageSelect = ({ flags, selected, callback }) => {
  // no-op for single-language
  if (flags.length === 1) {
    return <div />;
  }

  return (
    <div className="lang-list">
      {flags.map((value, index) => {
        let className = "lang-flag";
        if (value === selected) {
          className += " lang-flag-selected";
        }
        return (
          <a
            href={`?lang=${value}`}
            key={index}
            className={className}
            onClick={e => callback(e, value)}
          >
            <span className={`flag-icon flag-icon-${value}`} />
          </a>
        );
      })}
    </div>
  );
};
