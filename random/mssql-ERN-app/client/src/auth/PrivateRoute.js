import React from 'react'
import {Route} from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import {isAuthenticated} from './auth-helper'

function PrivateRoute({component: Component, ...rest}) {
    function auth() {
        const userId = rest.computedMatch.params.userId
        const authUserId = isAuthenticated().user.id
        return Number(userId) === Number(authUserId)
    }

    return(
        <Route {...rest} render = {props => (
            auth() ?
                (<Component {...props}/>) :
                (<Redirect to={{pathname: '/signin', state: {from: props.location}}}/>)
        )}/>
    )
}

export default PrivateRoute