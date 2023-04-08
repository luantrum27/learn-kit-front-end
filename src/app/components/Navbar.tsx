'use client'
import Link from 'next/link'
import { memo, useCallback, useEffect, useState } from 'react'
import { AiFillPhone, AiFillSetting } from 'react-icons/ai'
import { BsChevronDown } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa'
import { MdAccountBox } from 'react-icons/md'
import { BiLogOut } from 'react-icons/bi'
import { useAppDispatch, useAppSelector } from '../stores/hooks'
import { selectUserProfile } from '../stores/userSlice'
import { getUserProfile } from '../services/user.service'
import * as authService from '@/app/services/auth.service';

function Navbar({ currentPage }: { currentPage: string }) {
    const [isShowModal, setIsShowModal] = useState(false);
    const [isLogout, setIsLogout] = useState(false);
    const dispatch = useAppDispatch();
    const toggleModal = useCallback(() => {
        setIsShowModal((currentVariant) => currentVariant ? false : true);
    }, []);

    const handleLogout = useCallback(() => {
        authService.logout(dispatch);
        setIsLogout(true);
    }, []);

    useEffect(() => {
        const handleGetProfileUser = async () => {
            await getUserProfile(dispatch);
        }
        handleGetProfileUser();
    }, []);

    const userProfileStore = useAppSelector(selectUserProfile);

    return (
        <nav className='h-[100px] w-full px-[20px]'>
            <div className='flex flex-row gap-2 items-center justify-between max-w-[1280px] bg-white h-full mx-auto'>
                <div className='basis-1/6' >
                    <div className='w-[125px] h-[40px]'>
                        <img src="/images/logo.png" alt="Logo" className='w-full' />
                    </div>
                </div >
                <ul className='basis-2/3 lg:flex lg:flex-row lg:justify-around hidden'>
                    <li className={`ct-text-category ${currentPage === 'Home' ? 'ct-active' : ''}`}>Home</li>
                    <li className={`ct-text-category ${currentPage === 'About us' ? 'ct-active' : ''}`}>About us</li>
                    <li className={`ct-text-category ${currentPage === 'Courses' ? 'ct-active' : ''}`}><Link className='flex flex-row items-center gap-2' href={'/pages/courses'}>Courses <BsChevronDown /></Link></li>
                    <li className={`ct-text-category ${currentPage === 'Instractor' ? 'ct-active' : ''}`}>Instractor</li>
                    <li className={`ct-text-category ${currentPage === 'Blog' ? 'ct-active' : ''}`}>Blog <BsChevronDown /></li>
                    <li className={`ct-text-category ${currentPage === 'Contact' ? 'ct-active' : ''}`}>Contact</li>
                </ul>
                <div className='lg:basis-1/6 flex flex-row items-center justify-end relative'>
                    <div className='sm:flex sm:flex-row sm:items-center hidden lg:hidden'>
                        <div className='w-[43px] h-[43px] bg-green-300 rounded-full flex justify-center items-center'>
                            <AiFillPhone color='#fff' size={24} />
                        </div>
                        <p className='mx-6 font-semibold'>(+62)81 414 257</p>
                    </div>
                    {
                        userProfileStore ? (
                            <>
                                <div className='lg:flex gl:flex-row lg:items-center gap-2 hidden'>
                                    <div className='w-[50px] h-[50px] bg-green-300 ct-center rounded-full'>
                                        {/* <img src="" alt="logo_user" /> */}
                                        <p className='font-bold text-white'>L</p>
                                    </div>
                                    <BsChevronDown className={`cursor-pointer ${isShowModal === true ? 'rotate-180' : 'rotate-0'} transition duration-100`} onClick={toggleModal} />
                                </div>

                                <ul className={`absolute top-[100%] bg-white px-[20px] py-[10px] shadow-2xl ${isShowModal === true ? 'flex-col' : 'hidden'} gap-3`}>
                                    <li className='flex flex-row items-center justify-start gap-2'>
                                        <MdAccountBox size={24} color='#03B97C' />
                                        <Link className='font-semibold text-graphite' href={'/'}>Account</Link>
                                    </li>
                                    <li className='flex flex-row items-center justify-start gap-2'>
                                        <AiFillSetting size={24} color='#03B97C' />
                                        <Link className='font-semibold text-graphite' href={'/'}>Setting</Link>
                                    </li>
                                    <li className='flex flex-row items-center justify-start gap-2'>
                                        <BiLogOut size={24} color='#03B97C' />
                                        <Link className='font-semibold text-graphite' href={''} onClick={handleLogout}>Log out</Link>
                                    </li>
                                </ul>
                            </>
                        ) : (
                            <Link href={'/pages/auth'} className='ct-btn bg-green-300 w-[145px] h-[44px] text-white rounded-sm lg:flex lg:items-center lg:justify-center hidden'>Register Now</Link>
                        )
                    }

                </div>
                <div className='w-[30px] h-[30px] rounded-sm bg-green-50 flex lg:hidden items-center justify-center'>
                    <FaBars size={24} color='#03B97C' />
                </div>
            </div >
        </nav >
    )
}

export default memo(Navbar)