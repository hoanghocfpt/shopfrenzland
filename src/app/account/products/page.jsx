import Navbar from '@/components/account/Navbar';
import Products from '@/components/account/Products';
const ProductsPage = () => {
    
    return (
        <div className='max-w-screen-xl py-12 px-4 mx-auto min-h-[80vh]'>
            <h2 className='text-3xl font-bold mb-5'>My Profile</h2>
            <div className=' grid gap-6 grid-cols-[30%,1fr]'>
                <Navbar/>
                <Products/>
            </div>
        </div>
    );
};

export default ProductsPage;