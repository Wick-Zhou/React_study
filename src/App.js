import React, { Component } from 'react'
import { Route, Routes,Navigate } from 'react-router-dom'
import 'antd/dist/antd.css'
import { Layout } from 'antd';
import Head from './components/Head';
import Nav from './components/Nav';
import Main from './components/Main';
import Buttom from './components/Buttom';
import Option2 from './components/Option2';
import Option3 from './components/Option3';

const { Header, Footer, Sider, Content } = Layout;



export default class App extends Component {

  render() {
    return (
        <div>
          <Layout>
            <Header><Head/></Header>
            <Layout>
              <Sider collapsible>
                <Nav/>
              </Sider>
              <Content>
                <Routes>
                  <Route path='/option1' element={<Main/>}>
                    {/* 嵌套路由规则 */}
                    <Route path='option5' element={<Option2/>}></Route>
                  </Route>
                  <Route path='/option2' element={<Option2/>}></Route>
                  <Route path='/option3' element={<Option3/>}></Route>
                  <Route path='*' element={<Navigate to='option1'/>}></Route>
                </Routes>
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

