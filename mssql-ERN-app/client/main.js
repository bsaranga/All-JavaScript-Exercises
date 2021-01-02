const React = require('react')
const render = require('react-dom').render
const App = require('./App')
require('../dist/public/styles.css')

render(<App/>, document.getElementById('root'))