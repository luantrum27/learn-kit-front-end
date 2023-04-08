import React, { memo } from 'react'
import { MdOutlineDone } from 'react-icons/md';

function JoinWithUs() {
    return (
        <section className="w-full md:px-[20px] px-[10px]  bg-[url('https://ecrft.flexitheme.xyz/wp-content/uploads/2022/12/background.png')] bg-[#EEEDFF] py-[100px]">
            <div className="max-w-[1140px] mx-auto">
                <div className="flex lg:flex-row flex-col-reverse items-center justify-center max-w-[1140px] mx-auto gap-8">
                    <div className="basis-1/2">
                        <div className="max-w-[585px]">
                            <img className="w-full" src="/images/user_bgr.jpg" alt="background" />
                        </div>
                    </div>
                    <div className="basis-1/2">
                        <p className="text-green-300 tracking-wider font-semibold text-center lg:text-left">Join With Us</p>
                        <h1 className="tracking-wider font-bold text-graphite text-3xl text-center lg:text-left my-4">We Have The Best Instructors Available in The City</h1>
                        <p className="text-[#8D8C9B] text-center lg:text-left lg:py-0 py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                        <div className="flex flex-col gap-4 mt-6">
                            <div className=' bg-white px-5 py-2 rounded-md flex gap-4 items-center'>
                                <div className='w-[40px] h-[40px] flex-shrink-0 rounded-full flex items-center justify-center bg-[#DFF4FF]'>
                                    <MdOutlineDone size={24} color='#3AB5F6' />
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <h2 className='text-graphite font-bold text-xl uppercase'>Create Account</h2>
                                    <p className='text-[#8B9CCA]'>Lorem ipsum dolor sit amet consecte nadipiscing elit</p>
                                </div>
                            </div>
                            <div className='bg-white px-5 py-2 rounded-md flex gap-4 items-center'>
                                <div className='w-[40px] h-[40px] flex-shrink-0 rounded-full flex items-center justify-center bg-[#DFF4FF]'>
                                    <MdOutlineDone size={24} color='#3AB5F6' />
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <h2 className='text-graphite font-bold text-xl uppercase'>Book Your Seat</h2>
                                    <p className='text-[#8B9CCA]'>Lorem ipsum dolor sit amet consecte nadipiscing elit</p>
                                </div>
                            </div>
                            <div className='bg-white px-5 py-2 rounded-md flex gap-4 items-center'>
                                <div className='w-[40px] h-[40px] flex-shrink-0 rounded-full flex items-center justify-center bg-[#DFF4FF]'>
                                    <MdOutlineDone size={24} color='#3AB5F6' />
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <h2 className='text-graphite font-bold text-xl uppercase'>Learn Your Skill</h2>
                                    <p className='text-[#8B9CCA]'>Lorem ipsum dolor sit amet consecte nadipiscing elit</p>
                                </div>
                            </div>
                            <div className='bg-white px-5 py-2 rounded-md gap-4 flex items-center'>
                                <div className='w-[40px] h-[40px] flex-shrink-0 rounded-full flex items-center justify-center bg-[#DFF4FF]'>
                                    <MdOutlineDone size={24} color='#3AB5F6' />
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <h2 className='text-graphite font-bold text-xl uppercase'>Success Story</h2>
                                    <p className='text-[#8B9CCA]'>Lorem ipsum dolor sit amet consecte nadipiscing elit</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default memo(JoinWithUs)