import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
    <header className='font-bold text-3xl bg-gray-800 flex justify-center text-center gap-10 p-6 text-white'>
     <Link href="about" className='bg-red-600 p-3 duration-300 hover:bg-blue-600'>About</Link>
     <Link href="contact" className='bg-red-600 p-3 duration-300 hover:bg-blue-600'>Contact us </Link>
     <Link href="footer" className='bg-red-600 p-3 duration-300 hover:bg-blue-600'>Footer</Link>
    </header>
    </>
  )
}

export default Navbar