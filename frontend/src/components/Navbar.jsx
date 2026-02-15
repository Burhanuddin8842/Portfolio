import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const Navbar = () => {
  return (
    <nav className="h-[7vh] border-b-[0.01px] border-white flex items-center px-4">
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-3 items-center">
          <img src="/Me.webp" alt="" className="h-[5vh] rounded" />
          <p className="text-bold text-2xl text-white font-bold">Burhanuddin AliAsghar</p>
        </div>
        <div className="flex gap-6 px-5">
          <Link smooth to="#home" className="text-white hover:text-gray-300">Home</Link>
          <Link smooth to="#about" className="text-white hover:text-gray-300">About</Link>
          <Link smooth to="#projects" className="text-white hover:text-gray-300">Projects</Link>
          <Link smooth to="#contact" className="text-white hover:text-gray-300">Contact</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar