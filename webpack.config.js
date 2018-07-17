var webpack = require('webpack');
var path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
    watch: true,
    module: {
    rules: [
        {
          use: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        },
        {
            test: /\.scss$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
        },
        {
            test: /\.(png|jp?g|gif|svg)$/,
            use: [
                {
                    loader: "url-loader",
                    options: { limit: 40000}
                },
                'image-webpack-loader'
            ]
        }]

    },
    plugins: [
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            files: ['./dist/*.html'],
            server: { baseDir: ['dist'] }
        })
    ]

};
