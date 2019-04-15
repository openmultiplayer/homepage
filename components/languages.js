export const LANGUAGES = {
  "🇬🇧": "English",
  "🇳🇱": "Dutch",
  "🇪🇸": "Spanish",
  "🇩🇪": "German",
  "🇷🇺": "Russian"
};

export const loadLanguages = () => {
  let result = {};
  for (var flag in LANGUAGES) {
    let { BODY, FAQ } = require("../language/" + LANGUAGES[flag]);
    result[flag] = {
      body: BODY,
      faq: FAQ
    };
  }
  return result;
};
