import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='w-[100vw] h-[9vh] bg-black text-white flex items-center fixed justify-center gap-5 bg-opacity-100 z-[100]'>
      
      <div className=''>
        <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=228,fit=crop,q=95/Yyv2WR90PyhOLWlB/screenshot-2024-04-07-at-11.04.10a-pm-YbNa6NljoPfnzwQE.png" alt="logo" width='110px'  height="80px" className='text-sm'/>
      </div>

      <div className='flex gap-5 text-lg'>
        <NavLink>Home</NavLink>
      
      <NavLink>Pre Register</NavLink>
     
      <NavLink>For Users</NavLink>
    
      <NavLink>For Business Owners</NavLink>
      
      <NavLink>Contact Us</NavLink>
    
      <NavLink>Services</NavLink>
 
      <NavLink>Legality</NavLink>
        </div>
    </div>
  )
}

export default Navbar
