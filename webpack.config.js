const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");//抽离css
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');//压缩css
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'index.js'
    },
    module: {
        rules: [
            { test: /\.vue$/, use: 'vue-loader' },
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            {
                test: /\.scss$/,
                use: [  MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: "style.css",//抽离的css文件命名为style.css
        }),
        new OptimizeCssAssetsPlugin(),
        new CleanWebpackPlugin()
    ]
};