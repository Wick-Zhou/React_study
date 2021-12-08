import React, { Component } from 'react'
import { Route, Switch,Redirect } from 'react-router-dom'

import './App.css'
import { Layout, message } from 'antd'
import Head from './components/Head'
import Nav from './components/Nav'
import Buttom from './components/Bottom'
// import mainRoutes from './routes/mainRoutes'
import {connect} from 'react-redux'
import GoodsList from './components/GoodsList'
import ShopCar from './components/ShopCar'
import Option4 from './components/Option4'
import Option5 from './components/Option5'
import Login from './components/Login'
import Detail from './components/Detail'


const { Header, Footer, Sider, Content } = Layout


class App extends Component {

  
  
  render() {
    // console.log(this.props)
    
    return (
      <div>
        <Layout>
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}><Head/></Header>
          <Layout>
            <Sider
            style={{
              overflow: 'auto',
              height: '100vh',
              position: 'fixed',
              left: 0,
              top:64
            }}>
              <Nav/>
            </Sider>
            <Content style={{ marginLeft: 200,marginTop:64}}>
              <Switch>
                <Route exact path='/option1' component={GoodsList}></Route>
                <Route exact path='/login' render={()=>{
                  if(this.props.isLogin){
                    return <Option4 />
                  }else{
                    return <Login />
                  }
                }}></Route>
                {/* component={Option3} */}
                <Route exact path='/option3' render={()=>{
                      if(this.props.isLogin){
                        return <ShopCar/>
                      }else{
                        return <Redirect to='/login'></Redirect>
                      }
                    }}></Route>
                <Route exact path='/option5' component={Option5}></Route>
                <Route exact path='/option1/detail/:title' component={Detail}></Route>
                {/* <Redirect to='option1' from='/'></Redirect> */}
                {/* {
                  mainRoutes.map(item=>
                    <Route key={item} path={item.path} component={item.component}></Route>
                  )
                  
                  
                } */}
                {/* render={()=>{
                      if(this.props.isLogin){
                        const {component}=item
                        return <component/>
                      }else{
                        return <Redirect to='/login'></Redirect>
                      }
                    }} */}
                {/* <Redirect to='option1' from='/'></Redirect> */}
              </Switch>
            </Content>
          </Layout>
          <Footer>
            <Buttom></Buttom>
          </Footer>
          {
            this.props.isLoading?<div className="isloading">Loading</div>:''
          }
        </Layout>
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
  return {
    isLogin:state.loginReducer.isLogin,
    isLoading:state.globalLoadingReducer.isLoading
  }
}

export default connect(mapStateToProps,null)(App)