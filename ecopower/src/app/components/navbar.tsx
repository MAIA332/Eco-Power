import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
  return (
    <div>
      <header className="bg-white shadow">
            <div className='absolute mt-2' id='logo'>
                <Image src="/100x40.svg" alt="Samsung Logo" className="h-10 " width={100} height={100}/>
            </div>
            
            <div className="container mx-auto px-24 py-4 flex justify-start items-center">     
                <nav className="flex space-x-4">
                    <Link href="#" className="text-black"></Link>
                    <Link href="#" className="text-black">Home</Link>
                    <Link href="#" className="text-black">Sobre</Link>
                </nav>
            </div>
        </header>
    </div>
  )
}

export default Navbar
