const webpack = require('webpack')

require('dotenv').config();

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
        })
    ]
}