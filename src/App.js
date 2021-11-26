import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css'
import { Layout } from 'antd';
import Head from './components/Head';
import Nav from './components/Nav';
import Main from './components/Main';
import Buttom from './components/Buttom';

const { Header, Footer, Sider, Content } = Layout;



export default class App extends Component {
  state={collapsed:false};

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <Layout>
            <Header><Head/></Header>
            <Layout>
              <Sider collapsed={this.state.collapsed}><Nav toggleCollapsed={()=>this.toggle()}/></Sider>
              <Content><Main/></Content>
            </Layout>
            <Footer><Buttom></Buttom></Footer>
          </Layout>
        </div>
      </BrowserRouter>
    )
  }
}

