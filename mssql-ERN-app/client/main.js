const React = require('react')
const render = require('react-dom').render
const App = require('./App')
require('./assets/css/app.css')

render(<App/>, document.getElementById('root'))