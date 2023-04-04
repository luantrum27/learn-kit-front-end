import React from 'react'
import CardCourse from './CardCourse'

function OurCourses() {
    return (
        <section className="w-full py-[100px] md:px-[20px] px-[10px]">
            <div className="max-w-[1140px] mx-auto">
                <div className="flex lg:flex-row flex-col">
                    <div className="basis-1/2">
                        <p className="text-green-300 tracking-wider font-semibold text-center lg:text-left">Our Courses</p>
                        <h1 className="tracking-wider font-bold text-graphite text-3xl text-center lg:text-left">Choose Your Courses</h1>
                    </div>
                    <div className="basis-1/2">
                        <p className="text-[#8D8C9B] text-center lg:text-left lg:py-0 py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                    </div>
                </div>
                <div className='flex flex-row items-center justify-center flex-wrap gap-6 my-8'>
                    {
                        [1, 2, 3, 4, 5, 6].map(item => (
                            <CardCourse key={item} />
                        ))
                    }
                </div>
                {/* <div className="w-[100vw] relative left-[calc(-50vw_+_50%)]">
                    <div className='max-w-[1140px] mx-auto flex flex-row items-center justify-center flex-wrap gap-6 my-8'>
                        {
                            [1, 2, 3, 4, 5, 6].map(item => (
                                <CardCourse key={item} />
                            ))
                        }
                    </div>
                </div> */}
            </div>
        </section >
    )
}

export default OurCourses