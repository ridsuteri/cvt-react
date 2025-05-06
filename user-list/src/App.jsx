import React from 'react'
import UserList from './UserList';
import users from './data/users.json'

function App() {

  return (
    <UserList users={users}/>
  )
}

export default App