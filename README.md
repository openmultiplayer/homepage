# open.mp Landing Page

[![Build Status](https://travis-ci.org/openmultiplayer/homepage.svg?branch=master)](https://travis-ci.org/openmultiplayer/homepage)

The official landing page for the open.mp project.

## Contributing

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
