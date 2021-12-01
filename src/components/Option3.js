import React, { Component } from 'react'
import {connect} from 'react-redux'

class Option3 extends Component {

  add=()=>{
    this.props.add()
  }
  odd = () => {
    this.props.odd()
  }

  render() {
    return (
      <div>
        <button onClick={this.odd}>-</button>
        <button onClick={this.add}>+</button>
        {this.props.count}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    add:()=>{dispatch({type:'ADD',data:1})},
    odd:()=>{dispatch({type:'ODD',data:1})}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Option3)