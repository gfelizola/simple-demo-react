/**
* webpack-dev-server.config.js
* @copyright Maichong Software Ltd. 2016 http://maichong.it
* @date 2016-01-14
* @author Liang <liang@maichong.it>
*/

'use strict';

var webpack               = require('webpack');
var path                  = require('path');
var buildPath             = path.resolve(__dirname, 'build');
var nodeModulesPath       = path.resolve(__dirname, 'node_modules');
var TransferWebpackPlugin = require('transfer-webpack-plugin');
var ExtractTextPlugin     = require("extract-text-webpack-plugin");

var config = {
    //Entry points to the project
    entry: [
        'webpack-dev-server/client?http://localhost:4000',
        'webpack/hot/only-dev-server',
        path.join(__dirname, '/src/app.jsx'),
    ],
    //Config options on how to interpret requires imports
    resolve: {
        extensions: ["", ".js", ".jsx"],
        modulesDirectories: ['node_modules','src']
    //node_modules: ["web_modules", "node_modules"]  (Default Settings)
    },
    //Server Configuration options
    devServer: {
        contentBase: 'src',  //Relative directory for base of server
        devtool: 'eval',
        hot: true,        //Live-reload
        inline: true,
        port: 4000        //Port Number
    },
    devtool: 'eval',
    output: {
        publicPath: "http://127.0.0.1:4000/",
        path: buildPath,
        filename: 'app.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        }),
        //Enables Hot Modules Replacement
        new webpack.HotModuleReplacementPlugin(),
        //Allows error warnings but does not stop compiling. Will remove when eslint is added
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin("style.css")
    ],
    module: {
    //Loaders to interpret non-vanilla javascript code as well as most other extensions including images and text.
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader'},
            { test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader","css!sass")},
            {
                //React-hot loader
                test: /\.(js|jsx)$/,  //All .js and .jsx files
                loaders: ['react-hot', 'babel'], //react-hot is like browser sync and babel loads jsx and es6-7
                exclude: [nodeModulesPath]
            }
        ]
    }
};

module.exports = config;
