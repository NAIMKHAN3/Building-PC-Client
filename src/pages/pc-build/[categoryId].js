import Button from '@/components/Button';
import { useGetProductsQuery } from '@/redux/product/productApi';
import { useRouter } from 'next/router';
import React from 'react';

const BuildProductDetails = () => {
    const router = useRouter()
    const id = router.query?.categoryId
    const { data, isLoading } = useGetProductsQuery(id)
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
                    <Button className={'mt-3'}>Select</Button>
                </div>)
            }
        </div>
    );
};

export default BuildProductDetails;