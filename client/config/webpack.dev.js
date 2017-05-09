const HtmlWebpackPlugin = require('html-webpack-plugin');
const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin');
const path = require('path');
const webpack = require('webpack');
const commonConfig = require('./webpack.common');
const webpackMerge = require('webpack-merge');

//=========================================================
//  ENVIRONMENT VARS
//---------------------------------------------------------
const ENV = process.env.NODE_ENV = process.env.ENV = 'development';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;

//=====================================
//  DEVELOPMENT
//-------------------------------------
const config = {};

config.entry = {
    main: [`webpack-dev-server/client?http://${HOST}:${PORT}`, 'webpack/hot/dev-server', './src/main.ts'],
    polyfills: './src/polyfills.ts',
    vendor: './src/vendor.ts'
};

config.output = {
    filename: '[name].js',
    path: path.resolve('./dist'),
    publicPath: '/'
};

config.plugins = [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(ENV)
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: ['vendor', 'polyfills'],
        minChunks: Infinity
    }),
    new HtmlWebpackPlugin({
        chunksSortMode: 'dependency',
        filename: 'index.html',
        hash: false,
        inject: 'body',
        template: './src/index.html'
    }),
    new HotModuleReplacementPlugin()
];

config.devtool = 'cheap-module-source-map';

config.devServer = {
    contentBase: './src',
    hot: true,
    historyApiFallback: true,
    host: HOST,
    outputPath: config.output.path,
    port: PORT,
    publicPath: config.output.publicPath,
    stats: {
        cached: true,
        cachedAssets: true,
        chunks: true,
        chunkModules: false,
        colors: true,
        hash: false,
        reasons: true,
        timings: true,
        version: false
    }
};

module.exports = webpackMerge(commonConfig, config);
