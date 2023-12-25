import { Jost } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { CartProvider } from '@/context/CartContext'


const jost= Jost({ weight: ['100','200','300','400','500','600','700','800','900'],subsets: ['latin'] })

export const metadata = {
  title: 'The Shop Bobby',
  description: 'Buy everything you want here',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={jost.className}>
        <div className=''>
          <CartProvider>
            <div className="" >
              <Header />
              <main className="">
                {children}
              </main>
              <Footer />
            </div>
          </CartProvider>
        </div>
      
      </body>
    </html>
  )
}