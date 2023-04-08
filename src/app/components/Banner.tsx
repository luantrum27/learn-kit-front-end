import { memo, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { IoIosPeople } from 'react-icons/io'

function Banner() {
    return (
        <section className="w-full bg-green-50 overflow-hidden">
            <div className="max-w-[1140px] mx-auto sm:px-[20px] px-[10px] flex flex-row gap-8 py-[100px]">
                <div
                    className="lg:basis-1/2 basis-full flex flex-col items-center lg:items-start">
                    <h1 className="text-5xl font-bold text-graphite leading-[60px] tracking-wider text-center lg:text-left">Learn New <br /><span className="text-green-300"> Languages </span> and Move Forward</h1>
                    <div className="max-w-[500px] my-8">
                        <p className="text-graphite text-center lg:text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                    </div>
                    <button className="ct-btn bg-green-300 h-[56px] px-8 text-white rounded-sm">Get Started</button>
                </div>
                <div className="basis-1/2 lg:flex hidden">
                    <div className='pt-6 relative'>
                        <img className="w-full relative z-10" src="/images/student.png" alt="student" />
                        <div className="absolute w-[400px] h-[400px] rounded-full bg-graphite top-[100px] -z-0 bg-opacity-10"></div>
                        <div className="absolute w-[450px] h-[450px] rounded-full  bg-[#E6E5FF] top-[50px] -z-0 bg-opacity-50"></div>
                        <div className='w-[212px] h-[82px] bg-white px-2 py-2 rounded-md absolute top-[130px] -left-14 z-10 flex items-center' >
                            <div className='flex flex-row gap-4 items-center'>
                                <div className='w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#DFF4FF]'>
                                    <IoIosPeople size={24} color='#3AB5F6' />
                                </div>
                                <div className=''>
                                    <h2 className='text-graphite font-bold text-2xl uppercase'>72 K</h2>
                                    <p className='text-[#8B9CCA]'>Appreciations</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-[212px] h-[82px] bg-white px-2 py-2 rounded-md absolute top-[70px] -right-5 z-0 flex items-center'>
                            <div className='flex flex-row gap-4 items-center'>
                                <div className='w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#DFF4FF]'>
                                    <IoIosPeople size={24} color='#3AB5F6' />
                                </div>
                                <div className=''>
                                    <h2 className='text-graphite font-bold text-2xl uppercase'>72 K</h2>
                                    <p className='text-[#8B9CCA]'>Appreciations</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-[212px] h-[82px] bg-white px-2 py-2 rounded-md absolute bottom-[30px] -left-14 z-10 flex items-center'>
                            <div className='flex flex-row gap-4 items-center'>
                                <div className='w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#DFF4FF]'>
                                    <IoIosPeople size={24} color='#3AB5F6' />
                                </div>
                                <div className=''>
                                    <h2 className='text-graphite font-bold text-2xl uppercase'>72 K</h2>
                                    <p className='text-[#8B9CCA]'>Courses</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-[212px] h-[82px] bg-white px-2 py-2 rounded-md absolute bottom-[80px] -right-[100px] z-10 flex items-center'>
                            <div className='flex flex-row gap-4 items-center'>
                                <div className='w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#DFF4FF]'>
                                    <IoIosPeople size={24} color='#3AB5F6' />
                                </div>
                                <div className=''>
                                    <h2 className='text-graphite font-bold text-2xl uppercase'>72 K</h2>
                                    <p className='text-[#8B9CCA]'>Countries</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default memo(Banner)

