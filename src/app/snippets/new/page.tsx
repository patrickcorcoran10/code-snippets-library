'use client'

import { useActionState, startTransition, useState } from 'react'
import { createSnippet } from '@/actions';
import Editor from "@monaco-editor/react";
import LanguageDropdown from '@/components/LanguageDropdown';

const monacoLanguageIds: Record<string, string> = {
  HTML: 'html',
  JavaScript: 'javascript',
  CSS: 'css',
  JSON: 'json',
  SCSS: 'scss',
  Markdown: 'markdown',
};

export default function SnippetCreatePage() {

  const [formState, action] = useActionState(createSnippet, {message: ''});
  const [codeValue, setCodeValue] = useState('// some code')
  const [languageData, setLanguageData] = useState<string>('');

  const handleLanguageStateChange = (data: string) => {
    setLanguageData(data);
  };

  const editorLanguage = monacoLanguageIds[languageData] ?? 'plaintext';

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    startTransition(() => {
      action(formData);
    });
  }

  return (
  <form className="" onSubmit={handleSubmit} action={action}> 
    <h3 className="font-bold m-3">Create a Snippet</h3>
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <label className="w-12 mr-5" htmlFor="title">Title</label>
        <input name="title" className="border rounded p-2 w-full" id="name"></input>
      </div>
      <div className='flex gap-4'>
        <label className="w-12 mr-5" htmlFor="language">Language</label>
        <LanguageDropdown
          onLanguageChange={handleLanguageStateChange}
        />
        <input readOnly style={{display:"none"}} name="language" value={languageData} />
      </div>
      <div className="flex gap-4">
        <label className="w-12 mr-5" htmlFor="code">Code</label>
      
        <Editor
          height="40vh"
          theme="vs-dark"
          language={editorLanguage}
          defaultValue="// some code"
          options={{minimap:{ enabled: false  }}}
          onChange={(value) => setCodeValue(value || "")}
        />
        <textarea name='code' value={codeValue} readOnly style={{display:"none"}}/>
      </div>
      {formState.message ? (
          <div className="my-2 p-2 bg-red-200 border rounded border-red-400">
            {formState.message}
          </div>
        ) : null}
      <button type="submit" className="rounded p-2 bg-blue-200">Create</button>
    </div>
  </form>
  )
}