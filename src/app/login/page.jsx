"use client";
import Link from "next/link";
import { useState } from "react";


const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    async function handleFormSubmit(ev) {
        console.log({ email, password });
        ev.preventDefault();
        await fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res => res.json()).then(data => {
            if (data.success) {
                setCreated(true);
            }
        });
    }
    return (
        <div className='max-w-screen-xl py-8 px-4 mx-auto min-h-[80vh]'>
            <h2 className='text-3xl font-bold text-center mb-2'>Login</h2>
            <p className='text-gray-700 font-normal text-center text-lg'>Login with your account</p>
            <div>
                <form className='max-w-xl mx-auto py-5' onSubmit={handleFormSubmit}>
                    <div className='flex flex-col mb-4 w-full'>
                        <label className='mb-2' htmlFor='name'>Email address:</label>
                        <input value={email} onChange={ev => setEmail(ev.target.value)} className='border border-gray-400 py-2 px-4 text-lg rounded-md outline-none' type="text" name="email" placeholder='enter email'/>
                    </div>
                    <div className='flex flex-col mb-4 w-full'>
                        <label className='mb-2' htmlFor='name'>Password:</label>
                        <input value={password} onChange={ev => setPassword(ev.target.value)} className='border border-gray-400 py-2 px-4 text-lg rounded-md outline-none font-bold placeholder:font-normal' type="password" name="password" placeholder='enter password'/>
                    </div>
                    <div className='flex flex-col mb-6 w-full'>
                        <button className='border border-black py-2 px-4 bg-black text-white text-lg rounded-md' type="submit">Login</button>
                       
                    </div>
                </form>
                <div className='mb-8'>
                    <p className='text-gray-700 font-normal text-center text-lg'>Don&apos;t have an account? <Link href='/register' className='underline'>Register now!</Link></p>
                    
                </div>
            </div>
        </div>
    );
};

export default LoginPage;