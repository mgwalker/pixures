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
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          // This loader handles resolving SASS relative URLs from other
          // paths, particularly USWDS in the node_modules directory.
          // 'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['/Users/mgwalker/Documents/Source/images/node_modules/bourbon-neat/core']
            }
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