const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: { loader: 'file-loader' }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'public/index.html'
    })
  ],
  devServer: {
    port: 3000
  }
};
