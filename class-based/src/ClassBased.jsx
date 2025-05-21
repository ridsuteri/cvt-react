import React, { Component } from "react";

class ClassBased extends Component {
  // define a variable for the entire class ( a variable that the entire class can access)
  // set the variables intial value to be 0
  // expose few methods which will allow user to interact with that variable


//   below are experiments on states
  constructor(props) {
    super(props);

    this.state = {
      counter: 10,
    };
  }

  increment = () =>{
    this.setState((prev)=>{
      return {
        counter: prev.counter + 1
      }
    })
  }

  reset = () => {
    this.setState({
      counter: 0,
    });
  };

//   below are experiments on life cycle phases
  componentDidMount(){
   console.log('component mounted') 
  }

  componentDidUpdate(){
    console.log('component being updated')
  }

  componentWillUnmount(){
    console.log('component being unmounted')
  }

  render() {
    return (
      <div>
        Counter: {this.state.counter} <br />
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default ClassBased;

// class Person {
//   int age;
//  string name;
//  count<<this.name
// }

// [count, setCount] = useState()

// setCount(56)