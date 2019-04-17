import React from "react";

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
            {value}
          </a>
        );
      })}
    </div>
  );
};

