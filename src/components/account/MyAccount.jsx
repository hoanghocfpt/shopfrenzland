'use client'
import React, {useState} from 'react';

const MyAccount = () => {
    const [name, setName] = useState('');
    const [emailOK, setEmail] = useState('');
    const email = emailOK.toLowerCase();
    const [password, setPassword] = useState('');
    const [created, setCreated] = useState(false);
    const [error, setError] = useState(false);

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
        <div>
            <h3 className='text-2xl font-semibold mb-4'>Personal Information</h3>
            <div>
                <form className='w-full mx-auto py-2' onSubmit={handleFormSubmit}>
                    <div className='flex flex-col mb-4 w-full'>
                        <label className='mb-2' htmlFor='name'>Email address:</label>
                        <input disabled value={emailOK} onChange={ev => setEmail(ev.target.value)} className='border border-gray-400 py-2 px-4 text-lg rounded-lg outline-none' type="text" name="email" placeholder='enter email'/>
                    </div>
                    <div className='flex flex-col mb-6 w-full'>
                        <label className='mb-2' htmlFor='name'>Password:</label>
                        <input value={password} onChange={ev => setPassword(ev.target.value)} className='border border-gray-400 py-2 px-4 text-lg rounded-lg outline-none font-bold placeholder:font-normal' type="password" name="password" placeholder='enter password'/>
                    </div>
                    <div className='flex flex-col mb-6 w-full'>
                        <button className='border border-black py-2 px-6 bg-black text-white text-lg rounded-lg max-w-fit' type="submit">Update Account</button>
                        {error && <p className='text-red-600 text-lg flex items-center gap-1 justify-center py-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                            <span>Update fail. Please try again!</span>
                        </p>}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MyAccount;