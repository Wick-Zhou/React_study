import React, { Component } from 'react'
import { Table, Button,Card,Input,Form, message } from 'antd';
import {connect} from 'react-redux'
import {addShopCarAction} from '../redux/actions/actions'
import {getList} from '../service/getList'
import { NavLink } from 'react-router-dom';

const { Search } = Input;

class Main extends Component {

  state = { dataSource:[]}
  form=React.createRef()

  componentDidMount() {
    // const dataSource = [
    //   {
    //     key: '1',
    //     name: '胡彦斌',
    //     price: 32,
    //     address: '西湖区湖底公园1号',
    //     selected: true,
    //   },
    //   {
    //     key: '2',
    //     name: '胡彦祖',
    //     price: 42,
    //     address: '西湖区湖底公园2号',
    //     selected: true,
    //   },
    //   {
    //     key: '3',
    //     name: '马云',
    //     price: 46,
    //     address: '西湖区湖底公园3号',
    //     selected: true,
    //   },
    //   {
    //     key: '4',
    //     name: '马化腾',
    //     price: 40,
    //     address: '深圳腾讯大厦4号',
    //     selected: true,
    //   },
    //   {
    //     key: '5',
    //     name: '任正非',
    //     price: 52,
    //     address: '西湖区湖底公园5号',
    //     selected: true,
    //   },
    //   {
    //     key: '6',
    //     name: '周杰伦',
    //     price: 40,
    //     address: '香港尖沙咀5号',
    //     selected: true,
    //   },
    //   {
    //     key: '7',
    //     name: 'React',
    //     price: 20,
    //     address: 'Facebook',
    //     selected: true,
    //   },
    //   {
    //     key: '8',
    //     name: 'Vue',
    //     price: 10,
    //     address: '尤雨溪',
    //     selected: true,
    //   },
    //   {
    //     key: '9',
    //     name: 'iphone13',
    //     price: 5999,
    //     address: 'Apple',
    //     selected: true,
    //   },
    //   {
    //     key: '10',
    //     name: 'MacBook 2021 pro',
    //     price: 19999,
    //     address: 'Apple',
    //     selected: true,
    //   },
    //   {
    //     key: '11',
    //     name: 'Xiaomi 11 ultra',
    //     price: 4999,
    //     address: 'Xiaomi',
    //     selected: true,
    //   },
    //   {
    //     key: '12',
    //     name: 'Oneplus 9 pro',
    //     price: 4299,
    //     address: 'Oneplus',
    //     selected: true,
    //   },
      
    // ]
    getList().then((res)=>{this.setState({dataSource:res.data.list})})
  }

  search=(keyWord)=>{
    if(keyWord.trim()){
      let searchData= this.state.dataSource.filter((item)=>{
        if(item.name.includes(keyWord)||item.address.includes(keyWord)){
          return true
        }
        return false
      })
      this.setState({ dataSource:searchData})
    }
  }

  addUser=(data)=>{
    if(this.state.dataSource.find(item=>item.key===data.key)===undefined){
      let newObj={
        key:data.key, 
        name:data.name,
        price:data.price,
        address:data.address,
        selected:true
      }
      this.setState({dataSource:[...this.state.dataSource, newObj]})
      message.success('已添加成功！')
      this.form.current.resetFields()
    }else{
      message.error('已存在相同的Key，请重试！')
    }
  }
  
  addShopCar = (data) => {
    this.props.addShopCar(data)
  }

  
  render() {
    // console.log(this.props);
    const {dataSource}=this.state

    const columns = [
      {
        title: 'Key',
        dataIndex: 'key',
        // key: 'key',
        // render:(text,record,index)=>`${index+1}`
      },
      {
        title: '姓名',
        dataIndex: 'name',
        // key: 'name',
        render:(a,b)=><NavLink to={`option1/detail/${a}`}>{a}</NavLink>
      },
      {
        title: '价格',
        dataIndex: 'price',
        // key: 'price',
      },
      {
        title: '住址',
        dataIndex: 'address',
        // key: 'address',
      },
      {
        title: '操作',
        dataIndex: 'key',
        // key: 'key',
        render:(key,data)=><Button type='primary' onClick={()=>this.addShopCar(data)}>添加购物车</Button>
      },
    ];

    const onFinish = (values) => {
      // console.log('Success:', values);
      this.addUser(values)
    };
  
    const onFinishFailed = (errorInfo) => {
      message.error('Failed:', errorInfo);
    };

    return (
      <div>
        <Card style={{ width: 350,margin:10 }}>
          <Search allowClear placeholder="请输入用户名或地址查询" onSearch={(value)=>this.search(value)} enterButton style={{ width: 300,marginRight:20 }}/>
        </Card>
        
        <Card style={{marginLeft:10,marginBottom:10}}>
          <Form
            ref={this.form}
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
              name="key"
              rules={[
                {
                  required: true,
                  message: 'Please input your key!',
                },
              ]}
            >
              <Input placeholder='请输入Key'/>
            </Form.Item>
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: 'Please input your name!',
                },
              ]}
            >
              <Input placeholder="请输入用户名"/>
            </Form.Item>
            <Form.Item
              name="price"
              rules={[
                {
                  required: true,
                  message: 'Please input your price!',
                },
              ]}
            >
              <Input placeholder="请输入价格"/>
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

        <Table dataSource={dataSource} columns={columns} pagination={{ position: ['bottomCenter'] }}/>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return {carList:state}
}

const mapDispatchToProps=(dispatch)=>{
  return {
    addShopCar:(data)=>{dispatch(addShopCarAction(data));},
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Main)