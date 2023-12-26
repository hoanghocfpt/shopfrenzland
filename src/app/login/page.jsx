"use client";
import { signIn, useSession } from "next-auth/react"
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";

const LoginPage = () => {
    const session = useSession();
    const status = session?.status;
    
    const [emailOK, setEmail] = useState('');
    const email = emailOK.toLowerCase();

    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    if(status === 'authenticated'){
        return redirect('/home');
    }

    async function handleFormSubmit(ev) {
        setError(false);
        ev.preventDefault();
        const result = await signIn('credentials', {
            redirect: false, // Ngăn chặn việc chuyển hướng tự động
            email,
            password
        });
    
        if (result.error) {
            setError(true);
        } else {
            // Đăng nhập thành công, bạn có thể chuyển hướng người dùng hoặc làm gì đó khác
        }
    }
   
    return (
        <div className='max-w-screen-xl py-8 px-4 mx-auto min-h-[80vh]'>
            <h2 className='text-3xl font-bold text-center mb-2'>Login</h2>
            <p className='text-gray-700 font-normal text-center text-lg'>Login with your account</p>
            <div>
                <form className='max-w-xl mx-auto py-5' onSubmit={handleFormSubmit}>
                    <div className='flex flex-col mb-4 w-full'>
                        <label className='mb-2' htmlFor='name'>Email address:</label>
                        <input value={emailOK} onChange={ev => setEmail(ev.target.value)} className='border border-gray-400 py-2 px-4 text-lg rounded-md outline-none' type="text" name="email" placeholder='enter email'/>
                    </div>
                    <div className='flex flex-col mb-4 w-full'>
                        <label className='mb-2' htmlFor='name'>Password:</label>
                        <input value={password} onChange={ev => setPassword(ev.target.value)} className='border border-gray-400 py-2 px-4 text-lg rounded-md outline-none font-bold placeholder:font-normal' type="password" name="password" placeholder='enter password'/>
                    </div>
                    <div className='flex flex-col mb-6 w-full'>
                        <button className='border border-black py-2 px-4 bg-black text-white text-lg rounded-md' type="submit">Login</button>
                        {error && <p className='text-red-600 text-lg flex items-center gap-1 justify-center py-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                            <span>Email or password is incorrect. Please try again!</span>
                        </p>}
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