"use server";

import {db} from '@/db'
import { redirect } from 'next/navigation';
import {revalidatePath} from 'next/cache'

export async function editSnippet(id: number, code: string  ) {
    await db.snippet.update({
        where: {id},
        data: { code }
    });
    revalidatePath(`/snippets/${id}`)
    redirect(`/snippets/${id}`)
}

export async function deleteSnippet(id:number) {
    await db.snippet.delete({
        where: {id}
    })
    revalidatePath('/')
    redirect('/')
}

export async function createSnippet(formState:{message:string}, formData: FormData) {
    // This needs to be a server action
    // 'use server';

    try {

    
    // Check if input is valid
    const title = formData.get('title');
    const code = formData.get('code');
    const language = formData.get('language')

    if (typeof title !== "string" || title.length< 3) {
        return {
            message: "Title must be longer"
        }
    }
    if (typeof code !== "string" || code.length < 15) {
        return {
            message: "Code Snippet must be longer"
        }
    }
    if (typeof language !== "string" || language.length === 0) {
        return {
            message: "Please select a language"
        }
    }

    // take input and create a record in the db

   await db.snippet.create({
      data: {
        title,
        language,
        code
      }
    })

    } catch(err: unknown) {
        if (err instanceof Error) {
            return {
                message: err.message
            }
        } else {
            return {
                message: "Something went wrong..."
            }
        }
    }
    revalidatePath('/')
     // after submit, take user to home page/root
    redirect('/')

    
  
  }