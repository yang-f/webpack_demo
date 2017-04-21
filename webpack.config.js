var path = require('path');

module.exports = {
  entry: ['webpack/hot/dev-server', path.resolve(__dirname, './app/main.js')],
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'yangf.js',
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader',query: {presets:['react','es2015','stage-0']}},
      { test: /\.css$/, loader: "style!css" },
      { test: /\.less/,loader: 'style-loader!css-loader!less-loader'}
    ]
  }
};
