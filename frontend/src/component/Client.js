import React from 'react'
import Avatar from 'react-avatar';

function Client({username,socketId}) {
    // console.log("username",username)
  return (
    <div>
    <Avatar name={username} size="50" round={'14px'} />
    <span>{username}</span>
    </div>
  )
}

export default Client