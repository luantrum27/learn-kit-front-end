import CardCourse from '@/app/components/CardCourse'
import Footer from '@/app/components/Footer'
import InformationPage from '@/app/components/InformationPage'
import Navbar from '@/app/components/Navbar'
import React from 'react'

function Courses() {
    return (
        <>
            <Navbar currentPage={'Courses'} />
            <InformationPage currentPage='Courses' />
            <section className='py-100px'>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-[1140px] mx-auto gap-8 md:gap-4 my-[100px]'>
                    <CardCourse title={''} description={''} type={''} cost={0} level={''} time={0} averageRating={0} numberOfSubscribers={0} numberOfLessions={0} />
                    <CardCourse title={''} description={''} type={''} cost={0} level={''} time={0} averageRating={0} numberOfSubscribers={0} numberOfLessions={0} />
                    <CardCourse title={''} description={''} type={''} cost={0} level={''} time={0} averageRating={0} numberOfSubscribers={0} numberOfLessions={0} />
                    <CardCourse title={''} description={''} type={''} cost={0} level={''} time={0} averageRating={0} numberOfSubscribers={0} numberOfLessions={0} />
                    <CardCourse title={''} description={''} type={''} cost={0} level={''} time={0} averageRating={0} numberOfSubscribers={0} numberOfLessions={0} />
                    <CardCourse title={''} description={''} type={''} cost={0} level={''} time={0} averageRating={0} numberOfSubscribers={0} numberOfLessions={0} />
                    <CardCourse title={''} description={''} type={''} cost={0} level={''} time={0} averageRating={0} numberOfSubscribers={0} numberOfLessions={0} />
                    <CardCourse title={''} description={''} type={''} cost={0} level={''} time={0} averageRating={0} numberOfSubscribers={0} numberOfLessions={0} />
                    <CardCourse title={''} description={''} type={''} cost={0} level={''} time={0} averageRating={0} numberOfSubscribers={0} numberOfLessions={0} />
                    <CardCourse title={''} description={''} type={''} cost={0} level={''} time={0} averageRating={0} numberOfSubscribers={0} numberOfLessions={0} />
                    <CardCourse title={''} description={''} type={''} cost={0} level={''} time={0} averageRating={0} numberOfSubscribers={0} numberOfLessions={0} />
                    <CardCourse title={''} description={''} type={''} cost={0} level={''} time={0} averageRating={0} numberOfSubscribers={0} numberOfLessions={0} />
                    <CardCourse title={''} description={''} type={''} cost={0} level={''} time={0} averageRating={0} numberOfSubscribers={0} numberOfLessions={0} />
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Courses