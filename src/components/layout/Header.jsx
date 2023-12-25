
import Image from 'next/image';
import Link from 'next/link';

import CountCart from './CountCart';
const Header = () => {
    
    return (
        <nav className="bg-white shadow py-4 sticky top-0">
            <div className="max-w-screen-xl w-full mx-auto sm:px-4 md:px-4 lg:px-4 px-4">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center justify-start">
                            <img className="block h-12" src="/images/frenzland.svg" alt="frenzland_logo"/>
                        
                        </div>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:items-center gap-6">
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-4">
                           
                            <Link href="/home" className="border-transparent text-black uppercase hover:text-gray-600 inline-flex items-center px-1 pt-1 border-b-2 text-base font-medium">
                                Home
                            </Link>
                            <Link href="/shop" className="border-transparent text-black uppercase hover:text-gray-600 inline-flex items-center px-1 pt-1 border-b-2 text-base font-medium">
                                Shop
                            </Link>
                        </div>
                        <CountCart />
                        <Link href={'/login'} className="inline-flex uppercase items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
                            Login
                        </Link>
                    </div>
                    <div className='cursor-pointer flex gap-3 items-center sm:hidden'>
                        <CountCart />
                        <Image src="/asset/icons/menu.svg" width={24} height={24} alt="search_icon"/>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;