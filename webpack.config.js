var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './app/index',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  // output: {
  //   path: path.join(__dirname, 'public/scripts'),
  //   publicPath: "/scripts/",
  //   filename: 'app.bundle.js'
  // },

  devServer: {
    inline: true,
    contentBase: './public',
    // contentBase: path.join(__dirname, 'public/'),
    stats: { colors: true }
  },

  plugins: [
    new webpack.ProvidePlugin({
      riot: 'riot'
    })
  ],
  module: {
    preLoaders: [
      { test: /\.tag$/, exclude: /node_modules/, loader: 'riotjs-loader', query: { type: 'none' } }
    ],
    loaders: [
      { test: /\.js$|\.tag$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
};
