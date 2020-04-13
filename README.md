# open.mp Landing Page

[![Build Status](https://travis-ci.org/openmultiplayer/homepage.svg?branch=master)](https://travis-ci.org/openmultiplayer/homepage)

The official landing page for the open.mp project.

## Contributing

Read the `CONTRIBUTING.md` document first.

This website is built with [Next.js](https://nextjs.org/) with no special configuration or
surprises. Simply clone the repo, run `npm install` to grab dependencies and `npm run dev` to start
the development server on http://localhost:3000 then you can edit the source with hot reloading.

Run `npm build` to build a production distribution and `npm run favicon` to generate the favicon if
ever the logo changes.

## Translating

To add a translation:

1. fork the repo
2. create a new branch, the name doesn't matter
3. copy the `./language/English/` directory
4. rename your new directory to the _English_ name of your language
5. add an entry to the map in `./components/languages.js`.

Now you can translate the English text inside `index.mdx` and `faq.mdx`. This file format is
Markdown and is pretty straightforward to understand. Use underscores for italics and
double-asterisks for bold. See [here](https://commonmark.org/help/) for more information on
markdown.

### (Optional) Add Yourself As an "Owner"

If you want to be in charge of maintaining your language, please make a PR to the `CODEOWNERS` file
and change `@openmultiplayer/ops` to your GitHub username. This tells GitHub that you have
permission to write to this specific directory and notifies other contributors that you're
maintaining these files.

### Translation Progress Table

The table below tracks which questions have been translated to which languages. If you see one
missing `[ ]` (because it is new), or outdated `[-]` (because it was changed) in your language,
please submit a new pull request adding it, and update the table below in the pull request as well.
Thank you.

- `[ ]` - not translated.
- `[x]` - translated.
- `[-]` - outdated.

| Question                                                  | Arabic | Croatian | Dutch | English | French | Georgian | German | Greek | Hungarian | Italian | Indonesian | Lithuanian | Norwegian | Portuguese | Romanian | Russian | Spanish | Polish | Japanese | TraditionalChinese | SimplifiedChinese |
| --------------------------------------------------------- | ------ | -------- | ----- | ------- | ------ | -------- | ------ | ----- | --------- | ------- | ---------- | ---------- | --------- | ---------- | -------- | ------- | ------- | ------ | -------- | ------------------ | ----------------- |
| **Homepage**                                              | [x]    | [x]      | [x]   | [x]     | [x]    | [x]      | [x]    | [x]   | [x]       | [x]     | [x]        | [x]        | [x]       | [x]        | [x]      | [x]     | [x]     | [x]    | [x]      | [x]                | [x]               |
| What is open.mp?                                          | [x]    | [x]      | [x]   | [x]     | [x]    | [x]      | [x]    | [x]   | [x]       | [x]     | [x]        | [x]        | [x]       | [x]        | [x]      | [x]     | [x]     | [x]    | [x]      | [x]                | [x]               |
| Is it a fork?                                             | [x]    | [x]      | [x]   | [x]     | [x]    | [x]      | [x]    | [x]   | [x]       | [x]     | [x]        | [x]        | [x]       | [x]        | [x]      | [x]     | [x]     | [x]    | [x]      | [x]                | [x]               |
| Why are you doing this?                                   | [x]    | [x]      | [x]   | [x]     | [x]    | [x]      | [x]    | [x]   | [x]       | [x]     | [x]        | [x]        | [x]       | [x]        | [x]      | [x]     | [x]     | [x]    | [x]      | [x]                | [x]               |
| What are your opinions on Kalcor/SA:MP/whatever?          | [x]    | [ ]      | [ ]   | [x]     | [ ]    | [x]      | [x]    | [x]   | [ ]       | [x]     | [x]        | [x]        | [ ]       | [x]        | [x]      | [x]     | [ ]     | [ ]    | [x]      | [x]                | [x]               |
| Isn't this just splitting the community?                  | [x]    | [ ]      | [ ]   | [x]     | [ ]    | [x]      | [x]    | [x]   | [ ]       | [x]     | [x]        | [x]        | [ ]       | [x]        | [x]      | [x]     | [ ]     | [ ]    | [x]      | [x]                | [x]               |
| Since it is "Open" Multiplayer, will this be open-source? | [x]    | [x]      | [x]   | [x]     | [x]    | [x]      | [x]    | [x]   | [x]       | [x]     | [x]        | [x]        | [x]       | [x]        | [x]      | [x]     | [x]     | [x]    | [x]      | [x]                | [x]               |
| When will it be released?                                 | [x]    | [ ]      | [ ]   | [x]     | [ ]    | [x]      | [x]    | [x]   | [ ]       | [x]     | [x]        | [x]        | [ ]       | [x]        | [x]      | [x]     | [ ]     | [ ]    | [x]      | [x]                | [x]               |
| How can I help?                                           | [x]    | [x]      | [x]   | [x]     | [x]    | [x]      | [x]    | [x]   | [x]       | [x]     | [x]        | [x]        | [x]       | [x]        | [x]      | [x]     | [x]     | [x]    | [x]      | [x]                | [x]               |
| What is burgershot.gg?                                    | [x]    | [x]      | [x]   | [x]     | [x]    | [x]      | [x]    | [x]   | [x]       | [x]     | [x]        | [x]        | [x]       | [x]        | [x]      | [x]     | [x]     | [x]    | [x]      | [x]                | [x]               |
| What about OpenMP?                                        | [x]    | [x]      | [x]   | [x]     | [x]    | [x]      | [x]    | [x]   | [x]       | [x]     | [x]        | [x]        | [x]       | [x]        | [x]      | [x]     | [x]     | [x]    | [x]      | [x]                | [x]               |

## Blog

(For team members)

To write a new blog post, simply create a `.mdx` file in `pages/blog/` and write Markdown. You
_must_ include a metadata object at the top:

```js
export const meta = {
  title: 'An open.mp Blog Post',
  date: '2020-04-06T23:47:00',
  author: 'Southclaws',
};
```
