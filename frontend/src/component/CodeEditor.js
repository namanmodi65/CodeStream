import React, { useEffect, useRef } from 'react';
import './CodeEditor.css'
import Codemirror from 'codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/python/python'
import 'codemirror/theme/dracula.css'
import 'codemirror/addon/edit/closetag'
import 'codemirror/addon/edit/closebrackets'

function CodeEditor() {
  const editorRef = useRef(null);
    useEffect(() => {
      // async function init(){
      //   Codemirror.fromTextArea(document.getElementById('realtimeEditor'),{
      //     mode :{name:'javascrip',json:true},
      //     theme :'dracula',
      //     autoCloseTags:true,
      //     autoCloseBrackets:true,
      //     lineNumbers:true
      //   })
      // }
      // init()

      if (!editorRef.current) {
        // Initialize CodeMirror only if it hasn't been initialized yet
        editorRef.current = Codemirror.fromTextArea(document.getElementById('realtimeEditor'), {
          mode: { name: '', json: true },
          theme: 'dracula',
          autoCloseTags: true,
          autoCloseBrackets: true,
          lineNumbers: true,
        });
      }
      
    }, [])
    

  return <textarea id='realtimeEditor'></textarea>
}

export default CodeEditor
