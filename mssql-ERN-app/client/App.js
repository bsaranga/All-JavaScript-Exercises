const React = require('react')
const MainRouter = require('./MainRouter')
const BrowserRouter = require('react-router-dom').BrowserRouter

const App = () => {
    return (
        <BrowserRouter>
            <MainRouter/>
        </BrowserRouter>
    )
}

module.exports = App