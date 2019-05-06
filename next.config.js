const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
module.exports = withCSS(
  withImages({
    env: {
      GA_ID: 'UA-78828365-7'
    }
  })
);
