# open.mp Landing Page

[![Build Status](https://travis-ci.org/openmultiplayer/homepage.svg?branch=master)](https://travis-ci.org/openmultiplayer/homepage)

The official landing page for the open.mp project.

## Contributing

To get started, first
[sign the Contributor License Agreement](https://www.clahub.com/agreements/openmultiplayer/homepage). This basically
just means you agree to let us use your work, and put it under an open-source license:

![CLA form](https://i.imgur.com/jp4Qjap.png)

- "Name" - Your real name or your github name.
- "Corporate Contributor Information" - If this doesn't apply, simply write "N/A".

This website is built with [Next.js](https://nextjs.org/) with no special configuration or surprises. Simply clone the
repo, run `npm install` to grab dependencies and `npm run dev` to start the development server on http://localhost:3000
then you can edit the source with hot reloading.

Run `npm build` to build a production distribution and `npm run favicon` to generate the favicon if ever the logo
changes.

## Translating

To add a translation, fork the repo and create a new branch. Copy `./language/English.jsx` and rename it to the English
name of the language you are translating to. Finally, add an entry to the map in `./components/languages.js`.

Now you can translate the English text, remember to maintain all structure (HTML elements) and only translate the actual
text nodes.

The table below tracks which questions have been translated to which languages. If you see one missing `[ ]` (because it
is new), or outdated `[-]` (because it was changed) in your language, please submit a new pull request adding it, and
update the table below in the pull request as well. Thank you.

- `[ ]` - not translated.
- `[x]` - translated.
- `[-]` - outdated.

| Question                                                  | Arabic | Croatian | Dutch | English | French | German | Greek	| Hungarian | Italian | Lithuanian | Norwegian | Portuguese | Romanian | Russian | Spanish | Polish |
| --------------------------------------------------------- | ------ | -------- | ----- | ------- | ------ | ------ | ----- | --------- | ------- | ---------- | --------- | ---------- | -------- | ------- | ------- | ------ |
| **Homepage**                                              | [x]    | [x]      | [x]   | [x]     | [x]    | [x]    | [x]   | [x]       | [x]     | [x]        | [x]       | [x]        | [x]      | [x]     | [x]     | [x]    |
| What is open.mp?                                          | [x]    | [x]      | [x]   | [x]     | [x]    | [x]    | [x]   | [x]       | [x]     | [x]        | [x]       | [x]        | [x]      | [x]     | [x]     | [x]    |
| Is it a fork?                                             | [x]    | [x]      | [x]   | [x]     | [x]    | [x]    | [x]   | [x]       | [x]     | [x]        | [x]       | [x]        | [x]      | [x]     | [x]     | [x]    |
| Why are you doing this?                                   | [x]    | [x]      | [x]   | [x]     | [x]    | [x]    | [x]   | [x]       | [x]     | [x]        | [x]       | [x]        | [x]      | [x]     | [x]     | [x]    |
| What are your opinions on Kalcor/SA:MP/whatever?          | [x]    | [ ]      | [ ]   | [x]     | [ ]    | [ ]    | [x]   | [ ]       | [x]     | [x]        | [ ]       | [x]        | [x]      | [x]     | [ ]     | [ ]    |
| Isn't this just splitting the community?                  | [x]    | [ ]      | [ ]   | [x]     | [ ]    | [ ]    | [x]   | [ ]       | [x]     | [x]        | [ ]       | [x]        | [x]      | [x]     | [ ]     | [ ]    |
| Since it is "Open" Multiplayer, will this be open-source? | [x]    | [x]      | [x]   | [x]     | [x]    | [x]    | [x]   | [x]       | [x]     | [x]        | [x]       | [x]        | [x]      | [x]     | [x]     | [x]    |
| When will it be released?                                 | [x]    | [ ]      | [ ]   | [x]     | [ ]    | [ ]    | [x]   | [ ]       | [x]     | [x]        | [ ]       | [x]        | [x]      | [x]     | [ ]     | [ ]    |
| How can I help?                                           | [x]    | [x]      | [x]   | [x]     | [x]    | [x]    | [x]   | [x]       | [x]     | [x]        | [x]       | [x]        | [x]      | [x]     | [x]     | [x]    |
| What is burgershot.gg?                                    | [x]    | [x]      | [x]   | [x]     | [x]    | [x]    | [x]   | [x]       | [x]     | [x]        | [x]       | [x]        | [x]      | [x]     | [x]     | [x]    |
| What about OpenMP?                                        | [x]    | [x]      | [x]   | [x]     | [x]    | [x]    | [x]   | [x]       | [x]     | [x]        | [x]       | [x]        | [x]      | [x]     | [x]     | [x]    |
