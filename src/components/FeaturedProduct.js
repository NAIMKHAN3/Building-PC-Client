import { useGetRandomProductsQuery } from '@/redux/product/productApi';
import React from 'react';
import Card from './Card';

const FeaturedProduct = () => {
    const { data, isLoading } = useGetRandomProductsQuery();
    if (isLoading) {
        return <h1>Loading..</h1>
    }
    return (
        <div>
            <h1 className='text-center font-bold text-3xl my-10'>Featured Product</h1>
            <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
                {
                    data?.data.map(product => <Card key={product._id} product={product} />)
                }
            </div>
        </div>
    );
};

export default FeaturedProduct;