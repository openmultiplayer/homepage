import React from 'react';
import 'flag-icon-css/css/flag-icon.css';

export const LanguageSelect = (props) => {
  // no-op for single-language
  if (props.flags.length === 1) {
    return <div />;
  }

  return (
    <div className="lang-list">
      {props.flags.map((value, index, array) => {
        let className = "lang-flag";
        if (value == props.selected) {
          className += " lang-flag-selected";
        }
        return (
          <a href={`?lang=${value}`} key={index} className={className} onClick={(e) => props.callback(e, value)}>
            <span className={`flag-icon flag-icon-${value}`}></span>
          </a>
        );
      })}
    </div>
  );
};

