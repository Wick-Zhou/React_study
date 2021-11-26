import React, { Component } from 'react'
import { Table, Button,Popconfirm,Card,Input,InputNumber } from 'antd';
const { Search } = Input;

export default class Main extends Component {

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
        age: 32,
        address: '西湖区湖底公园1号',
      },
      {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园2号',
      },
      {
        key: '3',
        name: '马云',
        age: 46,
        address: '西湖区湖底公园3号',
      },
      {
        key: '4',
        name: '马化腾',
        age: 40,
        address: '深圳腾讯大厦4号',
      },
      {
        key: '5',
        name: '任正非',
        age: 52,
        address: '西湖区湖底公园5号',
      },
      {
        key: '6',
        name: '周杰伦',
        age: 40,
        address: '香港尖沙咀5号',
      },
      {
        key: '7',
        name: 'React',
        age: 20,
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
  

  
  render() {
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
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
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
        render:(key)=> 
        <Popconfirm
          placement="topRight"
          title='确定删除此条信息'
          onConfirm={()=>this.confirm(key)}
          okText="确定"
          cancelText="取消"
        ><Button type='primary'>删除</Button></Popconfirm>
      },
    ];
    return (
      <div>
        <Card style={{ width: 350,margin:10 }}>
          {/* <input type="text" ref={this.keyWord} onKeyUp={this.search}/> */}
          {/* <Input onKeyUp={this.search} ref={this.keyWord} placeholder="请输入搜索名字" style={{ width: 200,marginRight:20 }}/> */}
          <Search placeholder="请输入用户名或地址查询" onSearch={(value)=>this.search(value)} enterButton style={{ width: 300,marginRight:20 }}/>
          {/* <Button type='primary' onClick={this.search}>搜索</Button> */}
        </Card>
        <Card style={{ width: 800,margin:10 }}>
          <h2>添加新用户</h2>
          <Input ref={this.id} placeholder="请输入ID" style={{ width: 100,marginRight:20 }}/>
          <Input ref={this.userName} placeholder="请输入名字" style={{ width: 100,marginRight:20 }}/>
          <InputNumber min='0' ref={this.age} placeholder="请输入年龄" style={{ width: 100,marginRight:20 }}/>
          <Input ref={this.address} placeholder="请输入地址" style={{ width: 200,marginRight:20 }}/>
          <Button type='primary' onClick={this.addUser}>添加</Button>
        </Card>,
        <Table dataSource={dataSource} columns={columns} pagination={{ position: [this.state.postion] }} scroll={{ y: 390 }}/>
      </div>
    )
  }
}
