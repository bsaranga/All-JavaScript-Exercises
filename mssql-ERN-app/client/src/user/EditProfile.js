import { React, useState } from 'react'
import { Form, Input, Button } from 'antd'
import { isAuthenticated } from '../auth/auth-helper'
import { update } from './api-user'
import { Redirect } from 'react-router'

export default function EditProfile({match}) {

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        redirectToProfile: false
    })

    const handleChange = name => event => {
        setValues({...values, [name]: event.target.value})
    }

    function clickSubmit() {
        const jwt = isAuthenticated()
        const user = {
            name: values.name || undefined,
            email: values.email || undefined,
            password: values.password || undefined
        }

        update(
            {
                userId: match.params.userId
            },
            {
                t: jwt.token
            }, user).then(data => {
                if(data && data.error) {
                    console.log('An error occurred, handle it')
                    setValues({...values, error: data.error})
                }else {
                    setValues({...values, redirectToProfile: true})
                }
            })
        
    }

    if(values.redirectToProfile) {
        return (<Redirect to={`/user/${match.params.userId}`}/>)
    }
  
    // UI
    const layout = {
        labelCol: {
        span: 8,
        },
        wrapperCol: {
        span: 10,
        },
    };

    const tailLayout = {
        wrapperCol: {
        offset: 8,
        span: 16,
        },
    };

    return (
        <Form {...layout} name="edit">
            <Form.Item
            label="Username"
            name="name"
            rules={[
                {
                required: true,
                message: "Please enter your username",
                },
            ]}
            >
            <Input onChange={handleChange('name')} />
            </Form.Item>

            <Form.Item
            label="Email"
            name="email"
            rules={[
                {
                required: true,
                message: "Please enter your username",
                },
            ]}
            >
            <Input onChange={handleChange('email')} />
            </Form.Item>

            <Form.Item
            label="Password"
            name="password"
            rules={[
                {
                required: true,
                message: "Please enter your password",
                },
            ]}
            >
            <Input.Password onChange={handleChange('password')}/>
            </Form.Item>

            <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" onClick={clickSubmit}>
                Edit
            </Button>
            </Form.Item>
        </Form>
    );
}