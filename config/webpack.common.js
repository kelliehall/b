const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');
const helpers = require('./helpers');
const CopyWebpackPlugin = require('copy-webpack-plugin');

//=========================================================
//  COMMON CONFIG
//---------------------------------------------------------
const config = {};

config.resolve = {
    extensions: ['', '.ts', '.js', '.json', '.css', '.scss', '.html'],
    modulesDirectories: ['node_modules'],
    root: path.resolve('.')
};

config.module = {
    loaders: [
        {
            test: /\.ts$/,
            exclude: [/\.(spec|e2e)\.ts$/],
            loaders: ['awesome-typescript-loader', 'angular2-template-loader']
        },
        {
            test: /\.html$/,
            loader: 'raw'
        },
        {
            test: /\.json$/,
            loader: 'json'
        },
        
        {
            test: /\.scss$/,
            loader: 'style!css!sass!resolve-url!sass?sourceMap'
        },
        {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        },
        {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url-loader?limit=10000&mimetype=application/font-woff'
        },
        {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file-loader'
        }
    ]
};

config.plugins = [
    new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery'
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.ContextReplacementPlugin(
        /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
        __dirname
    ),
    new CopyWebpackPlugin([
        { from: './src/app/assets', to: 'assets' }
    ])
];

config.postcss = [
    autoprefixer({ browsers: ['last 3 versions'] })
];

config.sassLoader = {
    outputStyle: 'compressed',
    precision: 10,
    sourceComments: false
};

module.exports = config;
