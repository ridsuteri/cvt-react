import React from 'react'

function UserCard({user}) {
    // wrapper component
    // styling factors
  return (
    <div style={{ border: "2px solid black", padding:"5px", borderRadius:"2px"}}>
        <div>
            <img src={user.profileImageUrl} alt="" />
        </div>
        <h3>{user.name}</h3>
        <h5>{user.location}</h5>
        {/* conditionally render a data */}
        {user.age > 18 ? <h6>Adult</h6> : <h6>Minor</h6>}
    </div>
  )
}

export default UserCard