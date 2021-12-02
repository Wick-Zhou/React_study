import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import {
  AppstoreOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';


const { SubMenu } = Menu;

export default class Nav extends Component {


  render() {
    return (
      <div style={{ width: 200 }}>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={[]}
          mode="inline"
          theme="dark"
        >
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            <NavLink to={{pathname:'/option1',state: {name:'zhou',age:11}}}>Option 1</NavLink>
          </Menu.Item>
          
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            <NavLink to='/option2'>Option 2</NavLink>
          </Menu.Item>
          <Menu.Item key="3" icon={<ContainerOutlined />}>
            <NavLink to='/option3'>Option 3</NavLink>
          </Menu.Item>
          <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
            <Menu.Item key="5"><NavLink to="/option5">Option 5</NavLink></Menu.Item>
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