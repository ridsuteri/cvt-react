import React, { useState } from 'react'
import NewComponent from './NewComponent'

function App() {
  let [showComponent, setShowComponent] = useState(false)

  return (
    <div>
      <button onClick={()=>{setShowComponent(!showComponent)}}>Toggle Component</button>
      {showComponent  ? <NewComponent /> : <></>}
    </div>
  )
}

export default App