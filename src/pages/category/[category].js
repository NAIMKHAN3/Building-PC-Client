import Card from '@/components/Card';
import RootLayout from '@/components/RootLayout';
import { useGetProductsQuery } from '@/redux/product/productApi';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

const Category = () => {

    const router = useRouter()
    const id = router.query?.category
    const { data, isLoading } = useGetProductsQuery(id)
    if (isLoading) {
        return <h1>Loading...</h1>
    }
    console.log(data)
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-6xl mx-auto my-5'>
            {
                data?.data.map(product => <Card key={product._id} product={product} />)
            }
        </div>
    );
};

export default Category;

Category.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>
}