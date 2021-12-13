/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { Menu, Button } from 'antd'
import {
  PieChartOutlined,
  DesktopOutlined,
  ShoppingCartOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons'

class Nav extends PureComponent {
  constructor(props) {
    super(props)
    this.state = { collapsed: false }
  }

  toggleCollapsed() {
    this.props.getCollapsed(123)
  }

  render() {
    const { pathname } = this.props.history.location
    // 用于导航栏高亮
    const navKey = pathname.substring(0, pathname.slice(1).indexOf('/') + 1) || pathname
    return (
      <div style={{ width: 200 }}>
        <Button type="primary" onClick={() => this.toggleCollapsed()} style={{ marginBottom: 16 }}>
          {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          // defaultOpenKeys={[]}
          mode="inline"
          theme="dark"
          selectedKeys={[navKey]}
        >
          <Menu.Item key="/option1" icon={<PieChartOutlined />}>
            <NavLink to={{ pathname: '/option1' }}>商品列表</NavLink>
          </Menu.Item>

          <Menu.Item key="/login" icon={<DesktopOutlined />}>
            <NavLink to="/login">登录</NavLink>
          </Menu.Item>
          <Menu.Item key="/option3" icon={<ShoppingCartOutlined />}>
            <NavLink to="/option3">购物车</NavLink>
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default withRouter(Nav)
