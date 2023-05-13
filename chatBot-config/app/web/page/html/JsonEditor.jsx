import React, {useRef} from 'react'
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';

export default function JsonEditor(props){
  console.log(props.data,'data123')
  const editorRef = useRef(null);

  //   loader.config({
  //     paths:{
  //       vs:'https://lib.baomitu.com/monaco-editor/0.28.1/min/vs'
  //     }
  //   })
  const handleEditorDidMount = (editor)=>{
    editorRef.current = editor;
  }
  return <div>{JSON.stringify(props.data)}</div>
  //   return <Editor
  //     height="90vh"
  //     defaultLanguage="json"
  //     defaultValue={{text:'123'}}
  //     onMount={handleEditorDidMount}
  //   />
//   return <Editor
//     height="100%"
//     width="100%"
//     defaultLanguage="json"
//     defaultValue={props.data}
//     value={props.data}
//     onChange={props.onChange}
//     onMount={handleEditorDidMount}
//   />
}