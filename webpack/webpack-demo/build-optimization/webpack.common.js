const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { srcPath } = require('./paths')

module.exports = {
    entry: {
        index: path.join(srcPath, 'index'),
        other: path.join(srcPath, 'other')
    },
    module:{
        noParse:[/react\.min\.js$/],
        rules:[
            
            {
                test: /\.vue$/,
                use: ['vue-loader'],
                include: srcPath
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(srcPath, 'index.html'),
            filename: 'index.html',
            chunks:['index', 'vendor', 'common']
        }),
        new HtmlWebpackPlugin({
            template: path.join(srcPath, 'other.html'),
            filename: 'other.html',
            chunks:['other', 'common']
        })
    ]
}