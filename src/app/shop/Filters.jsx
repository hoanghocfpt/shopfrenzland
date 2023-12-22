'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link'

const Filters = () => {
  const [path, setPath] = useState('');

  useEffect(() => {
    setPath(window.location.pathname);
  }, []);

  return (
    <div className='w-full flex justify-center mb-4'>
      <Link href="/shop/clothes">
        <span className={`px-6 text-2xl font-semibold ${path === '/shop/clothes' ? 'underline' : ''}`}>Clothes</span>
      </Link>
      <Link href="/shop/toys">
        <span className={`px-6 text-2xl font-semibold ${path === '/shop/toys' ? 'underline' : ''}`}>Toys</span>
      </Link>
      <Link href="/shop/other">
        <span className={`px-6 text-2xl font-semibold ${path === '/shop/other' ? 'underline' : ''}`}>Other</span>
      </Link>
    </div>
  )
}

export default Filters;