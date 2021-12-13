/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { PureComponent } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import './App.css'
import { Layout } from 'antd'
import { connect } from 'react-redux'
import Head from './components/Head'
import Nav from './components/Nav'
import Buttom from './components/Bottom'
// import mainRoutes from './routes/mainRoutes'
import GoodsList from './components/GoodsList'
import ShopCar from './components/ShopCar'
import Option4 from './components/Option4'
import Login from './components/Login'
import Detail from './components/Detail'

const {
  Header, Footer, Sider, Content,
} = Layout

class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = { collapsed: 'true' }
  }

  getCollapsed(data) {
    console.log(data, this)
  }

  render() {
    // console.log(this)
    return (
      <div>
        <Layout>
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}><Head /></Header>
          <Layout>
            <Sider
              style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
                top: 64,
              }}
              // collapsible
              inlinecollapsed={this.state.collapsed}
            >
              <Nav getCollapsed={(data) => this.getCollapsed(data)} />
            </Sider>
            <Content style={{ marginLeft: 200, marginTop: 64 }}>
              <Switch>
                <Route exact path="/option1" component={GoodsList} />
                <Route
                  exact
                  path="/login"
                  render={() => {
                    if (this.props.isLogin) {
                      return <Option4 />
                    }
                    return <Login />
                  }}
                />
                <Route
                  exact
                  path="/option3"
                  render={() => {
                    if (this.props.isLogin) {
                      return <ShopCar />
                    }
                    return <Redirect to="/login" />
                  }}
                />
                <Route exact path="/option1/detail/:title" component={Detail} />
                <Redirect to="option1" from="/" />
                {/* {
                  mainRoutes.map(item=>
                    <Route key={item} path={item.path} component={item.component}></Route>
                  )
                } */}
              </Switch>
            </Content>
          </Layout>
          <Footer>
            <Buttom />
          </Footer>
          {/* 全局的请求加载效果 */}
          {
            this.props.isLoading ? <div className="isloading">Loading</div> : ''
          }
        </Layout>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isLogin: state.loginReducer.isLogin,
  isLoading: state.globalLoadingReducer.isLoading,
})

export default connect(mapStateToProps, null)(App)
