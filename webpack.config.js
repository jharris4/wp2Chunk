const config = {
  entry: {
   add: './scripts/add.js',
   another: './scripts/subtract.js',
   main: './index.js',
  },
  output: {
    path: __dirname + '/public/js',
    publicPath: '/public/js/',
    filename: '[name].js',
  },

};
module.exports = config;