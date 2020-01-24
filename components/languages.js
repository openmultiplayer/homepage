/* eslint-disable react/jsx-filename-extension */
import React from 'react';

// These should be in alphabetical order by English name.
export const LANGUAGES = {
  sa: ['Arabic'],
  hr: ['Croatian', 'sans-serif'],
  nl: ['Dutch'],
  gb: ['English'],
  ee: ['Estonian'],
  fr: ['French'],
  ge: ['Georgian'],
  de: ['German'],
  gr: ['Greek', 'sans-serif'],
  hu: ['Hungarian'],
  id: ['Indonesian'],
  it: ['Italian'],
  jp: ['Japanese'],
  lt: ['Lithuanian', 'sans-serif'],
  no: ['Norwegian'],
  pl: ['Polish', 'sans-serif'],
  br: ['Portuguese'],
  ro: ['Romanian'],
  ru: ['Russian'],
  cn: ['SimplifiedChinese'],
  es: ['Spanish'],
  tw: ['TraditionalChinese'],
  tr: ['Turkish'],
  ua: ['Ukrainian', 'sans-serif'],
  vn: ['Vietnamese', 'sans-serif']
};

export const LanguageContext = React.createContext(null);

export const withLanguages = (Page) => {
  const WithLanguages = ({ currentLanguage, flags, ...props }) => (
    <LanguageContext.Provider value={{ currentLanguage, flags }}>
      <Page currentLanguage={currentLanguage} flags={flags} {...props} />
    </LanguageContext.Provider>
  );

  WithLanguages.getInitialProps = async (context) => {
    const languageFromUrl = context.query.lang;

    const currentLanguage =
      languageFromUrl && Object.prototype.hasOwnProperty.call(LANGUAGES, languageFromUrl)
        ? languageFromUrl
        : 'gb';

    const [name, fontFamily] = LANGUAGES[currentLanguage];

    const BODY = await import(`../language/${name}/index.mdx`);
    const FAQ = await import(`../language/${name}/faq.mdx`);

    return {
      ...(Page.getInitialProps ? await Page.getInitialProps(context) : {}),
      currentLanguage: {
        name: currentLanguage,
        fontFamily,
        body: BODY,
        faq: FAQ
      },
      flags: Object.keys(LANGUAGES).sort()
    };
  };

  WithLanguages.displayName = `WithLanguages(${Page.displayName || Page.name || 'Unknown'})`;

  return WithLanguages;
};
