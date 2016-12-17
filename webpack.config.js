'use strict';
var webpack = require('webpack');
var path = require('path');
const ElectronPackager = require("webpack-electron-packager");

module.exports = {
  context: __dirname + '/app',
  entry: 'app.js',

  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: path.join(__dirname, 'app'),
    pathinfo: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ExternalsPlugin('commomjs', ['electron']),
    /*
     * Uncommented if you need to build your application
     */
    /*
    new ElectronPackager({
          dir: __dirname, // destination path build app
          arch: "x64", // ia32, x64, armv7l, all
          platform: "win32", // linux, win32, darwin, mas, all
          ignore: "node_modules/electron*"
        })
    */
  ],
  resolve: {
    root: path.join(__dirname, 'app'),
    extensions: ['','.ts','.js','.json', '.css', '.less', '.html'],
    modulesDirectories: ['node_modules']
  },
  module: {
    loaders: [
        {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                cacheDirectory: true,
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.less$/,
            loader: 'style-loader!css-loader!less-loader'
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }
    ]
  },
  target:'electron-renderer'
};
