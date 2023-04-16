import Footer from '@/app/components/Footer'
import InformationPage from '@/app/components/InformationPage'
import Navbar from '@/app/components/Navbar'
import React from 'react'
import { BsPeople } from 'react-icons/bs'
import { FaHome, FaPhoneSquareAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

function Contact() {
    return (
        <>
            <Navbar currentPage={'Contact'} />
            <InformationPage currentPage={'Contact'} />
            <section className='max-w-[1140px] mx-auto'>
                <div className='py-[100px]'>
                    <p className="text-green-300 tracking-wider font-semibold text-center">Contact us</p>
                    <h1 className="tracking-wider font-bold text-graphite text-3xl text-center my-4">Get In Touch With Us</h1>
                    <div className="max-w-[768px] mx-auto my-[50px]">
                        <p className="text-[#8D8C9B] text-center lg:py-0 py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                    <div className='flex flex-col justify-start md:flex-row md:justify-between items-center mb-[50px]'>
                        <div className='flex flex-row items-center gap-6 flex-shrink-0 w-[275px] md:w-auto'>
                            <div className='w-[60px] h-[60px] rounded-full bg-[#E6E5FF] flex justify-center items-center'>
                                <FaHome color='#03B97C' size={24} />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h2 className='text-graphite font-bold text-lg uppercase'>
                                    Reach Us</h2>
                                <div className='flex flex-col h-[72px]'>
                                    {
                                        ['123 New Market,', 'Eliza Road, Sincher 80 CA,', 'Canada, USA'].map((item, index) => (
                                            <p className='text-[#8B8A99] font-semibold'>{item}
                                            </p>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-row items-center gap-6 flex-shrink-0 w-[275px]'>
                            <div className='w-[60px] h-[60px] rounded-full bg-[#E6E5FF] flex justify-center items-center'>
                                <MdEmail color='#03B97C' size={24} />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h2 className='text-graphite font-bold text-lg uppercase'>
                                    Drop A Mail</h2>
                                <div className='flex flex-col h-[72px]'>
                                    {
                                        ['support@domain.com', 'example@domain.com'].map((item, index) => (
                                            <p className='text-[#8B8A99] font-semibold'>{item}
                                            </p>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-row items-center gap-6 flex-shrink-0 w-[275px]'>
                            <div className='w-[60px] h-[60px] rounded-full bg-[#E6E5FF] flex justify-center items-center'>
                                <FaPhoneSquareAlt color='#03B97C' size={24} />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h2 className='text-graphite font-bold text-lg uppercase'>
                                    Make A Call</h2>
                                <div className='flex flex-col h-[72px]'>
                                    {
                                        ['(41) 123 555 658', '+91 123 548 658'].map((item, index) => (
                                            <p className='text-[#8B8A99] font-semibold'>{item}
                                            </p>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <iframe className='' src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.6619189807493!2d108.24768071468287!3d15.979022188936652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142108f7ce7d251%3A0xbabf10f9b837c321!2zMTIzIE5ndXnhu4VuIE1pbmggQ2jDonUsIEhvw6AgSOG6o2ksIE5nxakgSMOgbmggU8ahbiwgxJDDoCBO4bq1bmcgNTUwMDAwLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1670179866072!5m2!1sen!2s"} width='100%' height="450" style={{ border: "0;" }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Contact