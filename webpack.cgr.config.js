/***
 * 		'npm start' 	   - to start webpack watch
 * 		'npm run start-hq' - to start watch without 'my' entry
 * 		'npm run start-my' - to start watch without 'hq' entry
 * 		'npm run deploy'   - to minify and compress assets ready for testing on diff environments
 ***/

var webpack 		  = require('webpack'),
	path 			  = require('path'),
	CompressionPlugin = require("compression-webpack-plugin"),
	Clean 			  = require('clean-webpack-plugin');  

var appPath 	= path.resolve(__dirname, 'client'),
	outputPath  = path.resolve(__dirname, 'dist');

var deploy = process.argv.indexOf('--deploy') !== -1 ? true : false,
	noHq   = process.argv.indexOf('--no-hq')  !== -1 ? true : false,
	noMy   = process.argv.indexOf('--no-my')  !== -1 ? true : false;

var plugins = [
	new Clean(outputPath),
	new webpack.optimize.CommonsChunkPlugin('webpack.js') 
];

if (deploy) {
	plugins.push(

		new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin,

		new CompressionPlugin({
			asset: "{file}",
			algorithm: "gzip",
			regExp: /\.js$|\.html$/,
			threshold: 10240,
			minRatio: 0.8
		})   
        
	);
}

var entries = {
	cgr : './app/app.js'
};

var config = {

	context: appPath,

	entry: entries,

	output: {
		path: outputPath,
		filename: '[name].bundle.js'
	},

	plugins: plugins,

	module: {
		// preLoaders: [
		// 	{
		// 		test: /\.js$/,
		// 		loader: '',
		// 		exclude: [
		// 			/node_modules/,
		// 			/vendor/,
		// 			/templates/
		// 		]
		// 	}
		// ],
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: [
					/node_modules/,
					/vendor/,
					/templates/
				],
				query: {
					compact: false
				}
			},
			{
				test: /\.html$/,
				loader: 'raw'
			},
			{
				test: /\.scss$/,
				loader: 'style!css!sass'
			},
			{
				test: /\.css$/,
				loader: 'style!css'
			},
			{
				test: /\.(png|woff|woff2|eot|ttf|svg)$/,
				loader: 'url?limit=100000'
			}
		],
		postLoaders: [
			{
				test: /\.js$/,
				loader: 'ng-annotate',
				exclude: [
					/node_modules/,
					/vendor/,
					/templates/
				]
			}
		]
	},

	eslint: {
		configFile: '.eslintrc'
	}

};

module.exports = config;
