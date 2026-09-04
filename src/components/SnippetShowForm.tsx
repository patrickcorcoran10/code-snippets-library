"use client"

import type { Snippet } from "@prisma/client";
import Editor from '@monaco-editor/react';

interface SnippetShowFormProps {
    snippet: Snippet
}

export default function SnippetShowForm({snippet}:SnippetShowFormProps ) {
    return (
        <Editor
            height="40vh"
            theme="vs-dark"
            language={snippet.language}
            defaultValue={snippet.code}
            options={{ minimap: { enabled: false }, readOnly: true }}
        />
    )
}