const path = require('path');
const webpackPluginTest = require('./src/index');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'webpackPluginTest.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        cacheDirectory: true
                    }
                }],
                exclude: /(node_modules|bower_components)/,
            }
        ]
    },
    plugins: [
       new webpackPluginTest(),
       new HtmlWebpackPlugin({
        filename: 'index.html', // 生成文件名
        template: path.join(process.cwd(), './index.html') // 模班文件
       })
    ]
}