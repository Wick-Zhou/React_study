import React from 'react'
import {Form, Input, Button, Checkbox,message} from'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {connect} from 'react-redux'
import {loginAction} from '../redux/actions/actions'
import {withRouter} from 'react-router-dom'

function Login(props) {
  const onFinish = (values) => {
    console.log(props)
    if(values.username==='admin'&&values.password==='123456'){
      message.success('登陆成功！')
      props.login()
      props.history.push('/option3')
    }else{
      message.error('账号或密码错误！')
    }
  }

  return (
    <div>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

const mapDispatchToProps=(dispatch)=>{
  return {
    login:()=>{dispatch(loginAction())}
  }
}

export default connect(null,mapDispatchToProps)(withRouter(Login))
