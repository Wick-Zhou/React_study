import React, { Component } from 'react'

import {connect} from 'react-redux'

import { Table, Button,Card,Input } from 'antd';
// import { NavLink,Switch,Route } from 'react-router-dom';

import {addShopCarAction} from '../redux/actions/actions'

const { Search } = Input;


class Main extends Component {

  state = { dataSource:[],postion:'bottomCenter' }

  id=React.createRef();
  userName=React.createRef()
  age=React.createRef()
  address=React.createRef()
  keyWord=React.createRef()

  componentDidMount() {
    const dataSource = [
      {
        key: '1',
        name: '胡彦斌',
        price: 32,
        address: '西湖区湖底公园1号',
      },
      {
        key: '2',
        name: '胡彦祖',
        price: 42,
        address: '西湖区湖底公园2号',
      },
      {
        key: '3',
        name: '马云',
        price: 46,
        address: '西湖区湖底公园3号',
      },
      {
        key: '4',
        name: '马化腾',
        price: 40,
        address: '深圳腾讯大厦4号',
      },
      {
        key: '5',
        name: '任正非',
        price: 52,
        address: '西湖区湖底公园5号',
      },
      {
        key: '6',
        name: '周杰伦',
        price: 40,
        address: '香港尖沙咀5号',
      },
      {
        key: '7',
        name: 'React',
        price: 20,
        address: 'Facebook',
      },
    ]
    this.setState({ dataSource })
  }
  confirm=(key)=>{
    console.log(key);
    this.setState({dataSource:this.state.dataSource.filter((item)=>{
      return item.key !==key
    })})
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
  addUser=()=>{
    let newObj={
      key:this.id.current.state.value, 
      name:this.userName.current.state.value,
      age:this.age.current.value,
      address:this.address.current.state.value
    }
    this.setState({dataSource:[...this.state.dataSource, newObj]})
    this.id.current.state.value=''
    this.userName.current.state.value=''
    this.age.current.value=0
    this.address.current.state.value=''
    console.log(this.age.current.value);
  }
  
  addShopCar=(data)=>{
    console.log(data);
    this.props.addShopCar(data)
  }
  
  render() {
    // console.log(this.props);
    const {dataSource}=this.state
    const columns = [
      {
        title: 'ID',
        // dataIndex: 'key',
        // key: 'key',
        render:(text,record,index)=>`${index+1}`
      },
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '价格',
        dataIndex: 'price',
        key: 'price',
      },
      {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: '操作',
        dataIndex: 'key',
        key: 'key',
        // render:(key)=>
        // <Popconfirm
        //   placement="topRight"
        //   title='确定删除此条信息'
        //   onConfirm={()=>this.confirm(key)}
        //   okText="确定"
        //   cancelText="取消"
        // ><Button type='primary'>删除</Button></Popconfirm>
        render:(key,data)=><Button type='primary' onClick={()=>this.addShopCar(data)}>添加购物车</Button>
      },
    ];
    return (
      <div>
        {/* {this.props.carList.length} */}
        <Card style={{ width: 350,margin:10 }}>
          <Search allowClear placeholder="请输入用户名或地址查询" onSearch={(value)=>this.search(value)} enterButton style={{ width: 300,marginRight:20 }}/>
        </Card>
        {/* <NavLink to={{pathname:'/option1/option5',state: {id:1,name: 'Option'}}}><Button>option5</Button></NavLink>
        <Switch>
          <Route path='/option1/option5' component={Option2}></Route>
        </Switch>
        <Card style={{ width: 800,margin:10 }}>
          <h2>添加新用户</h2>
          <Input ref={this.id} placeholder="请输入ID" style={{ width: 100,marginRight:20 }}/>
          <Input ref={this.userName} placeholder="请输入名字" style={{ width: 100,marginRight:20 }}/>
          <InputNumber min='0' ref={this.age} placeholder="请输入年龄" style={{ width: 100,marginRight:20 }}/>
          <Input ref={this.address} placeholder="请输入地址" style={{ width: 200,marginRight:20 }}/>
          <Button type='primary' onClick={this.addUser}>添加</Button>
        </Card> */}
        <Table dataSource={dataSource} columns={columns} pagination={{ position: [this.state.postion] }} scroll={{ y: 390 }}/>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return state
}

const mapDispatchToProps=(dispatch)=>{
  return {
    addShopCar:(data)=>{dispatch(addShopCarAction(data));},
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Main)