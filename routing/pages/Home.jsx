import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>HOme</h1>
      <Link to="/about">Go to About</Link>
      {/* <a href="/about">Go to About</a> */}
    </div>
  )
}

export default Home