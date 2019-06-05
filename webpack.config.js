const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /.jsx?$/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      GIPHY_API_KEY: JSON.stringify(process.env.GIPHY_API_KEY)
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
}
