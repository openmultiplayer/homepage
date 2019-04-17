export const LANGUAGES = {
  "🇬🇧": "English",
  "🇳🇱": "Dutch",
  "🇪🇸": "Spanish",
  "🇩🇪": "German",
  "🇷🇺": "Russian",
  "🇧🇷": "Portuguese",
  "🇷🇴": "Romanian"
};

export const loadLanguages = (initial, [ language, setLanguage ]) => {
  let languages = {};
  for (var flag in LANGUAGES) {
    let { BODY, FAQ } = require("../language/" + LANGUAGES[flag]);
    languages[flag] = {
      body: BODY,
      faq: FAQ
    };
  }

  if (language === "🇽🇽") {
    if (initial in languages) {
      language = initial;
    } else {
      language = "🇬🇧";
    }
  }

  return [ languages[language], Object.keys(languages), language, setLanguage ];
};

