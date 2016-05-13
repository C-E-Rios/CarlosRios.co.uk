var path    = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var precss       = require('precss');
var autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {},
  externals: {
    'TweenLite': 'TweenLite'
  },
  module: {
    loaders: [
       { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'ng-annotate!babel' },
       { test: /\.html$/, loader: 'raw' },
      //  { test: /\.scss$/, loader: 'style!css!postcss!sass' },
      //  { test: /\.css$/, loader: 'style!css' },
       
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style", "css")
            },
            // Optionally extract less files
            // or any other compile-to-css language
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style", "css!sass")
            }       
       
    ]
  },
  postcss: function () {
      return [precss, autoprefixer];
  },  
  plugins: [
    
    new ExtractTextPlugin('style.css', {
        allChunks: true
    }),    
    
    // Injects bundles in your index.html instead of wiring all manually.
    // It also adds hash to all injected assets so we don't have problems
    // with cache purging during deployment.
    new HtmlWebpackPlugin({
      template: 'client/index.html',
      inject: 'body',
      hash: true
    }),    

    // Automatically move all modules defined outside of application directory to vendor bundle.
    // If you are using more complicated project structure, consider to specify common chunks manually.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        return module.resource && module.resource.indexOf(path.resolve(__dirname, 'client')) === -1;
      }
    })
  ]
};
