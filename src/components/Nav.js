import React, { Component } from 'react'
import { NavLink,withRouter } from 'react-router-dom';
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
  state = {currentPath:[]}

  componentDidMount(){
    const moren=this.props.location.pathname
    this.setState({currentPath:moren.substring(moren.lastIndexOf('/')+1,moren.length)})
    this.props.history.listen((event)=>{
      let test=event.pathname
      let text=test.substring(test.lastIndexOf('/')+1,test.length)
      this.setState({currentPath:text})
    })
  }

  render() {
    return (
      <div style={{ width: 200 }}>
        <Menu
          defaultSelectedKeys={['1']}
          // defaultOpenKeys={[]}
          mode="inline"
          theme="dark"
          selectedKeys={[this.state.currentPath]}
        >
          <Menu.Item key="option1" icon={<PieChartOutlined />}>
            <NavLink to={{pathname:'/option1'}}>Option 1</NavLink>
          </Menu.Item>
          
          <Menu.Item key="login" icon={<DesktopOutlined />}>
            <NavLink to='/login'>Option 2</NavLink>
          </Menu.Item>
          <Menu.Item key="option3" icon={<ContainerOutlined />}>
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

export default withRouter(Nav)