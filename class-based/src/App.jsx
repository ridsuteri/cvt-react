import React, { Component } from 'react'
import ClassBased from './ClassBased'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      mounted: true
    }
  }

  toggleComponent = ()=>{
    this.setState((prev)=>{
      return {mounted: !prev.mounted}
    })
  }

  render() {
    return (
      <div>

        {this.state.mounted ? <ClassBased/> : <></> }
        <button onClick={this.toggleComponent}>Toggle component</button>
      </div>
    )
  }
}
