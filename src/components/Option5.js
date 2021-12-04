import React, { Component } from 'react'
import {
  PauseOutlined,
  StepBackwardOutlined,
  StepForwardOutlined
} from '@ant-design/icons'

export default class Option5 extends Component {
  render() {
    return (
      <div>
        <div style={{backgroundColor: 'pink',height: 50,display:'flex',justifyContent: 'center',alignItems: 'center'}}>
          <div>
            <StepBackwardOutlined />
            <PauseOutlined />
            <StepForwardOutlined />
          </div>
        </div>
      </div>
    )
  }
}
