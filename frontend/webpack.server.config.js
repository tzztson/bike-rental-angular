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
  console.log(i18nPath);
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
  plugins: [
    new webpack.DefinePlugin({
      TRANSLATE_VERSION: createI18nHash(),
    }),
  ],
  resolve: {
    fallback: {
      http: false,
      path: false,
      stream: false,
      net: false,
      crypto: false,
      fs: false,
    },
  },
  externals: ['bufferutil', 'utf-8-validate'],
};
