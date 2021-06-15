const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { srcPath } = require('./paths')

module.exports = {
    entry: {
        index: path.join(srcPath, 'index'),
        other: path.join(srcPath, 'other')
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                use: ['babel-loader'],
                include: srcPath,
                exclude: /node_modules/
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
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(srcPath, 'index.html'),
            filename: 'index.html',
            chunks:['index']
        }),
        new HtmlWebpackPlugin({
            template: path.join(srcPath, 'other.html'),
            filename: 'other.html',
            chunks:['other']
        })
    ]
}