'use client';

// import type {Snippet} from "@prisma/client"
import Editor from '@monaco-editor/react'
// import {useState} from 'react'
// import { createSnippet } from "@/actions";

interface SnippetEditFormProps {
    snippet: Snippet
}




export default function SnippetNewForm() {

    // const [formState, action] = useActionState(createSnippet, {message: ''});

    // function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    // event.preventDefault();
    // const formData = new FormData(event.currentTarget);
    // startTransition(() => {
    //     action(formData);
    // });
    // }
    // const [code, setCode] = useState(snippet.code)

    // const handleEditorChange = (value: string = '') => {
    //     setCode(value)
       
    // }

    // const createSnippetAction = createSnippet.bind(null, snippet.id, code)

   
   function handleEditorChange(value: string, event: React.FormEvent<HTMLFormElement>) {
    
    console.log('here is the current model value:', event, value);
  }

  return (
    <Editor
      height="40vh"
      theme="vs-dark"
      defaultLanguage="javascript"
      defaultValue="// add snippet"
      options={{minimap:{ enabled: false  }}}
      onChange={handleEditorChange}
    />
  );
}