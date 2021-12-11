import React, { PureComponent } from 'react'
import {
  PauseOutlined,
  StepBackwardOutlined,
  StepForwardOutlined,
} from '@ant-design/icons'

export default class Option5 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{
          backgroundColor: 'pink', height: 50, display: 'flex', justifyContent: 'center', alignItems: 'center',
        }}
        >
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
