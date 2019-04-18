// These should be in alphabetical order by English name.
export const LANGUAGES = {
  'sa': 'Arabic',
  'hr': 'Croatian',
  'nl': 'Dutch',
  'gb': 'English',
  'fr': 'French',
  'de': 'German',
  'hu': 'Hungarian',
  'it': 'Italian',
  'lt': 'Lithuanian',
  'no': 'Norwegian',
  'br': 'Portuguese',
  'ro': 'Romanian',
  'ru': 'Russian',
  'es': 'Spanish',
  'pl': 'Polish',
  'ee': 'Estonian',
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
