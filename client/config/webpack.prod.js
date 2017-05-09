const path = require('path');
const webpack = require('webpack');
const helpers = require('./helpers');

// Webpack Plugins
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const ContextReplacementPlugin = webpack.ContextReplacementPlugin;
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const commonConfig = require('./webpack.common');
const webpackMerge = require('webpack-merge');

//=========================================================
//  ENVIRONMENT VARS
//---------------------------------------------------------
const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

//=====================================
//  PRODUCTION
//-------------------------------------
const config = {};

config.debug = false;

config.devtool = 'source-map';

config.entry = {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'main': './src/main.ts'
};

config.output = {
    path: path.resolve('dist'),
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
};

config.resolve = {
    cache: true,
    root: helpers.root(),
    alias: {
        'app': 'src/app',
        'common': 'src/app/common'
    }
};

config.plugins = [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(ENV)
    }),
    new CommonsChunkPlugin({
        name: ['vendor', 'polyfills']
    }),
    new HtmlWebpackPlugin({
        template: './src/index.html',
        chunksSortMode: 'dependency'
    }),
    new HtmlWebpackPlugin({
        chunksSortMode: 'dependency',
        filename: 'index.html',
        hash: false,
        inject: 'body',
        template: './src/index.html'
    }),
    new ExtractTextPlugin({ filename: 'css/[name].[hash].css', disable: false, allChunks: true }),

    new UglifyJsPlugin({
        beautify: false, // prod
        mangle: { 'screw_ie8': true }, // prod
        compress: { 'screw_ie8': true }, // prod
        comments: false // prod
    }),

    new CopyWebpackPlugin([{
        from: helpers.root('src/app')
    }]),

    new ContextReplacementPlugin(
        /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
        __dirname
    )
];

config.postcss = [
    autoprefixer({
        browsers: ['last 2 version']
    })
];

module.exports = webpackMerge(commonConfig, config);
