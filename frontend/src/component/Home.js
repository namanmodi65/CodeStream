import React from 'react'
import { useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';

function Home() {
    const [roomId, setRoomId] = useState('')
    const [userName, setUserName] = useState('')
    const createNewRoom=(e)=>{
        e.preventDefault();
        const id = uuidv4()
        setRoomId(id)
        console.log(id)
    }

  return (
    <>
    <div className="container">
        <h1 className="name">CodeStream</h1>
        <form id="connectForm">
            <label for="roomId">Room ID:</label>
            <input type="text" onChange={(e)=> setRoomId(e.target.value)} id="roomId" name="roomId" value={roomId} required placeholder="Enter Room ID"/>

            <label for="userName">User Name:</label>
            <input type="text" onChange={(e)=> setUserName(e.target.value)} id="userName" name="userName" value={userName} required placeholder="Enter Your Name"/>

            <button type="submit">Connect</button>

            <p>If you don't have invite then create <Link to='/' className='link' onClick={createNewRoom}> new room </Link></p>
        </form>
        <div id="result"></div>
    </div>
    </>
  )
}

export default Home