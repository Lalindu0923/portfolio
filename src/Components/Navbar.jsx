import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation(); //Current location or the path 

  return (
    <div className=' p-4 text-white flex justify-between items-center'> 
      <nav className='flex space-x-10 p-3 fixed bg-[#1a4f5f]  top-0 left-0 w-full  text-white shadow-md z-50 rounded-lg'>

        <Link 
          to="/" 
          className={`px-4 py-2 border-2 border-white rounded transition duration-300 
            hover:bg-white hover:text-black 
            ${location.pathname === '/' ? 'bg-[#FF0000]' : ''}`}
        >
          Home
        </Link>

        <Link 
          to="/projects" 
          className={`px-4 py-2 border-2 border-white rounded transition duration-300 
            hover:bg-white hover:text-black 
            ${location.pathname === '/projects' ? 'bg-[#FF0000]' : ''}`}
        >
          Projects
        </Link>

        <Link 
          to="/designs" 
          className={`px-4 py-2 border-2 border-white rounded transition duration-300 
            hover:bg-white hover:text-black 
            ${location.pathname === '/designs' ? 'bg-[#FF0000]' : ''}`}
        >
          Designs
        </Link>

      </nav>
    </div>
  )
}

export default Navbar;
