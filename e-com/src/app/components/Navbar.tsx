import { UserButton } from '@clerk/nextjs'
import {  currentUser } from '@clerk/nextjs/server'
import Link from 'next/link'
import React from 'react'

async function Navbar() {
    const userId = await currentUser()
    
  return (
    
    <div className='bg-cyan-950 rounded-b-xl'>
      <ul className='flex justify-between p-4 p-6'>
        <div>
            <Link href="/">
            <li>Home</li></Link>
        </div>
        <div className='flex items-center'>
        <Link href="/client">
        <li>Client page</li></Link>

     
        </div>
       
        <div className='flex gap-6 items-center'>
        {!userId ?(
            <>
             
            <Link href="/sign-in">
            <li>LogIn</li>
            </Link>
            <Link href="/sign-up">
            <li>SigUp</li>
            </Link>
            </>):(
                <>
                <Link href="/profile">
<li>profile</li>
                </Link>
                
                <Link href="flex items-center">
                <UserButton/></Link>
                </>
            )}

        </div>
      </ul>
    </div>
  )
}

export default Navbar
