import React, { Component } from 'react'
import { Table, Button,Card,Input,Form, message } from 'antd'
import {connect} from 'react-redux'
import {addShopCarAction,isloadingAction} from '../redux/actions/actions'
import {getList} from '../service/api'
import { NavLink } from 'react-router-dom'

const { Search } = Input;

class GoodsList extends Component {

  state = { dataSource:[]}
  form=React.createRef()
  componentDidMount() {
    this.props.handleLoading(true)
    getList().then( res => {
      this.setState({dataSource:res.data.list})
    })
    .catch(err => {})
    .finally(() => {
      this.props.handleLoading(false)
    })
  }

  componentWillUnmount(){
    this.setState=()=>false
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
    if(this.props.isLogin){
      this.props.addShopCar(data)
    }else{
      message.warning('请登录后尝试！')
    }
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
    }

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
  return { carList: state.countReducer, isLogin: state.loginReducer.isLogin }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    addShopCar:(data)=>{dispatch(addShopCarAction(data))},
    handleLoading:(data)=>{dispatch(isloadingAction(data))}
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(GoodsList)