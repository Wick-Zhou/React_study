import React, { Component } from 'react'
import {connect} from 'react-redux'

class Head extends Component {
  render() {
    return (
      <div style={{color: 'white'}}>
        <span style={{color: 'white',fontWeight: '900',fontSize:20}}>welcome</span>
        {
          this.props.isLogin?(<span> - {this.props.username}</span>):''
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {username:state.loginReducer.username,isLogin:state.loginReducer.isLogin}
}

export default connect(mapStateToProps,null)(Head)