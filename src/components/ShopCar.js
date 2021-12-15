import { useSelector, useDispatch } from 'react-redux'
import {
  Table, Card, Button, Popconfirm, message,
} from 'antd'
import './shopCar.css'
import {
  addCount, oddCount, deleteGood, selected, allSelected,
} from '../store/feature/countSlice'

const ShopCar = () => {
  const dispatch = useDispatch()
  const { carList } = useSelector((state) => state.count)
  const deleteCarGood = (data) => {
    message.success('已成功删除!')
    dispatch(deleteGood(data))
  }
  // console.log(this.props)
  const columns = [
    {
      title: 'ID',
      dataIndex: 'key',
      key: 'key',
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
          <Button type="button" onClick={() => dispatch(oddCount(data))} style={{ marginRight: 20 }}>-</Button>
          <Button type="button" onClick={() => dispatch(addCount(data))} style={{ marginLeft: 20 }}>+</Button>
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
            onConfirm={() => deleteCarGood(data)}
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
    defaultSelectedRowKeys: carList.map((item) => {
      if (item.selected === true) {
        return item.key
      } return null
    }),

    onSelect: (data, isSelect) => {
      dispatch(selected(data, isSelect))
    },
    onSelectAll: (isSelect) => {
      dispatch(allSelected(isSelect))
    },
  }

  const paginationProps = {
    position: ['bottomCenter'],
    total: carList.length,
    defaultPageSize: 5,
    onChange: (paginationData) => sessionStorage.setItem('shopCarPage', paginationData),
    defaultCurrent: Number(sessionStorage.getItem('shopCarPage')) || 1,
  }

  return (
    <div>
      <Card className="totalPrice">
        <div>
          ￥
          {carList.filter((item) => item.selected === true)
            .reduce((pre, item) => pre + (item.count * item.price), 0)}
        </div>
      </Card>
      <Table
        style={{ margin: 10 }}
        rowSelection={{
          ...rowSelection,
        }}
        dataSource={carList}
        columns={columns}
        pagination={paginationProps}
      />
    </div>
  )
}

// const mapStateToProps = (state) => ({ carList: state.countReducer })

// const mapDispatchToProps = (dispatch) => ({
//   add: (data) => { dispatch(addCountAction(data)) },
//   odd: (data) => { dispatch(oddCountAction(data)) },
//   deleteGoodR: (data) => { dispatch(deleteFromShopCarAction(data)) },
//   changeSelected: (data, selected) => { dispatch(changeSelectedAction(data, selected)) },
//   changeAllSelected: (selected) => { dispatch(changeAllSelectedAction(selected)) },
// })

export default ShopCar
