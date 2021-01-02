const config = require('../config/config')
const webpack = require('webpack')
const webpackMiddleware = require('webpack-dev-middleware')
const webpackConfig = require('../webpack.config.client')

const compile = (app) => {
    if(config.env === "development") {
        const compiler = webpack(webpackConfig)
        const middleware = webpackMiddleware(compiler, {
            publicPath: webpackConfig.output.publicPath
        })
        app.use(middleware)
    }
}

module.exports = {compile}