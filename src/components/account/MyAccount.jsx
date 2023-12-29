'use client'
import { useSession } from 'next-auth/react';

import React, {useEffect, useState} from 'react';

const MyAccount = () => {
    const {data: session, status}= useSession();
    const [name, setName] = useState('');
    const useEmail = session?.user?.email;
    const nameUser = session?.user?.name;
  
    useEffect(() => {
        if(status === 'authenticated'){
            setName(nameUser);
        }



    }, [session, status, nameUser]);

    async function handleUpdateAccount(ev) {
        ev.preventDefault();
        const response = await fetch('/api/account', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: name }),
        });
      
      
      }

       
            
    return (
        <div>
            <h3 className='text-2xl font-semibold mb-4'>Personal Information</h3>
            <div>
                <form className='w-full mx-auto py-2' onSubmit={handleUpdateAccount}>
                    <div className='flex flex-col mb-4 w-full'>
                        <label className='mb-2' htmlFor='email'>Email address:</label>
                        <input disabled value={useEmail} className='border text-gray-600 border-gray-400 py-2 px-4 text-lg rounded-lg outline-none' type="text" name="email" placeholder='enter email'/>
                    </div>
                    <div className='flex flex-col mb-6 w-full'>
                        <label className='mb-2' htmlFor='name'>Name:</label>
                        <input value={name} onChange={ev => setName(ev.target.value)} className='border border-gray-400 py-2 px-4 text-lg rounded-lg outline-none placeholder:font-normal' type="text" name="name" placeholder='enter fullname'/>
                    </div>
                    <div className='flex flex-col mb-6 w-full'>
                        <button className='border border-black py-2 px-6 bg-black text-white text-lg rounded-lg max-w-fit' type="submit">Update Account</button>
                        {/* {error && <p className='text-red-600 text-lg flex items-center gap-1 justify-center py-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                            <span>Update fail. Please try again!</span>
                        </p>} */}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MyAccount;