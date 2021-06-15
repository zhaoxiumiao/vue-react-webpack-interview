const path = require('path')
const webpack = require('webpack')
const webpackCommonConf = require('./webpack.common.js')
const { merge } = require('webpack-merge')
const { srcPath, distPath } = require('./paths')

module.exports = merge(webpackCommonConf, {
    mode: 'development',
    module:{
        rules:[
            //直接引入图片url
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: 'file-loader'
            }
        ]
    },
    plugins:[
        new webpack.DefinePlugin({
            ENV: JSON.stringify('development')
        })
    ],
    devServer:{
        port: 8080,
        progress: true, // 显示打包进度条
        contentBase: distPath, //根目录
        open: true, // 自动打开浏览器
        compress: true, // 启动 gzip 压缩

        // 设置代理
        proxy: {
            // 将本地 /api/xxx 代理到 localhost:3000/api/xxx
            '/api': 'http://localhost:3000'
        }

    }
})