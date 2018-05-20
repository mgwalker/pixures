const { EnvironmentPlugin } = require('webpack');
const path = require('path');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    js: './app.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'app.js'
  },
  plugins: [new EnvironmentPlugin(['IMAGE_METADATA_URL'])],
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader?presets[]=es2015,presets[]=react']
      }
    ]
  }
};
