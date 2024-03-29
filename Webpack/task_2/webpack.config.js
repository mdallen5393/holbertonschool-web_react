const path = require('path');

module.exports = {
  entry: './js/dashboard_main.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "image-webpack-loader", "file-loader"],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      }
    ]
  }
}
