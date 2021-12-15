import {
  Table, Button, Card, Input, Form, message,
} from 'antd'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { addShopCarAction, isloadingAction } from '../redux/actions/actions'
import { getList } from '../service/api'

const { Search } = Input

const GoodsList = (props) => {
  const form = useRef()
  const [dataSource, setDataSource] = useState([])
  const { handleLoading, isLogin } = props

  useEffect(() => {
    handleLoading(true)
    getList().then((res) => {
      setDataSource(res.data.list)
    })
      .catch(() => {})
      .finally(() => {
        handleLoading(false)
      })
    // return () => { setDataSource(){return false}}
  }, [])

  function search(keyWord) {
    if (keyWord.trim()) {
      const searchData = dataSource.filter((item) => {
        if (item.name.includes(keyWord) || item.address.includes(keyWord)) {
          return true
        }
        return false
      })
      setDataSource(searchData)
    } else {
      handleLoading(true)
      getList().then((res) => {
        setDataSource(res.data.list)
      })
        .catch(() => {})
        .finally(() => {
          handleLoading(false)
        })
    }
  }

  function addUser(data) {
    if (dataSource.find((item) => item.key === data.key) === undefined) {
      const newObj = {
        key: data.key,
        name: data.name,
        price: data.price,
        address: data.address,
        selected: true,
      }
      setDataSource([...dataSource, newObj])
      message.success('已添加成功!')
      form.current.resetFields()
    } else {
      message.error('已存在相同的Key，请重试!')
    }
  }

  function addShopCar(data) {
    if (isLogin) {
      addShopCar(data)
      message.success('添加成功!')
    } else {
      message.warning('请登录后尝试!')
    }
  }

  function onFinish(values) {
    // console.log('Success:', values)
    addUser(values)
  }

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
      render: (a, b) => <NavLink to={{ pathname: `goodlist/detail/${a}`, state: b }}>{a}</NavLink>,
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
      render: (key, data) => (
        <Button
          type="primary"
          onClick={() => addShopCar(data)}
        >
          添加购物车
        </Button>
      ),
    },
  ]

  const paginationProps = {
    position: ['bottomCenter'],
    total: dataSource.length,
    defaultPageSize: 5,
    onChange: (paginationData) => sessionStorage.setItem('goodListPage', paginationData),
    defaultCurrent: Number(sessionStorage.getItem('goodListPage')) || 1,
  }

  return (
    <div>
      {/* 搜索框 */}
      <Card style={{ width: 350, margin: 10 }}>
        <Search
          allowClear
          placeholder="请输入用户名或地址查询"
          onSearch={(value) => search(value)}
          enterButton
          style={{ width: 300, marginRight: 20 }}
        />
      </Card>
      {/* 添加商品框 */}
      <Card style={{ marginLeft: 10, marginBottom: 10 }}>
        <Form
          ref={form}
          layout="inline"
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          onFinish={(values) => onFinish(values)}
          autoComplete="off"
          style={{ marginTop: 20, marginLeft: 20 }}
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
            <Input placeholder="请输入Key" />
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
            <Input placeholder="请输入用户名" />
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
            <Input placeholder="请输入价格" />
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
            <Input placeholder="请输入地址" />
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
      {/* 商品列表框 */}
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={paginationProps}
      />
    </div>
  )
}

GoodsList.propTypes = {
  handleLoading: PropTypes.func.isRequired,
  isLogin: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => ({
  carList: state.countReducer, isLogin: state.loginReducer.isLogin,
})

const mapDispatchToProps = (dispatch) => ({
  addShopCar: (data) => { dispatch(addShopCarAction(data)) },
  handleLoading: (data) => { dispatch(isloadingAction(data)) },
})

export default connect(mapStateToProps, mapDispatchToProps)(GoodsList)
