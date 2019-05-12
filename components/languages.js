/* eslint-disable global-require */

// These should be in alphabetical order by English name.
export const LANGUAGES = {
  sa: 'Arabic',
  hr: 'Croatian',
  nl: 'Dutch',
  gb: 'English',
  ee: 'Estonian',
  fr: 'French',
  ge: 'Georgian',
  de: 'German',
  gr: 'Greek',
  hu: 'Hungarian',
  it: 'Italian',
  id: 'Indonesian',
  jp: 'Japanese',
  lt: 'Lithuanian',
  no: 'Norwegian',
  pl: 'Polish',
  br: 'Portuguese',
  ro: 'Romanian',
  ru: 'Russian',
  cn: 'SimplifiedChinese',
  es: 'Spanish',
  tw: 'TraditionalChinese',
  tr: 'Turkish',
  ua: 'Ukrainian',
  vn: 'Vietnamese'
};

export const loadLanguages = (initial) => {
  let currentLanguage = initial;
  if (initial === undefined) {
    if (Object.prototype.hasOwnProperty.call(LANGUAGES, initial)) {
      currentLanguage = initial;
    } else {
      currentLanguage = 'gb';
    }
  }

  // eslint-disable-next-line import/no-dynamic-require
  const BODY = require(`../language/${LANGUAGES[currentLanguage]}/index.mdx`);
  // eslint-disable-next-line import/no-dynamic-require
  const FAQ = require(`../language/${LANGUAGES[currentLanguage]}/faq.mdx`);

  return [
    {
      name: currentLanguage,
      body: BODY,
      faq: FAQ
    },
    Object.keys(LANGUAGES).sort()
  ];
};
