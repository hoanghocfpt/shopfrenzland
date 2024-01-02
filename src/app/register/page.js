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


    if(status === 'loading'){
        return (<div role="status" className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
        <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
        <span className="sr-only">Loading...</span>
    </div>)
    }
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
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
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