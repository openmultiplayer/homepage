export const LANGUAGES = {
  'gb': 'English',
  'fr': 'French',
  'nl': 'Dutch',
  'es': 'Spanish',
  'de': 'German',
  'ru': 'Russian',
  'br': 'Portuguese',
  'ro': 'Romanian',
  'hr': 'Croatian',
  'hu': 'Hungarian',
  'sa': 'Arabic',
  'no': 'Norwegian',
  'lt': 'Lithuanian',
  'it': 'Italian',
};

export const loadLanguages = (initial, [ language, setLanguage ]) => {
  if (language === 'xx') {
    if (LANGUAGES.hasOwnProperty(initial)) {
      language = initial;
    } else {
      language = 'gb';
    }

    // Store the newly derived initial language.
    setLanguage(language);
  }

  const { BODY, FAQ } = require(`../language/${LANGUAGES[language]}`);

  return [{
      body: BODY,
      faq: FAQ,
    },
    Object.keys(LANGUAGES),
    language,
    (e, l) => {
      e.preventDefault();
      setLanguage(l);
    }
  ];
};
