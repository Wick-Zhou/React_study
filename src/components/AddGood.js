import React, { Component } from 'react'

import { Form, Input, Button, Card } from 'antd';

export default class AddGood extends Component {


  render() {
    const onFinish = (values) => {
      console.log('Success:', values);
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
    return (
      <div>
        <Card style={{marginLeft:10,marginBottom:10}}>
          <Form
            layout='inline'
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            style={{marginTop:20,marginLeft:20}}
          >
            <Form.Item
              name="id"
              rules={[
                {
                  required: true,
                  message: 'Please input your id!',
                },
              ]}
            >
              <Input placeholder='请输入ID'/>
            </Form.Item>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input placeholder="请输入用户名"/>
            </Form.Item>
            <Form.Item
              name="age"
              rules={[
                {
                  required: true,
                  message: 'Please input your age!',
                },
              ]}
            >
              <Input placeholder="请输入年龄"/>
            </Form.Item>
            <Form.Item
              name="address"
              rules={[
                {
                  required: true,
                  message: 'Please input your address!',
                },
              ]}
            >
              <Input placeholder="请输入地址"/>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                添加
              </Button>
            </Form.Item>
          </Form>
        </Card>
        
      </div>
    )
  }
}
