const path = require('path')
const nodeExternals = require('webpack-node-externals')

const config = {
    name: "server",
    mode: "development",
    entry: [path.join(__dirname, "./server/server.js")],
    target: "node",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "server.generated.js",
        publicPath: "/dist/",
        libraryTarget: "umd"
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                      presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.(ttf|eot|svg|gif|jpg|png)(\?[\s\S]+)?$/,
                use: 'file-loader'
            }
        ]
    }

}

module.exports = config