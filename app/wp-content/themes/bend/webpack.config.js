const ExtractTextPlugin = require('extract-text-webpack-plugin')
var BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const path = require('path')
const autoprefixer = require('autoprefixer')
const webpack = require('webpack')
const MinifyPlugin = require('babel-minify-webpack-plugin')
const SimpleProgressWebpackPlugin = require( 'simple-progress-webpack-plugin' )
var HardSourceWebpackPlugin = require('hard-source-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: ['babel-polyfill','./src/app.js'],
  output: {
    publicPath: '/wp-content/themes/bend/dist/',
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
   modules:[
     path.resolve(__dirname), path.resolve(__dirname, "node_modules")
   ],
   alias: {
     "TweenLite": path.resolve('node_modules', 'gsap/src/uncompressed/TweenLite.js'),
     "TweenMax": path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
     "TimelineLite": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineLite.js'),
     "TimelineMax": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js'),
     "ScrollMagic": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
     "animation.gsap": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
     "debug.addIndicators": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js')
   },
 },
  module: {
    rules: [
      {
         test: /\.js$/,
         use: ['babel-loader'],
         include: [
           path.resolve(__dirname, 'src'),
           path.resolve(__dirname, '../theme/src')
         ]
      },
      {
        test: /\.(scss|css)$/,
        loader: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: 'css-loader?-autoprefixer!postcss-loader!sass-loader',
          }),
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: 'wp-content/themes/child-theme/static/fonts/[name].[ext]',
        }
      },
      {
          test: /\.(jpg|png|svg)$/,
          loader: "file-loader",
          options: {
            name: 'wp-content/themes/child-theme/static/img/[name].[ext]',
          }
      },
      {
        // set up standard-loader as a preloader
        enforce: 'pre',
        test: /\.js?$/,
        loader: 'standard-loader',
        exclude: /(node_modules|bower_components)/,
        options: {
          // Emit errors instead of warnings (default = false)
          error: false,
          // enable snazzy output (default = true)
          snazzy: true,
          // other config options to be passed through to standard e.g.
          // parser: 'babel-eslint'
        }
      },
   ]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new webpack.LoaderOptionsPlugin({
          minimize: true,
          options: {
              postcss: [autoprefixer]
          }
      }),
    new BrowserSyncPlugin({
        host: 'localhost',
        port: 3000,
        proxy: 'https://localhost/',
        files: [
                {
                    match: [
                        '**/*.php'
                    ],
                    fn: function(event, file) {
                        if (event === "change") {
                            const bs = require('browser-sync').get('bs-webpack-plugin');
                            bs.reload();
                        }
                    }
                }
            ]
    }),
    new MinifyPlugin(),
    new SimpleProgressWebpackPlugin({
      format: 'compact'
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new HtmlWebpackPlugin({  // Also generate a test.html
      filename: 'header.php',
      template: 'templates/global/header.php',
      hash: true
    }),
    new HardSourceWebpackPlugin()
  ]
};
