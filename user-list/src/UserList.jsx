import React, { useState } from 'react'
import UserCard from './UserCard'

function UserList({users}) {
  const [counter, setCounter] = useState(0);
  return (
    // <div style="display: flex; justify-content: center; ">
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100vw", gap: "10px"}}>
        {users.map((user)=>(
            <UserCard key={user.profileImageUrl} user={user} counter={counter} setCounter={setCounter} />
        ))}
    </div>
  );
}


export default UserList