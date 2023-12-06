import Footer from '@/components/layout/Footer'
import Nav from '@/components/layout/Nav'
import ProductCardItem from '@/components/productCardItem'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex min-h-screen items-center justify-between p-24">
      <ProductCardItem />
      <ProductCardItem />
      <ProductCardItem />

    </main>
    <Footer />
    </>
  )
}
