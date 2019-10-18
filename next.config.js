const { parsed: localEnv } = require('dotenv').config();
const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
});
const fs = require('fs');

const getBlogPostPages = () => {
  return fs
    .readdirSync('./posts')
    .filter((v) => v.endsWith('.mdx'))
    .map((v) => v.substring(0, v.indexOf('.mdx')));
};

module.exports = withPlugins([[withMDX], [withCSS], [withImages]], {
  env: {
    GA_ID: 'UA-78828365-7',
    BLOG_POST_LIST: getBlogPostPages(),
    ...localEnv
  },
  pageExtensions: ['js', 'jsx', 'mdx']
});
