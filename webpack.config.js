const path = require('path');

module.exports = {
  entry: './index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'), 
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: "ts-loader",
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.js' ]
  },
  mode: 'development',
  devServer: {
    inline: true
  },
  devtool: "source-map",
  devServer: {
    inline:true,
    port: 8008
  },
}