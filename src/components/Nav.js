import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom';
import { Menu } from 'antd';
import {
  AppstoreOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';


const { SubMenu } = Menu;

class Nav extends Component {

  render() {
    const { pathname } = this.props.history.location
    // 用于导航栏高亮
    const navKey = pathname.substring(0, pathname.slice(1).indexOf('/') + 1) || pathname
    // console.log(this.props);
    return (
      <div style={{ width: 200 }}>
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
            <NavLink to='/login'>登录</NavLink>
          </Menu.Item>
          <Menu.Item key="/option3" icon={<ContainerOutlined />}>
            <NavLink to='/option3'>购物车</NavLink>
          </Menu.Item>
          <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
            <Menu.Item key="/option5"><NavLink to="/option5">Option 5</NavLink></Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default withRouter(Nav)