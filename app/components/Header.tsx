import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Header = () => {
  return (
    <div className='px-10 md:px-20 lg:px-32 py-4 flex bg-am
    bg-amber-500 text-white '>
        <nav className='flex justify-between w-full'>
          <div className="flex items-center gap-2"> 
 <Image src="/logo-1.png" alt="Logo" width={100} height={50} />

<span className='text-2xl text-blue-950 font-bold'>Web Dev Blog</span>
      </div>
           
            <ul className='flex gap-4 text-lg text-white'>
                <li className='hover:text-yellow-300'><Link href="#">Home</Link></li>
                <li><Link href="#">About</Link></li>
                <li><Link href="#">Contact</Link></li>
            </ul>
        </nav>
    </div>
  ) 
 
}

export default Header