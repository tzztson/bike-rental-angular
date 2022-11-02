const path = require('path');
const webpack = require('webpack');
const fs = require('fs');
const crypto = require('crypto');

function hashFileContent(filePath) {
  const fileBuffer = fs.readFileSync(filePath);
  const hashSum = crypto.createHash('sha256');
  hashSum.update(fileBuffer);

  return hashSum.digest('hex');
}

function createI18nHash() {
  const i18nPath = path.join(__dirname, 'src', 'assets', 'i18n');
  const files = fs.readdirSync(i18nPath);
  let hash = files.map((file) => hashFileContent(path.join(i18nPath, file))).join('-');

  /**
   * webpack.DefinePlugin does does a direct text replacement,
   * thus the value given to it must include actual quotes inside of the string itself
   */
  hash = `'${hash}'`;

  return hash;
}

module.exports = {
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['data-cy-loader'],
      },
    ],
  },
  resolveLoader: {
    alias: {
      'data-cy-loader': path.join(__dirname, 'data-cy-loader.js'),
    },
  },
  resolve: {
    fallback: {
      http: false,
      path: false,
      stream: false,
      net: false,
      crypto: false,
      fs: false,
      zlib: false,
      util: false,
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      TRANSLATE_VERSION: createI18nHash(),
    }),
    // Filter out the moment locales to reduce bundle size
    // Locales that should be included MUST be added to the project, otherwise they won't be available for use)
    // References:
    // https://github.com/jmblog/how-to-optimize-momentjs-with-webpack
    // new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    // load `moment/locale/nl.js` - en is loaded by default
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /nl/),
  ],
};
// load `moment/locale/nl.js` - en is loaded by default
new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /nl/);
