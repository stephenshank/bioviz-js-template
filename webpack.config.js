const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app.js',
  output: {
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "ACME Biological Data Visualization"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ] 
      }
    ],
  },
  devServer: {
    host: '0.0.0.0',
    historyApiFallback: true,
    disableHostCheck: true
  }
}
