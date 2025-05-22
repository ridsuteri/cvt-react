import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Profile from '../pages/Profile'
import { BooksLayout } from '../components/BooksLayout'

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="profile/:username/:visibility" element={<Profile />} />

        <Route path="/books" element={<BooksLayout />}>
          <Route index element={<Home />} />
          <Route path="new" element={<About />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App