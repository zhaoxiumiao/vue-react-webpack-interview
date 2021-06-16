const path = require('path')
const webpack = require('webpack')
const webpackCommonConf = require('./webpack.common.js')
const { merge } = require('webpack-merge')
const { srcPath, distPath } = require('./paths')
const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin')

module.exports = merge(webpackCommonConf, {
    mode: 'development',
    entry:{
        index:[
            'webpack-dev-server/client?http://localhost:8080/',
            'webpack/hot/dev-server',
            path.join(srcPath, 'index.js')
        ],
        other: path.join(srcPath, 'other.js')
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                use: ['babel-loader?cacheDirectory'],//开启缓存
                include: srcPath
                // exclude: /node_modules/
            },
            //直接引入图片url
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: 'file-loader'
            },
            {
                test: /\.css$/,
                // loader 的执行顺序是: 从后往前
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.less$/,
                use:['style-loader', 'css-loader', 'less-loader']
            }
        ]
    },
    plugins:[
        new webpack.DefinePlugin({
            ENV: JSON.stringify('development')
        }),
        new HotModuleReplacementPlugin()
    ],
    devServer:{
        port: 8080,
        progress: true, // 显示打包进度条
        contentBase: distPath, //根目录
        open: true, // 自动打开浏览器
        compress: true, // 启动 gzip 压缩
        
        hot: true,

        // 设置代理
        proxy: {
            // 将本地 /api/xxx 代理到 localhost:3000/api/xxx
            '/api': 'http://localhost:3000'
        }

    }
})