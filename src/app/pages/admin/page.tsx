'use client'
import CardCourse from '@/app/components/CardCourse'
import { getCourses } from '@/app/services/course.service';
import { selectCourses } from '@/app/stores/courseSlice';
import { useAppDispatch, useAppSelector } from '@/app/stores/hooks';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

function Admin() {
    useEffect(() => {
        handleGetCourses();
    }, []);
    const router = useRouter();
    const dispatch = useAppDispatch();
    const courses = useAppSelector(selectCourses).courses.listCourses;
    async function handleGetCourses() {
        await getCourses(dispatch);
    }

    return (
        <>
            <nav className="navbar navbar-dark bg-dark">
                <div className='max-w-[1140px] mx-auto '>
                    <Link className="navbar-brand" href="#">Admin</Link>
                </div>

            </nav>
            <div className='max-w-[1140px] mx-auto '>
                <h1 className='text-green-300 text-center text-xl'>List course</h1>
                <div className='flex gap-3'>
                    <button onClick={() => router.push('/pages/admin/add-course')} className='btn bg-green-300 text-white'>Add Course</button>
                    <button onClick={() => router.push('/pages/admin/update-course')} className='btn bg-graphite text-white'>Update Course</button>
                    <button onClick={() => router.push('/pages/admin/delete-course')} className='btn bg-[#FF6347] text-white'>Delete Course</button>
                </div>
                <ul className='grid grid-cols-3 gap-3'>
                    {
                        courses?.map((item, index) => (
                            <>
                                <CardCourse key={index} {...item} />
                            </>
                        ))
                    }
                </ul>
            </div>

        </>
    )
}


export default Admin

