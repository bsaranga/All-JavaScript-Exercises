import React from 'react'
import { useState, useEffect } from 'react'
import { isAuthenticated } from '../auth/auth-helper'
import { read } from './api-user'
import { Redirect } from 'react-router';

import { Card } from 'antd';
import { Link } from 'react-router-dom';

export default function Profile({match}) {

    const [user, setUser] = useState({})
    const [redirectToSignin, setRedirectToSignin] = useState(false)

    useEffect(() => {

        const abortController = new AbortController()
        const signal = abortController.signal
        const jwt = isAuthenticated()

        read({
            userId: match.params.userId
        }, {t: jwt.token}, signal).then(data => {
            if(data && data.error) {
                setRedirectToSignin(true)
            } else {
                setUser(data[0])
            }
        })

        return function cleanup() {
            abortController.abort()
        }

    }, [match.params.userId])

    console.log(match)
    console.log(user)

    if(redirectToSignin) {
        return <Redirect to='/signin'/>
    }

    return (
        <Card size="small" title="Profile">
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.createdAt}</p>
            <p>{user.updatedAt}</p>
            <Link to={`/user/edit/${match.params.userId}`}>Edit</Link>
        </Card>
    )
}