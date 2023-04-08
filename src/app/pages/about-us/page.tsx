import Footer from '@/app/components/Footer'
import InformationPage from '@/app/components/InformationPage'
import Navbar from '@/app/components/Navbar'
import Testimonials from '@/app/components/Testimonials'
import React from 'react'

function AboutUs() {
    return (
        <>
            <Navbar currentPage={'About us'} />
            <InformationPage currentPage='About Us' />
            <Testimonials />
            <Footer />
        </>
    )
}

export default AboutUs