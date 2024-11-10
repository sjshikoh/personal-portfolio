import React from 'react'
import Link from 'next/link';

const Footer = () => {
  return (
    
      <footer className=' h-[85px] bg-[#FFFFFF] mt-[320px] drop-shadow-[0_1px_2px_rgba(117,195,16,0.5)] '>
      <div className='flex items-center justify-between h-full max-w-7xl px-4 sm:px-6 md:px-8 lg:mx-auto xl:px-4'>

    <div className='flex gap-2 text-[24px]'>
      <h1 className='text-[] font-bold text-[#B727A4]'>Shaista</h1>
      <span className='text-black font-bold'>Portfolio</span>
    </div>
    <nav className='h-[45px] '>
      <ul className='flex h-full items-center justify-between gap-[46px] text-[20px] font-medium text-[#722067] hover:text-[#8b6c87]'>
    <Link href="/"><li>Home</li></Link>
    <Link href="about"><li>About</li></Link>
    <Link href="contact"><li>Contact</li></Link>
      </ul>
    </nav>
      </div>
    </footer>
  
  )
}


export default Footer

