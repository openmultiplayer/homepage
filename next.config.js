const { parsed: localEnv } = require("dotenv").config();
const withPlugins = require("next-compose-plugins");
const withCSS = require("@zeit/next-css");
const withImages = require("next-images");
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/
});

module.exports = withPlugins([[withMDX], [withCSS], [withImages]], {
  env: {
    GA_ID: "UA-78828365-7",
    ...localEnv
  },
  pageExtensions: ["js", "jsx", "mdx"]
});
