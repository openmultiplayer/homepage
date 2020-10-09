import find from 'lodash/fp/find';

import { useMemo } from 'react';
/* eslint-disable global-require */
import { useRouter } from 'next/router';

// These should be in alphabetical order by English name.
export const LANGUAGES = [
  { id: 'sa', name: 'Arabic' },
  { id: 'hr', name: 'Croatian', fontFamily: 'sans-serif' },
  { id: 'nl', name: 'Dutch' },
  { id: 'gb', name: 'English' },
  { id: 'ee', name: 'Estonian' },
  { id: 'fr', name: 'French' },
  { id: 'ge', name: 'Georgian' },
  { id: 'de', name: 'German' },
  { id: 'gr', name: 'Greek', fontFamily: 'sans-serif' },
  { id: 'hu', name: 'Hungarian' },
  { id: 'id', name: 'Indonesian' },
  { id: 'it', name: 'Italian' },
  { id: 'jp', name: 'Japanese' },
  { id: 'lt', name: 'Lithuanian', fontFamily: 'sans-serif' },
  { id: 'no', name: 'Norwegian' },
  { id: 'pl', name: 'Polish', fontFamily: 'sans-serif' },
  { id: 'br', name: 'Portuguese' },
  { id: 'ro', name: 'Romanian' },
  { id: 'ru', name: 'Russian' },
  { id: 'cn', name: 'SimplifiedChinese' },
  { id: 'es', name: 'Spanish' },
  { id: 'th', name: 'Thai' },
  { id: 'tw', name: 'TraditionalChinese' },
  { id: 'tr', name: 'Turkish' },
  { id: 'ua', name: 'Ukrainian', fontFamily: 'sans-serif' },
  { id: 'vn', name: 'Vietnamese', fontFamily: 'sans-serif' },
  { id: 'rs', name: 'Serbian' },
  { id: 'pk', name: 'Urdu' },
];

const findByID = (id) => find((i) => i.id === id);

export const useLanguages = () => {
  const {
    query: { lang: languageFromUrl },
  } = useRouter();

  const language = findByID(languageFromUrl)(LANGUAGES) || { id: 'gb', name: 'English' };

  const { name, fontFamily } = language;

  // eslint-disable-next-line import/no-dynamic-require
  const BODY = useMemo(() => require(`../language/${name}/index.mdx`), [name]);
  // eslint-disable-next-line import/no-dynamic-require
  const FAQ = useMemo(() => require(`../language/${name}/faq.mdx`), [name]);

  return [
    {
      name: language.id,
      fontFamily,
      body: BODY,
      faq: FAQ,
    },
    LANGUAGES,
  ];
};
