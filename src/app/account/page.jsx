'use client'
import Navbar from '@/components/account/Navbar';
import MyAccount from '@/components/account/MyAccount';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
const AccountPage = () => {
    const {data: session, status} = useSession();
    console.log(session);
    if(status === 'loading'){
        return <div className='h-[30vh]'>Loading...</div>
    }
    if(session === null && status !== 'authenticated'){
        return redirect('/login');
    }else{
        console.log(session);
    }



    const userName = session.user.name;
    const userEmail = session.user.email;
    return (
        <div className='max-w-screen-xl py-12 px-4 mx-auto min-h-[80vh]'>
            <h2 className='text-3xl font-bold mb-5'>My Profile</h2>
            <div className=' grid gap-6 grid-cols-[30%,1fr]'>
                <Navbar userName={userName} userEmail={userEmail}/>
                <MyAccount/>
            </div>
        </div>
    );
};

export default AccountPage;