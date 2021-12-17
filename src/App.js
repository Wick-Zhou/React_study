import { Route, Redirect } from 'react-router-dom'
import './App.css'
import { Layout } from 'antd'
import { useSelector } from 'react-redux'
import CacheRoute, { CacheSwitch } from 'react-router-cache-route'
import Head from './components/Head'
import Nav from './components/Nav'
import Bottom from './components/Bottom'
// import mainRoutes from './routes/mainRoutes'
import GoodsList from './components/GoodsList'
import ShopCar from './components/ShopCar'
import Login from './components/Login'
import Detail from './components/Detail'
import UserPage from './components/UserPage'

const {
  Header, Footer, Sider, Content,
} = Layout

const App = () => {
  const { isLoading } = useSelector((state) => state.loading)
  const { isLogin } = useSelector((state) => state.login)
  return (
    <div style={{ height: '100%' }}>
      <Layout className="container">
        <Header style={{ position: 'fixed', zIndex: 3, width: '100%' }}><Head /></Header>
        <Layout className="mainPage">
          <Sider
            style={{
              overflow: 'auto',
              height: '100vh',
              position: 'fixed',
              left: 0,
              top: 64,
            }}
          >
            <Nav />
          </Sider>
          <Content style={{ marginLeft: 200, marginTop: 64 }}>
            <CacheSwitch>
              <CacheRoute saveScrollPosition exact path="/goodlist" component={GoodsList} />
              <Route
                exact
                path="/login"
                render={() => {
                  if (isLogin) {
                    return <Redirect to="/userpage" />
                  }
                  return <Login />
                }}
              />
              <Route
                exact
                path="/userpage"
                render={() => {
                  if (isLogin) {
                    return <UserPage />
                  }
                  return <Redirect to="/login" />
                }}
              />
              <Route
                exact
                path="/shopcar"
                // render={() => <ShopCar />}
                render={() => {
                  if (isLogin) {
                    return <ShopCar />
                  }
                  return <Redirect to="/login" />
                }}
              />
              <Route exact path="/goodlist/detail/:title" component={Detail} />
              <Redirect to="/goodlist" from="/" />
              {/* {
                mainRoutes.map(item=>
                  <Route key={item} path={item.path} component={item.component}></Route>
                )
              } */}
            </CacheSwitch>
          </Content>
        </Layout>
        <Footer className="footer">
          <Bottom />
        </Footer>
        {/* 全局的请求加载效果 */}
        {
          isLoading ? <div className="isloading">Loading</div> : ''
        }
      </Layout>
    </div>
  )
}

export default App
