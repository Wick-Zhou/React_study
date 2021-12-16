import { NavLink, withRouter } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { Menu } from 'antd'
import {
  PieChartOutlined,
  DesktopOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons'

const Nav = (props) => {
  let pathname = ''
  const { history: { location } } = props
  const { isLogin } = useSelector((state) => state.login)
  pathname = location.pathname
  // 用于当前路径导航栏高亮
  const navKey = (`/${pathname.split('/')[1]}`) || pathname
  return (
    <div style={{ width: 200 }}>
      <Menu
        defaultSelectedKeys={['/option1']}
        mode="inline"
        theme="dark"
        selectedKeys={[navKey]}
      >
        <Menu.Item key="/goodlist" icon={<PieChartOutlined />}>
          <NavLink to={{ pathname: '/goodlist' }}>商品列表</NavLink>
        </Menu.Item>
        {
          isLogin
            ? (
              <Menu.Item key="/userpage" icon={<DesktopOutlined />}>
                <NavLink to="/userpage">个人中心</NavLink>
              </Menu.Item>
            )
            : (
              <Menu.Item key="/login" icon={<DesktopOutlined />}>
                <NavLink to="/login">登录</NavLink>
              </Menu.Item>
            )

        }

        <Menu.Item key="/shopcar" icon={<ShoppingCartOutlined />}>
          <NavLink to="/shopcar">购物车</NavLink>
        </Menu.Item>
      </Menu>
    </div>
  )
}

Nav.propTypes = {
  history: PropTypes.object.isRequired,
}

export default withRouter(Nav)
