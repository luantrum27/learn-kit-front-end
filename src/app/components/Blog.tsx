import React, { memo } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

function Blog() {
    return (
        <div className='w-[360px] bg-white rounded-md px-5 py-5 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] cursor-pointer'>
            <div className="rounded-md">
                <img className="rounded-md" src="/images/card_1.jpg" alt="blog" />
            </div>
            <div className="max-w-[135px] bg-green-50 px-4 py-2 rounded-full"><p className="text-green-300">Uncategorized</p></div>
            <h1 className="text-graphite font-bold text-xl my-4">Let’s Know How Skillup Works Fast and Secure?</h1>
            <p className='text-[#8D8C9B] text-sm'>December 11, 2022</p>
            <p className="text-[#8D8C9B] my-4 line-clamp-3">Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            </p>
            <button className='ct-btn bg-green-300 text-white px-8 py-3 rounded-md flex items-center gap-3'>Read More <AiOutlineArrowRight /></button>
        </div>
    )
}

export default memo(Blog)