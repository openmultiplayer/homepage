export const LANGUAGES = {
  "🇬🇧": "English",
  "🇫🇷": "French",
  "🇳🇱": "Dutch",
  "🇪🇸": "Spanish",
  "🇩🇪": "German",
  "🇷🇺": "Russian",
  "🇧🇷": "Portuguese",
  "🇷🇴": "Romanian",
  "🇭🇷": "Croatian",
  "🇭🇺": "Hungarian",
  "🇸🇦": "Arabic",
  "🇳🇴": "Norwegian"
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
