import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import ToggleButton from './ToggleButton'

function Level2() {
  const themeContext = useContext(ThemeContext)
  console.log('current value of themeContext in Level2: ', themeContext)
  return (
    <div>
      <ToggleButton/>
      Level2
      </div>
  )
}

export default Level2