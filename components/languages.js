/* eslint-disable global-require */
import { useRouter } from 'next/router';

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
  vn: ['Vietnamese', 'sans-serif'],
  rs: ['Serbian']
};

export const useLanguages = () => {
  const {
    query: { lang: languageFromUrl }
  } = useRouter();

  let currentLanguage = 'gb';
  if (languageFromUrl && Object.prototype.hasOwnProperty.call(LANGUAGES, languageFromUrl)) {
    currentLanguage = languageFromUrl;
  }

  const [name, fontFamily] = LANGUAGES[currentLanguage];

  // eslint-disable-next-line import/no-dynamic-require
  const BODY = require(`../language/${name}/index.mdx`);
  // eslint-disable-next-line import/no-dynamic-require
  const FAQ = require(`../language/${name}/faq.mdx`);

  return [
    {
      name: currentLanguage,
      fontFamily,
      body: BODY,
      faq: FAQ
    },
    Object.keys(LANGUAGES).sort()
  ];
};
