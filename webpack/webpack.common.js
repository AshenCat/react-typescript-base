
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, '..', 'src', 'index.tsx'),
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', 'src', 'index.html'),
        }),
        new CleanWebpackPlugin(),
        new ESLintPlugin()
    ],
    devServer: {
        static: path.join(__dirname, '..', './src'),
        port: 3001,
        hot: 'only',
        compress: true,
        open: true,
    },
};