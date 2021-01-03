const React = require('react')
const Component = React.Component
const Route = require('react-router-dom').Route
const Redirect = require('react-router-dom').Redirect
const auth = require('./auth-helper')

const PrivateRoute = ({component: Component, ...rest}) => {
    <Route {...rest} render = {props => (
        auth.isAuthenticated() ?
            (<Component {...props}/>) :
            (<Redirect to={{pathname: '/signin', state: {from: props.location}}}/>)
    )}/>
}

module.exports = PrivateRoute