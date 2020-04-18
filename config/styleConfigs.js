const miniCssExtractPlugin = require('mini-css-extract-plugin');

const { generateOutputNameCSS } = require('./resolution');

const directPathsToImport = require('./directPathsToImport');

const miniCssInitialized = new miniCssExtractPlugin({
  // filename: '[name].css',
  // chunkFilename: '[id].css',
  moduleFilename: (chunkData) => {
    // console.log({ chunkData });
    return generateOutputNameCSS('components', chunkData, directPathsToImport);
    // return '[name].css';
  },
});

const stylusProdModuleRule = {
  test: /\.styl$/,
  loader: [miniCssExtractPlugin.loader, 'css-loader', 'stylus-loader'],
};

const stylusDevModuleRule = {
  test: /\.styl$/,
  loader: ['style-loader','css-loader','stylus-loader'],
};

module.exports = {
  miniCssInitialized,
  stylusProdModuleRule,
  stylusDevModuleRule,
};
