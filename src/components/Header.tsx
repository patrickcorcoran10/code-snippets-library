"use client"

import {usePathname} from 'next/navigation';
import Link from 'next/link'

export default function Header() {
    const pathname=  usePathname();

    const isRoot = pathname === '/'
    return (
    <div className='flex m-2 justify-between items-center'>
        <Link href="/" className="border p-2 rounded">
            <h1 className="text-xl font-bold">Snippets</h1>
        </Link>
        {isRoot && (
            <Link className="border p-2 rounded" href="/snippets/new">Add Snippet</Link>
        )}
      </div>
    )
}