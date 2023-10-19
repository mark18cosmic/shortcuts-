'use client'

import React from 'react'
import { MdOutlineDarkMode } from "react-icons/md"
import Link from 'next/link'


const Navbar = () => {

  function toggleTheme() {
    document.documentElement.classList.toggle("dark")
  }

  function idDarkModeActive() {
    
  }
  
  return (
    <header className="w-full flex h-14 shadow-xl dark:bg-zinc-950 bg-stone-300 p-3">
      <div className="justify-between w-full h-full item-center align-middle">
        <Link href="/" className='mx-3 font-extrabold text-3xl dark:text-white '>
          Shortcut+
        </Link>
      </div>
      <div className='mr-4'>
        <MdOutlineDarkMode size={30} onClick={toggleTheme}/>
      </div>
    </header>
  )
}

export default Navbar