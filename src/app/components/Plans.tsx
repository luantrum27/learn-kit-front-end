import { plains } from '@/app/stores/plans';
import React from 'react'
import PlainCard from './PlainCard';

function Plans() {
  return (
    <section>
      <div className="py-[100px] md:px-[20px] px-[0]">
        <div>
          <p className="text-green-300 tracking-wider font-semibold text-center">Our Pricing</p>
          <h1 className="tracking-wider font-bold text-graphite text-3xl text-center my-4">Flexible Pricing Plans</h1>
          <div className="max-w-[680px] mx-auto">
            <p className="text-[#8D8C9B] text-center lg:py-0 py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          </div>
        </div>
        <div className="flex md:flex-row md:items-start justify-center gap-8 mt-10 flex-col items-center">
          {
            plains.map((item, index) => (
              <PlainCard key={index} {...item} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Plans;