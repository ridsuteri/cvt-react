import React, { useEffect, useState } from 'react'

function NewComponent() {
    let [count, setCount] = useState(0)
    let [count2, setCount2] = useState(0)
    // console.log('all the phases')
    
    // mounting phase
    useEffect(()=>{
        console.log('mounting phase')
    }, [])
    // [] - run it only on the mounting phase


    // updation / render
    useEffect(()=>{
        console.log('rendering/update phase')
    }, [count])

    // unmounting 
    useEffect(()=>{
        // cleanup task
        return () => {console.log('unmounting phase')}
    }, [])


  return (
    <div>
        New Component <br />
        <button onClick={()=>{setCount((++count))}}>Call re-render (for count)</button>
        <button onClick={()=>{setCount2((++count2))}}>Call re-render (for count2)</button>
    </div>
  )
}

export default NewComponent