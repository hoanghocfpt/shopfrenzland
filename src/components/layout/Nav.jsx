import Image from 'next/image';
import React from 'react';

const Nav = () => {
    return (
        <nav className="bg-white shadow py-4">
            <div className="max-w-screen-2xl w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center justify-start">
                            <img className="block h-12" src="/images/frenzland.svg" alt="frenzland_logo"/>
                        
                        </div>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:items-center">
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            {/* Navigation links */}
                            <a href="#" className="border-transparent text-gray-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                Trang chủ
                            </a>
                            <a href="#" className="border-transparent text-gray-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                Cửa hàng
                            </a>
                        </div>
                        
                        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
                        Đăng nhập
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;