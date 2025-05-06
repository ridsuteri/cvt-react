import React from 'react'
import { useState } from 'react';

function App() {

  // let [stateVariable, setterFunction] = useState(initialValue)
  let [counter, setCounter] = useState(0);

  // let counter = 0;

  const increment = ()=>{
    // ++counter;
    setCounter(++counter);
    console.log(counter)
  }

  const reset = ()=>{
    // counter = 0;
    setCounter(0);
    console.log(counter)
  }

  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default App