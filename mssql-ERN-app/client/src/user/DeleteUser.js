import { React, useState } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router'
import { Button, Modal, message } from 'antd'
import { isAuthenticated, clearJWT } from '../auth/auth-helper'
import { remove } from './api-user'
import uiSettings from '../uiSettings'

export default function DeleteUser(props) {
    const [open, setOpen] = useState(false)
    const [redirect, setRedirect] = useState(false)

    function clickButton() {
        setOpen(true)
    }

    function handleRequestClose() {
        setOpen(false)
    }

    function deleteAccount() {
        const jwt = isAuthenticated()
        remove({
            userId: props.userId
        },{
            t: jwt.token
        }).then(data => {
            if(data && data.error) {
                console.log(data.error)
            }else {
                clearJWT(() => {
                    message.success('Deleted user profile', uiSettings.messageTime)
                })
            }
        })
        setRedirect(true)
    }

    if(redirect) {
        return <Redirect to="/"/>
    }

    return(
        <span>
            <Button onClick={clickButton}>Delete</Button>
            <Modal visible={open} title="Confirm Delete" onCancel={handleRequestClose} onOk={deleteAccount}>
                <p>Do you really want to delete your profile information?</p>
            </Modal>
        </span>
    )
}

DeleteUser.propTypes = {
    userId: PropTypes.string.isRequired
}