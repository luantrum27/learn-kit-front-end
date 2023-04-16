'use client'
import Footer from '@/app/components/Footer'
import InformationCourse from '@/app/components/InformationCourse'
import Navbar from '@/app/components/Navbar'
import React, { useState } from 'react'
import { MdDone, MdKeyboardArrowUp, MdUpdate } from 'react-icons/md'
import { AiFillTag } from 'react-icons/ai'
import { FaUser, FaClock } from 'react-icons/fa'
import { TbCircleDot } from 'react-icons/tb'

function Course() {
    const [toggle, setToggle] = useState({
        indexItem: -1,
        isShow: false
    });
    return (
        <>
            <Navbar currentPage='' />
            <InformationCourse />
            <section className='w-full py-[100px]'>
                <div className='bg-white max-w-[1140px] mx-auto'>
                    <div className='flex lg:flex-row gap-8 flex-col px-[20px]'>
                        <div className='basis-2/3 border border-slate-300 px-[40px] py-[40px] rounded-md'>
                            <div>
                                <img src="/images/avt_1.jpg" alt="" />
                            </div>
                            <div className='mt-[30px] flex flex-col gap-4'>
                                <h1 className="text-graphite font-semibold text-lg">About This Course</h1>
                                <p className='text-[#8D8C9B]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <div className='mt-[30px] flex flex-col gap-4'>
                                <h1 className="text-graphite font-semibold text-lg">What You'll Learn</h1>
                                <ul className='grid md:grid-cols-2 gap-3 grid-cols-1'>
                                    <li className='flex flex-row items-center gap-3'>
                                        <div className='w-[15px] h-[15px] rounded-full bg-green-300 flex items-center justify-center'><MdDone color='#fff' /></div>
                                        <p className='text-[#8D8C9B] hover:text-green-300 transition duration-150'>Basic communication in English in everyday situations.</p>
                                    </li>
                                    <li className='flex flex-row items-center gap-3'>
                                        <div className='w-[15px] h-[15px] rounded-full bg-green-300 flex items-center justify-center'><MdDone color='#fff' /></div>
                                        <p className='text-[#8D8C9B] hover:text-green-300 transition duration-150'>Basic communication in English in everyday situations.</p>
                                    </li>
                                    <li className='flex flex-row items-center gap-3'>
                                        <div className='w-[15px] h-[15px] rounded-full bg-green-300 flex items-center justify-center'><MdDone color='#fff' /></div>
                                        <p className='text-[#8D8C9B] hover:text-green-300 transition duration-150'>Basic communication in English in everyday situations.</p>
                                    </li>
                                    <li className='flex flex-row items-center gap-3'>
                                        <div className='w-[15px] h-[15px] rounded-full bg-green-300 flex items-center justify-center'><MdDone color='#fff' /></div>
                                        <p className='text-[#8D8C9B] hover:text-green-300 transition duration-150'>Basic communication in English in everyday situations.</p>
                                    </li>
                                    <li className='flex flex-row items-center gap-3'>
                                        <div className='w-[15px] h-[15px] rounded-full bg-green-300 flex items-center justify-center'><MdDone color='#fff' /></div>
                                        <p className='text-[#8D8C9B] hover:text-green-300 transition duration-150'>Basic communication in English in everyday situations.</p>
                                    </li>
                                    <li className='flex flex-row items-center gap-3'>
                                        <div className='w-[15px] h-[15px] rounded-full bg-green-300 flex items-center justify-center'><MdDone color='#fff' /></div>
                                        <p className='text-[#8D8C9B] hover:text-green-300 transition duration-150'>Basic communication in English in everyday situations.</p>
                                    </li>
                                    <li className='flex flex-row items-center gap-3'>
                                        <div className='w-[15px] h-[15px] rounded-full bg-green-300 flex items-center justify-center'><MdDone color='#fff' /></div>
                                        <p className='text-[#8D8C9B] hover:text-green-300 transition duration-150'>Basic communication in English in everyday situations.</p>
                                    </li>
                                    <li className='flex flex-row items-center gap-3'>
                                        <div className='w-[15px] h-[15px] rounded-full bg-green-300 flex items-center justify-center'><MdDone color='#fff' /></div>
                                        <p className='text-[#8D8C9B] hover:text-green-300 transition duration-150'>Basic communication in English in everyday situations.</p>
                                    </li>
                                </ul>
                            </div>
                            <div className='my-[50px] w-full h-[1px] bg-slate-300'></div>
                            <div>
                                <div className='flex md:flex-row md:justify-between flex-col justify-center items-center '>
                                    <h1 className="text-graphite font-semibold text-lg">Curriculum</h1>
                                    <p className='text-graphite font-semibold'>26 Lesson <span className='text-[#8D8C9B]'>/ Lifetime</span></p>
                                </div>
                                <ul className='flex flex-col gap-4 mt-[30px]'>
                                    {
                                        [1, 2, 3, 4].map((item, index) => (
                                            <li onClick={() => {
                                                setToggle({
                                                    indexItem: index,
                                                    isShow: !toggle.isShow,
                                                });
                                            }} className='shadow-2xl cursor-pointer'>
                                                <div className={`px-[40px] py-[20px] ${(toggle.indexItem === index && toggle.isShow) ? 'bg-green-300' : 'bg-white'} flex flex-row items-center justify-between`}>
                                                    <h1 className={`font-semibold ${(toggle.indexItem === index && toggle.isShow) ? 'text-white' : 'text-green-300'}`}>Introduction</h1>
                                                    <MdKeyboardArrowUp color={`${(toggle.indexItem === index && toggle.isShow) ? 'white' : '#03B97C'}`} size='36' className={`cursor-pointer ${(toggle.indexItem === index && toggle.isShow) ? 'rotate-180' : 'rotate-0'}`} />
                                                </div>
                                                {
                                                    (
                                                        <div className={`px-[40px] py-[20px] ${(toggle.indexItem === index && toggle.isShow) ? 'block transition duration-200' : 'hidden'}`}>
                                                            <p className='text-[#8D8C9B] md:line-clamp-none line-clamp-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                                        </div>
                                                    )
                                                }
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className='basis-1/3 flex flex-col gap-4'>
                            <div className='px-[10px] py-[10px] border border-slate-300 rounded-md'>
                                <img src="/images/avt_2.jpg" alt="avatart" />
                            </div>
                            <div className='px-[40px] py-[40px] border border-slate-300 rounded-md'>
                                <button className='ct-btn px-[32px] py-[18px] rounded-md w-full bg-green-300 text-white'>Join Course</button>
                                <ul className='flex flex-col gap-3 mt-[20px]'>
                                    <li className='flex flex-row items-center gap-3'>
                                        <AiFillTag color='#03B97C' />
                                        <p className='text-[#8D8C9B] hover:text-green-300 transition duration-150'>Course level: Intermediate</p>
                                    </li>
                                    <li className='flex flex-row items-center gap-3'>
                                        <FaUser color='#03B97C' />
                                        <p className='text-[#8D8C9B] hover:text-green-300 transition duration-150'>Instructor: Admin
                                        </p>
                                    </li>
                                    <li className='flex flex-row items-center gap-3'>
                                        <FaClock color='#03B97C' />
                                        <p className='text-[#8D8C9B] hover:text-green-300 transition duration-150'>Duration: 22h 30m</p>
                                    </li>
                                    <li className='flex flex-row items-center gap-3'>
                                        <MdUpdate color='#03B97C' />
                                        <p className='text-[#8D8C9B] hover:text-green-300 transition duration-150'>Last Updated: May 17, 2023</p>
                                    </li>
                                </ul>
                            </div>
                            <div className='px-[40px] py-[40px] border border-slate-300 rounded-md flex flex-col'>
                                <h1 className="text-graphite font-semibold text-md">Material Includes</h1>
                                <ul className='flex flex-col gap-3 mt-[20px]'>
                                    <li className='flex flex-row items-center gap-3'>
                                        <TbCircleDot color='#03B97C' />
                                        <p className='text-[#8D8C9B] hover:text-green-300 transition duration-150'>22 hours on-demand video</p>
                                    </li>
                                    <li className='flex flex-row items-center gap-3'>
                                        <TbCircleDot color='#03B97C' />
                                        <p className='text-[#8D8C9B] hover:text-green-300 transition duration-150'>2 articles
                                        </p>
                                    </li>
                                    <li className='flex flex-row items-center gap-3'>
                                        <TbCircleDot color='#03B97C' />
                                        <p className='text-[#8D8C9B] hover:text-green-300 transition duration-150'>23 downloadable resources</p>
                                    </li>
                                    <li className='flex flex-row items-center gap-3'>
                                        <TbCircleDot color='#03B97C' />
                                        <p className='text-[#8D8C9B] hover:text-green-300 transition duration-150'>Access on mobile and TV</p>
                                    </li>
                                    <li className='flex flex-row items-center gap-3'>
                                        <TbCircleDot color='#03B97C' />
                                        <p className='text-[#8D8C9B] hover:text-green-300 transition duration-150'>
                                            Full lifetime access</p>
                                    </li>
                                    <li className='flex flex-row items-center gap-3'>
                                        <TbCircleDot color='#03B97C' />
                                        <p className='text-[#8D8C9B] hover:text-green-300 transition duration-150'>Certificate of Completion</p>
                                    </li>
                                </ul>
                            </div>
                            <div className='px-[40px] py-[40px] border border-slate-300 rounded-md flex flex-col'>
                                <h1 className="text-graphite font-semibold text-md">Requirements</h1>
                                <ul className='flex flex-col gap-3 mt-[20px]'>
                                    <li className='flex flex-row items-center gap-3'>
                                        <TbCircleDot color='#03B97C' />
                                        <p className='text-[#8D8C9B] hover:text-green-300 transition duration-150'>HTML is needed for this course</p>
                                    </li>
                                    <li className='flex flex-row items-center gap-3'>
                                        <TbCircleDot color='#03B97C' />
                                        <p className='text-[#8D8C9B] hover:text-green-300 transition duration-150'>Some JavaScript Skill
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className='px-[40px] py-[40px] border border-slate-300 rounded-md flex flex-col'>
                                <h1 className="text-graphite font-semibold text-md">Audience
                                </h1>
                                <ul className='flex flex-col gap-3 mt-[20px]'>
                                    <li className='flex flex-row items-center gap-3'>
                                        <TbCircleDot color='#03B97C' />
                                        <p className='text-[#8D8C9B] hover:text-green-300 transition duration-150'>This course is for beginners in PHP</p>
                                    </li>
                                    <li className='flex flex-row items-center gap-3'>
                                        <TbCircleDot color='#03B97C' />
                                        <p className='text-[#8D8C9B] hover:text-green-300 transition duration-150'>No programming experience
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Course