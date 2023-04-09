import React from 'react'
import { AiOutlineUser, AiTwotoneCalendar } from 'react-icons/ai'
import { RxDoubleArrowRight } from 'react-icons/rx'

function InformationCourse() {
    return (
        <section className="bg-[url('https://ecrft.flexitheme.xyz/wp-content/uploads/2022/12/young-latin-woman-in-black-headphones-teaching-english-online.jpg')] h-[306px] bg-cover bg-center bg-no-repeat relative">
            <div className='absolute top-0 bottom-0 right-0 left-0 bg-graphite bg-opacity-70'></div>
            <div className='relative z-10 flex flex-col items-center justify-center h-full'>
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-row items-center justify-center gap-4'>
                        <div className="bg-green-50 px-4 py-2 rounded-full"><p className="text-green-300">Development</p></div>
                        <div className="bg-green-50 px-4 py-2 rounded-full"><p className="text-green-300">Design</p></div>
                    </div>
                    <h1 className='text-white text-center text-4xl font-bold'>PHP Beginners – Become a PHP Master</h1>
                    <div className='text-white flex flex-row items-center justify-center font-semibold'><AiTwotoneCalendar size={24} /> 12 week <RxDoubleArrowRight size={24} className='mx-3' /> 3 Lessons <AiOutlineUser size={24} className='mx-3' /> 56 Enrolled </div>
                </div>
            </div>
        </section>
    )
}

export default InformationCourse