import React, { memo } from 'react'

function Testimonial() {
    return (
        <div className='lg:max-w-[360px] bg-white px-[20px] py-[20px] flex flex-col gap-4 rounded-md cursor-pointer'>
            <div>
                <p className="text-[#8D8C9B] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
            <div className='gap-4 rounded-md flex items-center justify-center'>
                <div className='w-[60px] h-[60px] rounded-full'>
                    <img className='w-full h-full rounded-full object-cover' src="/images/avt_1.jpg" alt="Avatar" />
                </div>
                <div className='flex flex-col'>
                    <h2 className='text-graphite font-bold text-lg uppercase'>Adam Riky</h2>
                    <p className='text-[#8B8A99] font-semibold'>Developer</p>
                </div>
            </div>
        </div>
    )
}

export default memo(Testimonial)