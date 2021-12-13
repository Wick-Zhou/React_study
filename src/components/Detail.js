/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { PureComponent } from 'react'
import { Button } from 'antd'
import { withRouter } from 'react-router-dom'

class Detail extends PureComponent {
  render() {
    return (
      <div>
        <Button onClick={() => { this.props.history.goBack() }}>{'<返回'}</Button>
        {this.props.match.params.title}
      </div>
    )
  }
}

export default withRouter(Detail)
