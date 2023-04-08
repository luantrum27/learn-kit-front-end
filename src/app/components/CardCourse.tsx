import React, { memo } from 'react';
import { RiTimerFill } from 'react-icons/ri';
import { BsFillCameraReelsFill } from 'react-icons/bs';
import { AiOutlineAreaChart, AiFillStar } from 'react-icons/ai';

function CardCourse() {
    return (
        <div className="max-w-[360px] mx-0 sm:mx-0 bg-white px-5 py-5 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] cursor-pointer">
            <div className="rounded-md">
                <img className="rounded-md" src="/images/card_1.jpg" alt="card image" />
            </div>
            <div className="flex flex-row min-[320px]:justify-between justify-center items-center gap-x-4 my-4 flex-wrap">
                <div className="bg-green-50 px-4 py-2 rounded-full"><p className="text-green-300">Development</p></div>
                <p className="text-[#8D8C9B]">36 Enrolled</p>
            </div>
            <h1 className="text-graphite font-bold text-xl">Full Web Designing Course With 30 Web Template</h1>
            <p className="text-[#8D8C9B] my-4 line-clamp-3">Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            </p>
            <div className="flex flex-row items-center gap-3 flex-wrap">
                <div className="flex flex-row items-center gap-1">
                    <RiTimerFill color='#03B97C' />
                    <p className="text-[#8D8C9B]">2 Week</p>
                </div>
                <div className="flex flex-row items-center gap-3">
                    <BsFillCameraReelsFill color='#03B97C' />
                    <p className="text-[#8D8C9B]">2 Week</p>
                </div>
                <div className="flex flex-row items-center gap-3">
                    <AiOutlineAreaChart color='#03B97C' />
                    <p className="text-[#8D8C9B]">2 Week</p>
                </div>
            </div>
            <div className='w-[95%] h-[1px] bg-gray-300 mx-auto my-6'></div>
            <div className='flex flex-row min-[320px]:justify-between justify-center flex-wrap gap-x-6 items-center'>
                <div>
                    <p className='text-green-300 font-bold text-lg'>$120/<span className="text-[#8D8C9B] font-normal text-base">Lifetime</span> </p>
                </div>
                <div className='flex flex-row items-center gap-2'>
                    <p className='text-[#8D8C9B]'>4.8</p>
                    <div className='flex flex-row'>
                        <AiFillStar color='#03B97C' />
                        <AiFillStar color='#03B97C' />
                        <AiFillStar color='#03B97C' />
                        <AiFillStar color='#03B97C' />
                        <AiFillStar color='#03B97C' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(CardCourse)