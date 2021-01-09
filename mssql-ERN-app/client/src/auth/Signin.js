import { useState } from 'react'
import { signin } from './api-auth'
import { Form, Input, Button } from "antd";
import { authenticate } from './auth-helper';
import { Redirect } from 'react-router';
import { message } from 'antd';

export default function SignIn(props) {

  const [values, setValues] = useState({
    email: '',
    password: '',
    error: '',
    redirectToReferrer: false
  })

  const handleChange = name => event => {
    setValues({...values, [name]: event.target.value})
  }

  function clickSubmit() {
    const user = {
      email: values.email || undefined,
      password: values.password || undefined
    }

    signin(user).then((data) => {
      if(data.error) {
        setValues({...values, error: data.error})
      }else{
        authenticate(data, () => {
          message.success('Signed in',0.5)
          setValues({...values, error: '', redirectToReferrer: true})
        })
      }
    })
  }

  const {from} = props.location.state || {
    from: {
      pathname: '/'
    }
  }

  const {redirectToReferrer} = values
  if(redirectToReferrer) {
    return (<Redirect to={from}/>)
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
    <div>
      <Form {...layout} name="signin">
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
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
