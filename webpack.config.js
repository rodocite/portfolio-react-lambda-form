const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src/frontend/client.js'),
  output: {
    path: './dist',
    filename: 'app-bundle.js'
  },
  module: {
    loaders: [
      {
        test: [/\.js$/, /\.jsx$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
    noParse: [/aws\-sdk/]
  },
  devServer: {
    contentBase: 'dist/'
  },
  devtool: 'cheap-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
}
