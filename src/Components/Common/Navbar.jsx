import React, { useState } from 'react'
import navbarLogo from '../../assets/navbarLogo.png'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross1 } from 'react-icons/rx'

const commonTailwind = 'border-b-2 w-fit whitespace-nowrap border-transparent hover:text-yellow-300 hover:border-yellow-300 hover:cursor-pointer'

const navbarLinks = [
  {
    text: 'Home',
    link: '/',
  },
  {
    text: 'Pre Register',
    link: '/pre-register',
  },
  {
    text: 'For Users',
    link: '/for-users',
  },
  {
    text: 'For Business Owners',
    link: '/for-business-owners',
  },
  {
    text: 'Contact Us',
    link: '/contact',
  },
  {
    text: 'Services',
    link: '/services',
  }
]

const navbarDropDownLinks = [
  {
    text: 'Privacy Policy App',
    link: '/privacy-policy-app',
  },
  {
    text: 'Privacy Policy Website',
    link: '/privacy-policy-website',
  },
  {
    text: 'Terms and Conditions',
    link: '/terms-and-conditions',
  },
  {
    text: 'Refund Policy',
    link: '/refund-policy',
  },
]


const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='fixed w-full z-10  top-0 h-18 flex flex-col items-center bg-black'>
      <div className='relative md:max-w-screen-xl w-full  text-white flex justify-between md:justify-start items-center md:gap-6 text-lg px-7'>
        <NavLink to='/'>
          <img src={navbarLogo} className='w-28 h-auto' alt='navbarLogo' ></img>
        </NavLink>
        {open ?
          <RxCross1 className='text-white md:hidden' onClick={() => setOpen(open => !open)} /> :
          <GiHamburgerMenu className='text-white md:hidden' onClick={() => setOpen(open => !open)} />

        }

        {/* mobile view */}
        <div className={`absolute top-[100%] left-0 px-7 w-full transition-all duration-3000 ease-in-out bg-black  flex-grow md:hidden flex flex-col items-end gap-8  ${open ? 'h-fit py-5' : 'h-0 overflow-hidden'}`}>
          {
            navbarLinks.map((navbarLink, index) => {
              return (
                <NavLink
                  key={index}
                  to={navbarLink.link}
                  className={({ isActive }) =>
                    `${commonTailwind} ${isActive ? 'text-yellow-300 border-yellow-300' : ''
                    }`
                  }
                >
                  {navbarLink.text}
                </NavLink>
              )
            })
          }
          <div className={` group/legality flex `}>
            <div className={` bg-black flex flex-col items-end gap-8 rounded-md `}>
              <NavLink to='/legality' className={({ isActive }) =>
                `${commonTailwind} ${isActive ? 'text-yellow-300 border-yellow-300' : ''
                }`
              }>Legality</NavLink>
              {
                navbarDropDownLinks.map((navbarDropDownLinks, index) => {
                  return (
                    <NavLink
                      key={index}
                      to={navbarDropDownLinks.link}
                      className={({ isActive }) =>
                        `${commonTailwind} mr-10 ${isActive ? 'text-yellow-300 border-yellow-300' : ''
                        }`
                      }
                    >
                      {navbarDropDownLinks.text}
                    </NavLink>
                  )
                })
              }
            </div>
          </div>
        </div>



        {/* destop view */}
        <div className='flex-grow hidden md:flex gap-8 h-18 '>
          {
            navbarLinks.map((navbarLink, index) => {
              return (
                <NavLink
                  key={index}
                  to={navbarLink.link}
                  className={({ isActive }) =>
                    `${commonTailwind} ${isActive ? 'text-yellow-300 border-yellow-300' : ''
                    }`
                  }
                >
                  {navbarLink.text}
                </NavLink>
              )
            })
          }
          <div className={`relative group/legality hidden md:block`}>
            <div className={`absolute hidden  top-[99%] bg-black group-hover/legality:flex flex-col p-5 gap-2 rounded-md `}>
              {
                navbarDropDownLinks.map((navbarDropDownLinks, index) => {
                  return (
                    <NavLink
                      key={index}
                      to={navbarDropDownLinks.link}
                      className={({ isActive }) =>
                        `${commonTailwind} ${isActive ? 'text-yellow-300 border-yellow-300' : ''
                        }`
                      }
                    >
                      {navbarDropDownLinks.text}
                    </NavLink>
                  )
                })
              }
            </div>
            <NavLink to='/legality' className={({ isActive }) =>
              `${commonTailwind} ${isActive ? 'text-yellow-300 border-yellow-300' : ''
              }`
            }>Legality</NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar