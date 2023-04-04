import Image from 'next/image'
import React from 'react'
import { AiFillPhone } from 'react-icons/ai'
import { BsChevronDown } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa'

function Navbar() {
    return (
        <nav className='h-[100px] w-full px-[20px]'>
            <div className='flex flex-row gap-2 items-center justify-between max-w-[1280px] bg-white h-full mx-auto'>
                <div className='basis-1/6' >
                    <div className='w-[125px] h-[40px]'>
                        <img src="/images/logo.png" alt="Logo" className='w-full' />
                    </div>
                </div >
                <ul className='basis-2/3 lg:flex lg:flex-row lg:justify-around hidden'>
                    <li className='ct-text-category ct-active'>Home</li>
                    <li className='ct-text-category'>About us</li>
                    <li className='ct-text-category'>Courses <BsChevronDown /></li>
                    <li className='ct-text-category'>Instractor</li>
                    <li className='ct-text-category'>Blog <BsChevronDown /></li>
                    <li className='ct-text-category'>Contact</li>
                </ul>
                <div className='lg:basis-1/6 flex flex-row items-center justify-end'>
                    <div className='sm:flex sm:flex-row sm:items-center hidden lg:hidden'>
                        <div className='w-[43px] h-[43px] bg-green-300 rounded-full flex justify-center items-center'>
                            <AiFillPhone color='#fff' size={24} />
                        </div>
                        <p className='mx-6 font-semibold'>(+62)81 414 257</p>
                    </div>
                    <button className='ct-btn bg-green-300 w-[145px] h-[44px] text-white rounded-sm lg:flex lg:items-center lg:justify-center hidden'>Register Now</button>
                </div>
                <div className='w-[30px] h-[30px] rounded-sm bg-green-50 flex lg:hidden items-center justify-center'>
                    <FaBars size={24} color='#03B97C' />
                </div>
            </div >
        </nav >
    )
}

export default Navbar