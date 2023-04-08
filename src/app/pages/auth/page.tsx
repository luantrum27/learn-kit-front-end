'use client'
import Link from 'next/link'
import React, { useCallback, useState } from 'react'
import { FaUserAlt, FaLock } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { useAppDispatch } from '@/app/stores/hooks'
import debounce from 'lodash.debounce';
import * as authService from '@/app/services/auth.service';
import { IUserRegister } from '@/app/interfaces/IUserRegister'
import { IUserLogin } from '@/app/interfaces/IUserLogin'
import { useRouter } from "next/navigation"
function Login() {
    const dispatch = useAppDispatch();

    const router = useRouter()
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [isRemember, setIsRemember] = useState(false);
    const [variant, setVariant] = useState('login');
    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login');
    }, []);

    const debounceClickRegister = React.useMemo(() => {
        return debounce(authService.register, 500);
    }, []);

    const debounceClickLogin = React.useMemo(() => {
        return debounce(authService.login, 500);
    }, []);

    const register = () => {
        const user: IUserRegister = {
            email: email,
            username: name,
            password: password
        }
        debounceClickRegister(user, dispatch);
    };

    const login = () => {
        const user: IUserLogin = {
            username: name,
            password: password
        }
        debounceClickLogin(user, isRemember, dispatch, router);
    }

    return (
        <section className='px-[20px] h-[100vh] w-full bg-[#E9EDF9]'>
            <div className='max-w-[900px] flex flex-row justify-center bg-white shadow-2xl relative top-[50%] -translate-y-[50%] mx-auto'>
                <div className="basis-1/2 bg-graphite relative md:flex hidden">
                    <img src={variant === 'login' ? '/images/bgr_login.png' : '/images/bgr_signup.png'} alt="" />
                    <div className='absolute top-0 left-0 bottom-0 right-0 bg-opacity-20 bg-black'></div>
                </div>
                <div className="basis-full md:basis-1/2 px-[20px] py-[20px] bg-white">
                    <div className='flex items-center justify-center'>
                        <img src="/images/logo.png" alt="logo" />
                    </div>
                    <h1 className='text-green-300 font-bold text-center text-xl'>{variant === 'login' ? 'Sign In' : 'Sign Up'}</h1>
                    <p className='text-[#7A7F9A] font-semibold text-center text-base'>Sign in to continue to Learnkit.</p>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="username" className='text-green-300 font-semibold'>Username</label>
                            <div className='flex flex-row items-center w-full'>
                                <div className='h-[42px] w-[60px] border-[#E6EBF5] bg-green-50 ct-center'>
                                    <FaUserAlt color='#03B97C' />
                                </div>
                                <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setName(e.target.value) }} value={name} type="text" id='username' className='ct-input text-[#7A7F9A] border w-full border-l-0 rounded-br-lg rounded-tr-lg border-[#E6EBF5] px-4 py-2' placeholder='Enter your username' />
                            </div>
                        </div>
                        {
                            variant === "register" && (<div className='flex flex-col gap-2'>
                                <label htmlFor="email" className='text-green-300 font-semibold'>Email</label>
                                <div className='flex flex-row items-center w-full'>
                                    <div className='h-[42px] w-[60px] border-[#E6EBF5] bg-green-50 ct-center'>
                                        <MdEmail color='#03B97C' />
                                    </div>
                                    <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value) }} value={email} type="email" id='email' className='ct-input text-[#7A7F9A] border w-full border-l-0 rounded-br-lg rounded-tr-lg border-[#E6EBF5] px-4 py-2' placeholder='Enter your email' />
                                </div>
                            </div>)
                        }
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="password" className='text-green-300 font-semibold'>Password</label>
                            <div className='flex flex-row items-center w-full'>
                                <div className='h-[42px] w-[60px] border-[#E6EBF5] bg-green-50 ct-center'>
                                    <FaLock color='#03B97C' />
                                </div>
                                <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setPassword(e.target.value) }} value={password} type="password" id='password' className='ct-input text-[#7A7F9A] border w-full border-l-0 rounded-br-lg rounded-tr-lg border-[#E6EBF5] px-4 py-2' placeholder='Enter your password' />
                            </div>
                        </div>
                        {
                            variant === 'login' && (
                                <div className='flex sm:flex-row flex-col items-center sm:justify-between'>
                                    <div className='flex flex-row gap-2 items-center'>
                                        <input type="checkbox" id='remember' checked={isRemember} onChange={() => { setIsRemember(!isRemember) }} className='w-[15px] h-[15px] border-[#7A7F9A] checked:bg-black cursor-pointer' />
                                        <label htmlFor="remember" className='text-[#7A7F9A] font-semibold cursor-pointer '>Remember me?</label>
                                    </div>
                                    <Link href={'/'} className='text-[#7A7F9A] cursor-pointer'>Forgot password?</Link>
                                </div>
                            )
                        }
                        <button onClick={variant === 'login' ? login : register} className='ct-btn bg-green-300 mt-4 text-white px-8 py-3 rounded-md flex items-center justify-center gap-3'>{variant === 'login' ? 'Login' : 'Sign up'}</button>
                        <div className='mt-4'>
                            <p className='text-[#7A7F9A] text-center'>Don't have an account? <span onClick={toggleVariant} className='cursor-pointer text-green-300'>{variant === 'login' ? 'Signup now' : 'Login now'}</span></p>
                            <p className='text-[#7A7F9A] text-center'>© 2023 Learnkit. Crafted with 💓 by HoangTheLuan</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login