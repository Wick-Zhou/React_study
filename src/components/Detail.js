import React, { Component } from 'react'
import {Button} from 'antd'
import {withRouter} from 'react-router-dom'

class Detail extends Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        <Button onClick={()=>{this.props.history.goBack()}}>{'<返回'}</Button>
        {this.props.match.params.title}
      </div>
    )
  }
}

export default withRouter(Detail)