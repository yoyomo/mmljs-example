const path = require('path');
const outputPath = path.resolve(__dirname, './docs');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: outputPath,
  },
  module: {
    rules: [
      {
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.ts', '.js', '.d.ts', '.mjs' ],
  },
  devServer: {
    contentBase: outputPath
  },
};