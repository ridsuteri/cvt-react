import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
      <h1>About</h1>
      <Link to="/">Go to Home</Link>
      {/* <a href="/">Go to Home</a> */}
    </div>
  )
}

export default About