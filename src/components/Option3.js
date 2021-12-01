import React, { Component } from 'react'
import store from '../redux/store'

export default class Option3 extends Component {
  // constructor(props){
  //   super(props)
  //   this.state={num:store.getState()}
  //   store.subscribe(this.handleChange)
  // }

  // handleChange=()=>{
  //   this.setState({num:store.getState()})
  // }

  add=()=>{
    console.log(this.props);
    store.dispatch(add)
  }
  odd=()=>{
    // store.dispatch({type:'jian',data:11})
  }

  render() {
    return (
      <div>
        <button onClick={this.odd}>-</button>
        <button onClick={this.add}>+</button>
        {store.getState()}
      </div>
    )
  }
}
