import React from 'react'
import Link from 'next/link'

function Submenu() {
  return (
    <div>
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
            <h1 className="text-lg font-bold text-slate-950">Eco Power</h1>
            <div className="flex space-x-4">
                <Link href="#" className="text-black">Destaques</Link>
                <Link href="#" className="text-black">Compare</Link>
                <Link href="#" className="text-black">Acessórios</Link>
                <Link href="#" className="text-black">Gallery</Link>
            </div>
        </div>
    </div>
  )
}

export default Submenu
