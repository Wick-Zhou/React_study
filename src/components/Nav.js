import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Menu } from 'antd'
import {
  PieChartOutlined,
  DesktopOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons'

const Nav = (props) => {
  let pathname = ''
  const { history: { location }, isLogin } = props
  pathname = location.pathname
  // 用于导航栏高亮
  const navKey = pathname.substring(0, pathname.slice(1).indexOf('/') + 1) || pathname
  // const navKey = (`/${pathname.split('/')[0]}`) || pathname
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
  isLogin: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => ({
  isLogin: state.loginReducer.isLogin,
})
export default connect(mapStateToProps, null)(withRouter(Nav))
