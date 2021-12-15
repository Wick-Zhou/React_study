/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Table, Card, Button, Popconfirm, message,
} from 'antd'
import {
  addCountAction,
  oddCountAction,
  deleteFromShopCarAction,
  changeSelectedAction,
  changeAllSelectedAction,
} from '../redux/actions/actions'

import './shopCar.css'

class ShopCar extends Component {
  delete(data) {
    message.success('已成功删除!')
    this.props.delete(data)
  }

  render() {
    // console.log(this.props)
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
        align: 'center',
      },
      {
        title: '数量',
        dataIndex: 'count',
        key: 'count',
        align: 'center',
      },
      {
        title: '价格',
        dataIndex: 'price',
        key: 'price',
        align: 'center',
      },
      {
        title: '操作',
        dataIndex: 'key',
        key: 'key',
        align: 'center',
        render: (key, data) => (
          <div>
            <Button type="button" onClick={() => this.props.odd(data)} style={{ marginRight: 20 }}>-</Button>
            <Button type="button" onClick={() => this.props.add(data)} style={{ marginLeft: 20 }}>+</Button>
          </div>
        ),
      },
      {
        title: '删除',
        dataIndex: 'key',
        key: 'key',
        align: 'center',
        render: (key, data) => (
          <div>
            <Popconfirm
              placement="left"
              title="请三思而行!"
              onConfirm={() => this.delete(data)}
              okText="滚一边去"
              cancelText="算了"
            >
              <Button danger>删除</Button>
            </Popconfirm>
          </div>
        ),
      },
    ]

    const rowSelection = {
      type: 'checkbox',
      defaultSelectedRowKeys: this.props.carList.map((item) => {
        if (item.selected === true) {
          return item.key
        } return null
      }),

      onSelect: (record, selected) => {
        this.props.changeSelected(record, selected)
      },
      onSelectAll: (selected) => {
        this.props.changeAllSelected(selected)
      },
    }

    const paginationProps = {
      position: ['bottomCenter'],
      total: this.props.carList.length,
      defaultPageSize: 5,
      onChange: (paginationData) => sessionStorage.setItem('shopCarPage', paginationData),
      defaultCurrent: Number(sessionStorage.getItem('shopCarPage')) || 1,
    }

    return (
      <div>
        <Card className="totalPrice">
          <div>
            ￥
            {this.props.carList.filter((item) => item.selected === true)
              .reduce((pre, item) => pre + (item.count * item.price), 0)}
          </div>
        </Card>
        <Table
          style={{ margin: 10 }}
          rowSelection={{
            ...rowSelection,
          }}
          dataSource={this.props.carList}
          columns={columns}
          pagination={paginationProps}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ carList: state.countReducer })

const mapDispatchToProps = (dispatch) => ({
  add: (data) => { dispatch(addCountAction(data)) },
  odd: (data) => { dispatch(oddCountAction(data)) },
  delete: (data) => { dispatch(deleteFromShopCarAction(data)) },
  changeSelected: (data, selected) => { dispatch(changeSelectedAction(data, selected)) },
  changeAllSelected: (selected) => { dispatch(changeAllSelectedAction(selected)) },
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopCar)
