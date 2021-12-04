import React, { Component } from 'react'
// import React, { useState } from 'react';
import {connect} from 'react-redux'
import { Table,Card,Button } from 'antd';
import {
  addCountAction,
  oddCountAction,
  deleteFromShopCarAction,
  changeSelectedAction
} from '../redux/actions/actions'

import './Option3.css'

class Option3 extends Component {

  add=(data)=>{
    // console.log(data);
    this.props.add(data)
  }

  odd = (data) => {
    // console.log(data);
    this.props.odd(data)
  }

  delete=(data) => {
    this.props.delete(data)
  }

  changeSelected=(data,selected)=>{
    this.props.changeSelected(data,selected)
  }
  
  render() {
    // console.log(this.props);
    const columns = [
      {
        title: 'ID',
        dataIndex: 'key',
        key: 'key',
        // render:(text,record,index)=>`${index+1}`
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
      {
        title: '删除',
        dataIndex: 'key',
        key: 'key',
        render:(key,data)=>
        <div>
          <Button danger onClick={() =>this.delete(data)}>删除</Button>
        </div>
      },
    ];
    const rowSelection = {
      type:'checkbox',
      // onChange: (selectedRowKeys, selectedRows) => {
      //   console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      // },
      onSelect:(record, selected, selectedRows, nativeEvent)=>{
        console.log(record, selected, selectedRows, nativeEvent);
        this.changeSelected(record,selected)
      },
      defaultSelectedRowKeys:this.props.carList.map(item => {if(item.selected===true){return item.key}})
    };

    return (
      <div>
        <Card className='totalPrice'><div>￥{this.props.carList.filter(item =>item.selected===true).reduce((pre,item)=>pre+(item.count*item.price),0)}</div></Card>
          <Table rowKey="key" rowSelection={{
            ...rowSelection,
        }} dataSource={this.props.carList} columns={columns} pagination={{ position: ['bottomCenter'] }}/>
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
    odd:(data)=>{dispatch(oddCountAction(data))},
    delete:(data)=>{dispatch(deleteFromShopCarAction(data))},
    changeSelected:(data,selected)=>{dispatch(changeSelectedAction(data,selected))}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Option3)