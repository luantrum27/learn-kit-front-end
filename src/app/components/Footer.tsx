import React, { memo } from 'react'
import { FaFacebookF, FaTwitter, FaInstagramSquare, FaYoutube } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'

function Footer() {
  return (
    <footer className="py-[100px] bg-graphite relative">
      <div className="max-w-[1140px] mx-auto md:px-[20px] px-[10px]">
        <div className='flex lg:flex-row flex-col lg:justify-normal items-center justify-center gap-16'>
          <div className='lg:basis-1/4 basis-full'>
            <div className='w-[167px]'><img className='w-full object-cover' src="/images/logo_footer.png" alt="Logo footer" /></div>
            <p className='text-white my-8'>Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
            <ul className='flex items-center gap-4 sm:flex-nowrap flex-wrap'>
              <li className='w-[40px] h-[40px] rounded-full flex justify-center items-center bg-green-300 bg-opacity-25'>
                <FaFacebookF color='#03B97C' />
              </li>
              <li className='w-[40px] h-[40px] rounded-full flex justify-center items-center bg-green-300 bg-opacity-25'>
                <FaTwitter color='#03B97C' />
              </li>
              <li className='w-[40px] h-[40px] rounded-full flex justify-center items-center bg-green-300 bg-opacity-25'>
                <FaInstagramSquare color='#03B97C' />
              </li>
              <li className='w-[40px] h-[40px] rounded-full flex justify-center items-center bg-green-300 bg-opacity-25'>
                <FaYoutube color='#03B97C' />
              </li>
            </ul>
          </div>
          <div className='lg:basis-1/4 basis-full lg:items-start items-center flex flex-col gap-3'>
            <p className='text-white text-lg font-semibold'>Quick Links</p>
            <div className='w-[100px] h-[2px] bg-green-300 my-2 lg:mx-0 mt-auto'></div>
            <p className='text-white'>About Us</p>
            <p className='text-white'>Courses</p>
            <p className='text-white'>Teacher</p>
            <p className='text-white'>Pricing</p>
            <p className='text-white'>Contact</p>
          </div>
          <div className='lg:basis-1/4 basis-full lg:items-start items-center flex flex-col gap-3'>
            <p className='text-white text-lg font-semibold'>Useful Links</p>
            <div className='w-[100px] h-[2px] bg-green-300 my-2'></div>
            <p className='text-white'>Privacy Policy</p>
            <p className='text-white'>Terms and Conditions</p>
            <p className='text-white'>Disclaimer</p>
            <p className='text-white'>Support</p>
            <p className='text-white'>FAQ</p>
          </div>
          <div className='lg:basis-1/4 basis-full lg:items-start items-center flex flex-col gap-3'>
            <p className='text-white text-lg font-semibold'>Stay Connected</p>
            <div className='w-[100px] h-[2px] bg-green-300 my-2'></div>
            <div className=' flex md:flex-row md:items-center gap-2 flex-col justify-center items-center'>
              <input type="email" className='ct-input h-[54px] max-w-[220px] px-8 rounded-md py-4 text-[#8D8C9B]' placeholder='Enter your email' />
              <button className="ct-btn h-[54px] bg-green-300 text-white px-6 py-3 rounded-md">Send</button>
            </div>
            <div className='flex flex-col gap-4 mt-[20px]'>
              <div className='flex flex-row items-center gap-2'>
                <IoLocationSharp size={24} color='#03B97C' />
                <p className='text-white'>Jl. Sunset Road No.815, Kuta</p>
              </div>
              <div className='flex flex-row items-center gap-2'>
                <MdEmail size={24} color='#03B97C' />
                <p className='text-white'>hoangtheluan2016@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full h-[1px] bg-[#152E50] mx-auto my-6'></div>
        <p className='text-white text-center'>Copyright © 2021. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default memo(Footer)