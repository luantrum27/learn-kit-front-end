import React from 'react'
import { AiFillHome } from 'react-icons/ai'

function InformationPage({ currentPage }: { currentPage: string }) {
    return (
        <section className="bg-[url('https://ecrft.flexitheme.xyz/wp-content/uploads/2022/12/young-latin-woman-in-black-headphones-teaching-english-online.jpg')] h-[306px] bg-cover bg-center bg-no-repeat relative">
            <div className='absolute top-0 bottom-0 right-0 left-0 bg-graphite bg-opacity-70'></div>
            <div className='relative z-10 flex flex-col items-center justify-center h-full'>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-white text-center text-4xl font-bold'>{currentPage}</h1>
                    <div className='text-white flex flex-row items-center'><AiFillHome /> Home / {currentPage}</div>
                </div>
            </div>
        </section>
    )
}

export default InformationPage