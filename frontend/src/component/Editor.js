import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Client from './Client';
import CodeEditor from './CodeEditor';
import './Editor.css'
import { initSocket } from '../socket';

function Editor() {
  const location = useLocation();
  // const { userName } = location.state || {}; 

  const socketRef = useRef(null)
  useEffect(() => {
    const init = async()=>{
      socketRef.current = await initSocket()
      // socketRef.current.emit('ACTIONS.JOIN',{
      //   roomId,
      //   username:location.state?.username 
      // })
    }
    init()
  }, [])
  

  const [clint,setClint] = useState([
    {socketId:4,username:"naman"},
    {socketId:5,username:"yashika"}
  ])

  return <div className='MainWrap'>
    <div className='aside'>
      <div className='asideInner'>
        <div className='logo'>
          CodeStream
        </div>
        <h3>
          Connected
        </h3>

        <div className='ClientList'>
        {
          clint.map((c) => (
            <Client key={c.socketId} username={c.username} />
          ))
        }
        </div>
        <button className='copyBtn'>Copy RoomId</button>
        <button className='leaveBtn'>Leave</button>

        </div>
    </div>

    <div className='editorSide'>
      <CodeEditor/>
    </div>

  </div>
}

export default Editor;
