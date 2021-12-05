import React, { Component } from 'react'
import { Route, Switch,Redirect } from 'react-router-dom'
import 'antd/dist/antd.css'
import { Layout } from 'antd';
import Head from './components/Head';
import Nav from './components/Nav';
import Main from './components/Main';
import Buttom from './components/Buttom';
import Option2 from './components/Option2';
import Option3 from './components/Option3';
import Option5 from './components/Option5';

const { Header, Footer, Sider, Content } = Layout;


export default class App extends Component {

  render() {
    return (
      <div>
        <Layout>
          <Header><Head/></Header>
          <Layout>
            <Sider>
              <Nav/>
            </Sider>
            <Content>
              <Switch>
                <Route path='/option1' component={Main}>
                  {/* 嵌套路由规则 */}
                  {/* <Route path='option5' component={Option2}></Route> */}
                </Route>
                <Route path='/option2' component={Option2}></Route>
                <Route path='/option3' component={Option3}></Route>
                <Route path='/option5' component={Option5}></Route>
                <Redirect to='option1' from='/'></Redirect>
              </Switch>
            </Content>
          </Layout>
          <Footer>
            <Buttom></Buttom>
          </Footer>
        </Layout>
      </div>
    )
  }
}

