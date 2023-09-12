import { useGetRandomProductsQuery } from '@/redux/product/productApi';
import React from 'react';
import Card from './Card';

const FeaturedProduct = ({data}) => {
    // console.log(data)
    
    return (
        <div>
            <h1 className='text-center font-bold text-3xl my-5 md:my-10 text-[#4361ee]'>Featured Product</h1>
            <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
                {
                    data?.data.map(product => <Card key={product._id} product={product} />)
                }
            </div>
        </div>
    );
};




export default FeaturedProduct;