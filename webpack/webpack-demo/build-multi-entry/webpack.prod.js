const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const { distPath } = require('./paths.js')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpackCommonConf = require('./webpack.common.js')

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
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(), // 默认清空output.path 文件夹
        new webpack.DefinePlugin({
            ENV: JSON.stringify('production')
        })
    ]
})