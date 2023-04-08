import React, { memo } from 'react'
import { BsPeople, BsBook } from 'react-icons/bs';
import { FaMedal } from 'react-icons/fa';
import { TbNetwork } from 'react-icons/tb';
import Testimonial from './Testimonial';


function Testimonials() {
    return (
        <section className='w-full py-[100px] md:px-[20px] px-[10px] bg-[#F7F8F9]'>
            <div className="max-w-[1140px] mx-auto">
                <div>
                    <p className="text-green-300 tracking-wider font-semibold text-center">Testimonials</p>
                    <h1 className="tracking-wider font-bold text-graphite text-3xl text-center my-4">What Did Our Students Say About Us?</h1>
                    <div className="max-w-[680px] mx-auto">
                        <p className="text-[#8D8C9B] text-center lg:py-0 py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                </div>
                <div className='flex lg:flex-row flex-col justify-center items-center gap-8 mt-8'>
                    <Testimonial />
                    <Testimonial />
                    <Testimonial />
                </div>
                <div className='flex flex-row justify-around items-start mt-[100px] gap-10 flex-wrap'>
                    <div className='w-[240px] flex flex-row items-center gap-6'>
                        <div className='w-[60px] h-[60px] rounded-full bg-[#E6E5FF] flex justify-center items-center'>
                            <BsPeople color='#03B97C' size={24} />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h2 className='text-graphite font-bold text-3xl uppercase'>1.250 <span className='text-green-300 font-bold'>+</span></h2>
                            <p className='text-[#8B8A99] font-semibold'>Activate Students
                            </p>
                        </div>
                    </div>
                    <div className='w-[240px] flex flex-row items-center gap-6'>
                        <div className='w-[60px] h-[60px] rounded-full bg-green-50 flex justify-center items-center'>
                            <BsBook color='#03B97C' size={24} />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h2 className='text-graphite font-bold text-3xl uppercase'>60 <span className='text-green-300 font-bold'>+</span></h2>
                            <p className='text-[#8B8A99] font-semibold'>Interactive Courses
                            </p>
                        </div>
                    </div>
                    <div className='w-[240px] flex flex-row items-center gap-6'>
                        <div className='w-[60px] h-[60px] rounded-full bg-[#FFF4DF] flex justify-center items-center'>
                            <FaMedal color='#FFB830' size={24} />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h2 className='text-graphite font-bold text-3xl uppercase'>3.210 <span className='text-[#FFB830] font-bold'>+</span></h2>
                            <p className='text-[#8B8A99] font-semibold'>Graduate Students
                            </p>
                        </div>
                    </div>
                    <div className='w-[240px] flex flex-row items-center gap-6'>
                        <div className='w-[60px] h-[60px] rounded-full bg-[#DFF4FF] flex justify-center items-center'>
                            <TbNetwork color='#3AB5F6' size={24} />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h2 className='text-graphite font-bold text-3xl uppercase'>30 <span className='text-[#3AB5F6] font-bold'>+</span></h2>
                            <p className='text-[#8B8A99] font-semibold'>Certified Teachers
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default memo(Testimonials)