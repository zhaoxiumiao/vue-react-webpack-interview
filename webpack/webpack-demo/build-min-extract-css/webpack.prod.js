const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const { distPath } = require('./paths.js')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpackCommonConf = require('./webpack.common.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = merge(webpackCommonConf,{
    mode: 'production',
    output:{
        filename:'[name].[contenthash:8].js',
        path: distPath
    },
    module:{
        rules:[
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use:{
                    loader: 'url-loader',
                    options:{
                        limit: 5 * 1024,

                        outputPath: '/img1/'
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
    plugins:[
        new CleanWebpackPlugin(), // 默认清空output.path 文件夹
        new webpack.DefinePlugin({
            ENV: JSON.stringify('production')
        }),
        new MiniCssExtractPlugin({
            filename: 'css/main.[contenthash:8].css'
        })
    ],
    optimization:{
        //压缩css
        minimizer:[new TerserJSPlugin({}), new OptimizeCssAssetsWebpackPlugin({})]
    }
    
})