const { userInfo } = require('os');
const path = require('path');
const { web } = require('webpack');
const webpack = require('webpack');
const CURRENT_WORKING_DIR = process.cwd();

const config = {
    name: "browser",
    mode: "development",
    devtool: "eval-source-map",
    entry: [
        "webpack-hot-middleware/client?reload=true",
        path.join(CURRENT_WORKING_DIR, "client/main.js")
    ],
    output: {
        path: path.join(CURRENT_WORKING_DIR, "/dist"),
        filename: "bundle.js",
        publicPath: "/dist/"
    },
    module: {
        rules:[
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    resolve:{
        alias:{
            'react-dom': '@hot-loader/react-dom'
        }
    }
}

module.exports = config;