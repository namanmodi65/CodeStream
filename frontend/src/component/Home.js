import React from 'react'
import { useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    const [roomId, setRoomId] = useState('')
    const [userName, setUserName] = useState('')
    const createNewRoom=(e)=>{
        e.preventDefault();
        const id = uuidv4()
        setRoomId(id)
        // console.log(id)
        toast.success("Created a new room")
      }
      
      const joinRoom=(e)=>{
      e.preventDefault();
      if(roomId === "" || userName === ""){
        toast.error("Room Id and username is required")
        return;
      }
        navigate(`/editor/${roomId}`, {
          state: { userName }
        });
    }

    const handleInputEnter=(e)=>{
      // console.log(e.code)
      if(e.code === "Enter"){
        joinRoom();
        return ;
      }
    }

  return (
    <div className='HomeMain'>
    <div>
      <Toaster position="top-right" toastOptions={
        {
        success:{
          theme:{
            primary: "#4aed88"
          }
        }
        ,
        error:{
          theme:{
            primary: "#4aed88"
          }
        }
        }
      } ></Toaster>
    </div>

    <div className="container">
        <h1 className="name">CodeStream</h1>
        <form id="connectForm">
            <label htmlFor="roomId">Room ID:</label>
            <input type="text" onChange={(e)=> setRoomId(e.target.value)} id="roomId" name="roomId" value={roomId}  placeholder="Enter Room ID" onKeyUp={handleInputEnter} />

            <label htmlFor="userName">User Name:</label>
            <input type="text" onChange={(e)=> setUserName(e.target.value)} id="userName" name="userName" value={userName}  placeholder="Enter Your Name" onKeyUp={handleInputEnter}/>

            <button  onClick={joinRoom} >Connect</button>

            <p>If you don't have invite then create <Link to='/' className='link' onClick={createNewRoom}> new room </Link></p>
        </form>
        <div id="result"></div>
    </div>
    </div>
  )
}

export default Home