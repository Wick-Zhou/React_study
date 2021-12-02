import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Table } from 'antd';
import {addCountAction,oddCountAction} from '../redux/actions/actions'

class Option3 extends Component {

  add=(data)=>{
    console.log(data);
    this.props.add(data)
  }
  odd = (data) => {
    console.log(data);
    this.props.odd(data)
  }

  render() {
    console.log(this.props);
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
        title: '数量',
        dataIndex: 'count',
        key: 'count',
      },
      {
        title: '价格',
        dataIndex: 'price',
        key: 'price',
      },
      {
        title: '操作',
        dataIndex: 'key',
        key: 'key',
        render:(key,data)=>
        <div>
          <button onClick={() =>this.odd(data)} style={{marginRight:20}}>-</button>
          <button onClick={() =>this.add(data)} style={{marginLeft:20}}>+</button>
        </div>
      },
    ];
    return (
      <div>
        <Table dataSource={this.props.carList} columns={columns} pagination={{ position: ['bottomCenter'] }} scroll={{ y: 390 }}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    add:(data)=>{dispatch(addCountAction(data))},
    odd:(data)=>{dispatch(oddCountAction(data))}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Option3)