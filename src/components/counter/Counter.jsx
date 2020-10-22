import React, { Component } from 'react'
import './Counter.css'

class Counter extends Component {

  //define the initial state in a constructior
  //state=> counter 0
  //constructor() {
   // super();//Error
   // this.state = {
    //  counter: 0
    //}

    //this.increment = this.increment.bind(this);

  //}
  render() {
    return (
      <div className="counter">
        <button onClick={this.increment} >+{this.props.by}</button>
        <span className="count">{this.state.counter}</span>
      </div>
    )

  }
  increment() {//update state-counter++
    //console.log('increment');
    //this.state.counter++; bad practice
    this.setState({
      counter: this.state.counter + this.props.by
    })
  }
}
Counter.defaultProps = {
  by: 1
}


export default Counter

