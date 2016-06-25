/**
* webpack-dev-server.config.js
* @copyright Maichong Software Ltd. 2016 http://maichong.it
* @date 2016-01-14
* @author Liang <liang@maichong.it>
*/

'use strict';

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const buildPath = path.resolve(__dirname, 'build');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');

const port = 4000;

const config = {
	// Entry points to the project
	entry: [
		'webpack-dev-server/client?http://localhost:4000',
		'webpack/hot/only-dev-server',
		path.join(__dirname, '/src/app.jsx'),
		path.join(__dirname, '/src/sass/init.scss')
	],
	// Config options on how to interpret requires imports
	resolve: {
		extensions: ['', '.js', '.jsx'],
		modulesDirectories: ['node_modules', 'src']
	},
	// Server Configuration options
	devServer: {
		contentBase: 'src', // Relative directory for base of server
		devtool: 'eval',
		hot: true,
		inline: true,
		port
	},
	devtool: 'eval',
	output: {
		publicPath: `http://127.0.0.1:${port}/`,
		path: buildPath,
		filename: 'app.js'
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': '"development"'
		}),
		// Enables Hot Modules Replacement
		new webpack.HotModuleReplacementPlugin(),
		// Allows error warnings but does not stop compiling. Will remove when eslint is added
		new webpack.NoErrorsPlugin(),
		new ExtractTextPlugin('style.css')
	],
	module: {
		// Loaders to interpret non-vanilla javascript code as well as most other extensions including images and text.
		loaders: [{
			test: /\.css$/,
			loader: 'style-loader!css-loader'
		}, {
			test: /\.scss$/,
			loader: ExtractTextPlugin.extract('style-loader', 'css!sass')
		}, {
			test: /\.(js|jsx)$/,
			loaders: ['react-hot', 'babel'],
			exclude: [nodeModulesPath]
		}]
	}
};

module.exports = config;
