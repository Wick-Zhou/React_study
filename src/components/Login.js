import React from 'react'
import {Form, Input, Button, Checkbox,message} from'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {connect} from 'react-redux'
import {loginAction, isloadingAction} from '../redux/actions/actions'
import {withRouter} from 'react-router-dom'
import {getLogin} from '../service/api'

function Login(props) {
  // console.log(props);
  const onFinish = (values) => {
    // console.log(values)
    const {username, password} = values
    props.handleLoading(true)
    getLogin().then(res =>{
      if(res.data.account.find(item=>item.username===username&&item.password===password)){
        message.success('登陆成功！')
        props.login(username)
        props.history.push('/option3')
        window.sessionStorage.setItem('isLogin',true)
        window.sessionStorage.setItem('username',username)
      }else{
        message.error('账号或密码错误！')
      }
    })
    .catch(err =>{})
    .finally(()=>{props.handleLoading(false)})
  }

  return (
    <div>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        style={{width:300,margin:'auto',marginTop:30}}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <Form.Item style={{width:140}}>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item style={{width:70}}>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
          </Form.Item>
          </div>
      </Form>
    </div>
  )
}

const mapDispatchToProps=(dispatch)=>{
  return {
    login:(username)=>{dispatch(loginAction(username))},
    handleLoading:(data)=>{dispatch(isloadingAction(data))}
  }
}


export default connect(null,mapDispatchToProps)(withRouter(Login))
