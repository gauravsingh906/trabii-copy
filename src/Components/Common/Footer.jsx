import React from 'react'
import navbarLogo from '../../assets/navbarLogo.png'
import linkedInSvg from '../../assets/svg/linkedin.svg'
import instagramSvg from '../../assets/svg/instagram.svg'

const Footer = () => {
    return (
        <div className='bg-black/95 flex justify-center'>
            <div className='max-w-screen-xl w-screen px-20 flex py-10 justify-between'>

                <div className='text-white flex flex-col items-start gap-5'>
                    <p className='text-7xl font-bold text-gray-400 whitespace-nowrap'>Get in touch
                    </p>
                    <div className='flex flex-col gap-5 '>
                        <button className='rounded-full bg-blue-700 font-semibold text-lg py-3 px-10 hover:bg-yellow-400 hover:text-black transition-all duration-300 ease-in-out'>Contact Us</button>
                        <button className='rounded-full bg-blue-700  font-semibold text-lg py-3 px-10 hover:bg-yellow-400 hover:text-black transition-all duration-300 ease-in-out'>Help</button>
                        <div className='flex w-full justify-around px-5'>
                            <img src={linkedInSvg} className='w-5 h-auto' alt='navbarLogo' ></img>
                            <img src={instagramSvg} className='w-5 h-auto' alt='navbarLogo' ></img>
                            <img src={linkedInSvg} className='w-5 h-auto' alt='navbarLogo' ></img>
                        </div>
                    </div>
                </div>

                <div className='self-end'>

                    <img src={navbarLogo} className='w-28 h-auto' alt='navbarLogo' ></img>
                </div>

                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-2 text-right'>
                        <p className='text-xl font-bold text-gray-400 capitalize'>company</p>
                        <p className='uppercase text-white font-semibold text-xl whitespace-nowrap'> TRABII ENTERTAINMENT PRIVATE LIMITED</p>
                        <p className=' text-white font-semibold text-xl whitespace-nowrap'>IIT Delhi, Hauz Khas, New Delhi, Delhi </p>
                        <p className=' text-white font-semibold text-xl whitespace-nowrap'>110016 </p>

                    </div>
                    <div className='flex flex-col gap-2 text-right'>
                        <p className='text-xl font-bold text-gray-400'>Contacts</p>
                        <p className=' text-white font-semibold text-xl whitespace-nowrap'> +91-99718 55077</p>
                        <p className='text-white font-semibold text-xl whitespace-nowrap'>support@trabii.com</p>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer