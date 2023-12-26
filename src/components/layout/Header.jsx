'use client'
import Image from 'next/image';
import Link from 'next/link';
import CountCart from './CountCart';
import { useSession, signOut } from 'next-auth/react';
import { useState } from 'react';


const Header = () => {
    

    // session
    const session = useSession();
    const status = session?.status;
    let statusOK = true;
    if(status === 'authenticated'){
        statusOK = true;
    }else{
        statusOK = false;
    }
   
    // navbar toggle
    const [navbarOpen, setNavbarOpen] = useState(false);
    
    function handleNavbar(){
        setNavbarOpen(!navbarOpen);
        console.log(navbarOpen);
    }
    function closeNavbar(){
        setNavbarOpen(false);
    }
 
    return (
        <nav className="bg-white shadow py-4 sticky top-0">
            <div className="max-w-screen-xl w-full mx-auto sm:px-4 md:px-4 lg:px-4 px-4">
                <div className="flex justify-between h-16 items-center relative">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center justify-start">
                            <Image className="block h-12" width={100} height={48} src="/images/frenzland.svg" alt="frenzland_logo"/>
                        
                        </div>
                    </div>
                    <div className={`${navbarOpen ? 'flex' : 'hidden'} flex-col sm:flex-row sm:ml-6 sm:flex sm:items-center gap-3 absolute -right-2 top-12 sm:top-0 py-3 px-5 sm:relative bg-white sm:bg-transparent sm:shadow-none rounded-sm shadow-lg`}>
                        <div className="sm:ml-6 sm:flex sm:space-x-4 gap-3 flex flex-col sm:flex-row items-end">
                           
                            <Link onClick={closeNavbar} href="/home" className="border-transparent text-black uppercase hover:text-gray-600 inline-flex items-center px-1 pt-1 border-b-2 text-base font-medium">
                                Home
                            </Link>
                            <Link onClick={closeNavbar} href="/shop" className="border-transparent text-black uppercase hover:text-gray-600 inline-flex items-center px-1 pt-1 border-b-2 text-base font-medium">
                                Shop
                            </Link>
                            {status === 'authenticated' && (
                                <>
                                    <Link onClick={closeNavbar} href="/account" className="border-transparent text-black uppercase hover:text-gray-600 inline-flex items-center px-1 pt-1 border-b-2 text-base font-medium">
                                        My Account
                                    </Link>
                                    <button onClick={() => signOut()} className="border-transparent text-black uppercase hover:text-gray-600 inline-flex items-center px-1 pt-1 border-b-2 text-base font-medium">
                                        Logout
                                    </button>
                                </>
                            )}
                        </div>
                        <div className='hidden sm:block'>
                        <CountCart/>
                        </div>
                        {statusOK ? (
                            ''
                        ) : (<Link onClick={closeNavbar} href="/login" className="inline-flex uppercase items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
                                Login
                            </Link>)}
                    </div>
                    <div className='cursor-pointer flex gap-3 items-center sm:hidden'>
                        <CountCart/>
                        <Image src="/asset/icons/menu.svg" width={24} height={24} onClick={handleNavbar} alt="search_icon"/>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;