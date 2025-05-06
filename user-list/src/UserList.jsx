import React from 'react'
import UserCard from './UserCard'

function UserList({users}) {
  return (
    // <div style="display: flex; justify-content: center; ">
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100vw", gap: "10px"}}>
        {users.map((user)=>(
            <UserCard key={user.profileImageUrl} user={user}/>
        ))}
    </div>
  );
}


export default UserList