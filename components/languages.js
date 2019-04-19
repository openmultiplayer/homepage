/* eslint-disable global-require */

// These should be in alphabetical order by English name.
export const LANGUAGES = {
  sa: "Arabic",
  hr: "Croatian",
  nl: "Dutch",
  gb: "English",
  fr: "French",
  de: "German",
  hu: "Hungarian",
  it: "Italian",
  lt: "Lithuanian",
  no: "Norwegian",
  br: "Portuguese",
  ro: "Romanian",
  ru: "Russian",
  es: "Spanish",
  pl: "Polish",
  ee: "Estonian",
  vn: "Vietnamese"
};

export const loadLanguages = (initial, [language, setLanguage]) => {
  let currentLanguage = language;
  if (language === "xx") {
    if (Object.prototype.hasOwnProperty.call(LANGUAGES, initial)) {
      currentLanguage = initial;
    } else {
      currentLanguage = "gb";
    }

    // Store the newly derived initial language.
    setLanguage(currentLanguage);
  }

  // eslint-disable-next-line import/no-dynamic-require
  const { BODY, FAQ } = require(`../language/${LANGUAGES[currentLanguage]}`);

  return [
    {
      body: BODY,
      faq: FAQ
    },
    Object.keys(LANGUAGES),
    language,
    (e, l) => {
      e.preventDefault();
      setLanguage(l);
    }
  ];
};
