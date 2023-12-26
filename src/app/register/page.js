"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from "next/link";
import { useState } from "react";


const RegisterPage = () => {
    const session = useSession();
    const status = session?.status;
 
    const [name, setName] = useState('');
    const [emailOK, setEmail] = useState('');
    const email = emailOK.toLowerCase();
    const [password, setPassword] = useState('');
    const [created, setCreated] = useState(false);
    const [error, setError] = useState(false);

    if(status === 'authenticated'){
        return redirect('/home');
    }

 
    async function handleFormSubmit(ev) {
        setError(false);
        ev.preventDefault();
        const response = await fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        if (response.ok){
            setCreated(true);
            setError(false);
        }else{
            setCreated(false);
            setError(true);
        }

    }
    return (
        <div className='max-w-screen-xl py-8 px-4 mx-auto min-h-[80vh]'>
            <h2 className='text-3xl font-bold text-center mb-2'>Sign Up</h2>
            <p className='text-gray-700 font-normal text-center text-lg'>Create an account</p>
            <div>
                <form className='max-w-xl mx-auto py-5' onSubmit={handleFormSubmit}>
                    <div className='flex flex-col mb-4 w-full'>
                        <label className='mb-2' htmlFor='name'>Full Name:</label>
                        <input value={name} onChange={ev => setName(ev.target.value)} className='border border-gray-400 py-2 px-4 text-lg rounded-md outline-none' type="text" name="name" placeholder='enter fullname'/>
                    </div>
                    <div className='flex flex-col mb-4 w-full'>
                        <label className='mb-2' htmlFor='name'>Email address:</label>
                        <input value={emailOK} onChange={ev => setEmail(ev.target.value)} className='border border-gray-400 py-2 px-4 text-lg rounded-md outline-none' type="text" name="email" placeholder='enter email'/>
                    </div>
                    <div className='flex flex-col mb-4 w-full'>
                        <label className='mb-2' htmlFor='name'>Password:</label>
                        <input value={password} onChange={ev => setPassword(ev.target.value)} className='border border-gray-400 py-2 px-4 text-lg rounded-md outline-none font-bold placeholder:font-normal' type="password" name="password" placeholder='enter password'/>
                    </div>
                    {/* <div className='flex flex-col mb-10 w-full'>
                        <label className='mb-2' htmlFor='name'>Confirm Password:</label>
                        <input className='border border-gray-400 py-2 px-4 text-lg rounded-md outline-none font-bold placeholder:font-normal' type="password" name="passwordConfirm" placeholder='enter confirm password'/>
                    </div> */}
                    <div className='flex flex-col mb-6 w-full'>
                        <button className='border border-black py-2 px-4 bg-black text-white text-lg rounded-md' type="submit">Sign Up</button>
                       {created &&  <p className='text-green-600 text-lg flex items-center gap-1 justify-center py-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                            <span>Create account success.</span>
                            <Link href='/login' className='underline'>Login now!</Link>
                        </p>}
                        {error && <p className='text-red-600 text-lg flex items-center gap-1 justify-center py-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                            <span>Account already exists.</span>
                            <Link href='/login' className='underline'>Login now!</Link>
                        </p>}
                    </div>
                </form>
                <div className='mb-8'>
                    <p className='text-gray-700 font-normal text-center text-lg'>Already have an account? <Link className="underline" href="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;