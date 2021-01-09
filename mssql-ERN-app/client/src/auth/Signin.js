import {Form, Input, Button} from 'antd'

export default function SignIn(props) {

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
        <Form {...layout} name="signin">
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
            <Input />
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
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">Sign In</Button>
          </Form.Item>
        </Form>
      </div>
    );
}