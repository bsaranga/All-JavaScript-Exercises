const React = require('react')
const MainRouter = require('./MainRouter')
const BrowserRouter = require('react-router-dom').BrowserRouter
const hot = require('react-hot-loader').hot

const App = () => {
    return (
        <BrowserRouter>
            <MainRouter/>
        </BrowserRouter>
    )
}

module.exports = hot(module)(App)