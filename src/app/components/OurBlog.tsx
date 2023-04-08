import React, { memo } from 'react'
import Blog from './Blog'

function OurBlog() {
    return (
        <section className='w-full py-[100px] md:px-[20px] px-[10px]'>
            <div className="max-w-[1140px] mx-auto">
                <div>
                    <p className="text-green-300 tracking-wider font-semibold text-center">Our Blog</p>
                    <h1 className="tracking-wider font-bold text-graphite text-3xl text-center my-4">Latest Blog & Articles</h1>
                    <div className="max-w-[680px] mx-auto">
                        <p className="text-[#8D8C9B] text-center lg:py-0 py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                </div>
                <div className='flex flex-row items-center justify-center flex-wrap gap-6 my-8'>
                    <Blog />
                    <Blog />
                    <Blog />
                    <Blog />
                    <Blog />
                    <Blog />
                </div>
            </div>
        </section>
    )
}

export default memo(OurBlog)