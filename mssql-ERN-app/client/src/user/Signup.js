import {useState} from 'react'
import {create} from './api-user'
import {Form, Input, Button, Typography, Modal} from 'antd'

const {Text} = Typography

export default function Signup() {

    const [values, setValues] = useState({
        name: '',
        password: '',
        confirmPassword: '',
        email: '',
        open: false,
        error: ''
    })

    const handleChange = name => event => {
        setValues({...values, [name]: event.target.value})
    }

    function closeModal(){
        setValues({...values, open: false})
    }

    function signIn(){
        console.log('Signed in...')
        closeModal()
    }

    const onSubmit = () => {
        if(values.password !== values.confirmPassword) {
            alert('Passwords do not match')
        }else{
            const user = {
                name: values.name || undefined,
                email: values.email || undefined,
                hashed_password: values.password || undefined
            }

            create(user)
                .then((data) => {
                    if(data.errors) {
                        setValues({...values, error: data.errors[0].message})
                        console.log(`Error: ${data.errors[0].message}`)
                    }else{
                        setValues({...values, error: '', open: true})
                    }
                })
        }
    }

    // UI

    const layout = {
        labelCol: {
            span: 8
        },
        wrapperCol: {
            span: 10
        },
    }

    const tailLayout = {
        wrapperCol: {
            offset: 8,
            span: 16
        }
    }

    return (
      <div>
        <Form {...layout} name="signup">
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please enter your username",
              },
            ]}
          >
            <Input onChange={handleChange("name")} />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please enter your email",
              },
            ]}
          >
            <Input onChange={handleChange("email")} />
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
            <Input.Password onChange={handleChange("password")} />
          </Form.Item>

          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            rules={[
              {
                required: true,
                message: "Please confirm your password",
              },
            ]}
          >
            <Input.Password onChange={handleChange("confirmPassword")} />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" onClick={onSubmit}>
              Submit
            </Button>
          </Form.Item>

          <Form.Item {...tailLayout}>
            {values.error && <Text type="danger">{values.error}</Text>}
          </Form.Item>
        </Form>

        <Modal visible={values.open} onOk={signIn} onCancel={closeModal} title="User signed up">
            <p>Registered user successfully. You may sign in now</p>
        </Modal>
      </div>
    );
}