const { parsed: localEnv } = require('dotenv').config();
const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css');
const withImages = require('next-images');

module.exports = withPlugins([[withCSS], [withImages]], {
  env: {
    GA_ID: 'UA-78828365-7',
    ...localEnv
  }
});
