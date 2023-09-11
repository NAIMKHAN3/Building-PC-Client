import Button from '@/components/Button';
import RootLayout from '@/components/RootLayout';
import { addProduct } from '@/redux/pcBuild/pcBuildSlice';
import { useGetProductsQuery } from '@/redux/product/productApi';
import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch } from 'react-redux';

const BuildProductDetails = () => {
    const dispatch = useDispatch();
    const router = useRouter()
    const id = router.query?.categoryId
    const { data, isLoading } = useGetProductsQuery(id)
    const handleProduct = (data) => {
        dispatch(addProduct(data))
        router.push('/pc-build')
    }
    if (isLoading) {
        return <h1>Loading...</h1>
    }
  
    return (
        <div className='max-w-5xl mx-auto my-5'>
            {
                data?.data.map(product => <div key={product._id} className='flex flex-col sm:flex-row justify-between sm:items-center border p-3 rounded-md mt-2 m-3'>
                    <div className='flex flex-col sm:flex-row sm:items-center'>
                        <img className='sm:w-36' src={product.image} alt="" />
                        <div className='ml-3 font-semibold mt-2'>
                            <h1 className='mt-1'>Name: {product.productName}</h1>
                            <h1 className='mt-1'>Category: {product.category}</h1>
                            <h1 className='mt-1'>Price: {product.price}</h1>
                        </div>
                    </div>
                    <button className='mt-3 bg-[#4361ee] px-3 py-2 rounded-md text-white mr-3 hover:bg-gray-600 duration-300' onClick={()=> handleProduct(product)}>Select</button>
                </div>)
            }
        </div>
    );
};

export default BuildProductDetails;

BuildProductDetails.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>
}