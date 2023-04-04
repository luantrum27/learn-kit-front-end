import React from 'react'
import { MdOutlineDone } from 'react-icons/md';
interface IPlain {
    title: string;
    cost: string;
    benefits: string[];
}
function PlainCard({ title, cost, benefits }: IPlain) {
    return (
        <div className="lg:w-[360px] m-w-[360px] snap-center md:px-[20px] px-[4px] py-[40px] flex flex-col justify-center cursor-pointer transition duration-400 rounded-lg border-2 lg:border-none lg:shadow-none hover:lg:bg-green-50 hover:lg:scale-110 hover:lg:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
            <h1 className="text-graphite font-bold text-xl text-center">{title}</h1>
            <div className="mt-5">
                <p className='text-green-300 font-bold text-xl text-center'>${cost}/<span className="text-[#8D8C9B] font-normal text-base">moth</span> </p>
            </div>
            <div className='w-[95%] h-[1px] bg-gray-300 mx-auto my-8'></div>
            <ul className="flex flex-col items-center lg:gap-y-4 gap-0 mb-8">

                {
                    benefits.map((benefit, index) => (
                        <li key={index} className="flex flex-row items-center gap-2">
                            <MdOutlineDone size={24} color='#03B97C' />
                            <p className="text-[#8D8C9B] text-center lg:py-0 py-4">{benefit}</p>
                        </li>
                    ))
                }

            </ul>
            <div className="flex justify-center">
                <button className="ct-btn bg-green-300 text-white px-8 py-3 rounded-md">Register Now</button>
            </div>
        </div>
    )
}

export default PlainCard