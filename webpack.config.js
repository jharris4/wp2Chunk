var path = require('path');

const config = {
  entry: {
   main: './index.js',
  },
  output: {
    path: __dirname + '/public/js',
    publicPath: '/public/js/',
    filename: '[name].js',
    chunkFilename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true
        },
        include: [path.resolve(__dirname, 'index.js'), path.resolve(__dirname, 'scripts')]
      }
    ]
  }
};
module.exports = config;