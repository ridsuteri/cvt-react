import React from 'react'

function Card(props) {
    // console.log(props)
  return (
    <div className='card'>
        <h3> {props.title} </h3>
        <h3> {props.desc} </h3>
    </div>
  )
}

export default Card
