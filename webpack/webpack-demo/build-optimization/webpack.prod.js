const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const { distPath, srcPath } = require('./paths.js')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpackCommonConf = require('./webpack.common.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const HappyPack = require('happypack')
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')
const ModuleConcatenationPlugin = require('webpack/lib/optimize/ModuleConcatenationPlugin')

module.exports = merge(webpackCommonConf,{
    mode: 'production',
    entry: {
        index: path.join(srcPath, 'index'),
        other: path.join(srcPath, 'other')
    },
    output:{
        filename:'[name].[contenthash:8].js',
        path: distPath,
        // publicPath: 'http://cdn.abc.com' //修改所有静态文件 url
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                use: ['happypack/loader?id=babel'],
                include: srcPath
                // exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use:{
                    loader: 'url-loader',
                    options:{
                        limit: 5 * 1024,

                        outputPath: '/img1/',
                        // publicPath: 'http://cdn.abc.com'
                    }
                }
            },
            {
                test: /\.css$/,
                // loader 的执行顺序是: 从后往前
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.less$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader',
                    'postcss-loader'
                ]
            }
        ]
    },
    resolve: {
        mainFields: ['jsnext:main', 'browser', 'main']
    },
    plugins:[
        new CleanWebpackPlugin(), // 默认清空output.path 文件夹
        new webpack.DefinePlugin({
            ENV: JSON.stringify('production')
        }),
        new MiniCssExtractPlugin({
            filename: 'css/main.[contenthash:8].css'
        }),
        //忽略 moment 下的 /locale 目录
        new webpack.IgnorePlugin({
            resourceRegExp: /^\.\/locale$/,
            contextRegExp: /moment$/,
        }),
        new HappyPack({
            id: 'babel',
            loaders: ['babel-loader?cacheDirectory']
        }),
        new ParallelUglifyPlugin({
            uglifyJS: {
                output:{
                    beautify: false,
                    comments: false,
                },
                compress:{
                    drop_console: true,
                    collapse_vars: true,
                    reduce_vars: true
                }
            }
        }),
        new ModuleConcatenationPlugin() //Scope Hosting
    ],
    optimization:{
        //压缩css
        minimizer:[new TerserJSPlugin({}), new OptimizeCssAssetsWebpackPlugin({})],
        //分割代码
        splitChunks:{
            chunks: 'all',
            //分组
            cacheGroups:{
                //第三方模块
                vendor:{
                    name: 'vendor',
                    priority: 1,
                    test: /node_modules/,
                    minSize: 0,
                    minChunks: 1
                },
                //公共模块
                common:{
                    name: 'common',
                    priority: 0,
                    minSize: 0,
                    minChunks: 2
                }
            }
        }
    }
    
})