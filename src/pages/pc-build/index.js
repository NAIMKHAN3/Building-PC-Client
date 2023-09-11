import Button from '@/components/Button';
import { useGetCategoryQuery } from '@/redux/category/categoryApi';
import Link from 'next/link';
import React from 'react';

const index = () => {
    const { data, isLoading } = useGetCategoryQuery()
    if (isLoading) {
        return <h1>Loading....</h1>
    }
    return (
        <div className='max-w-5xl mx-auto my-5'>
            <h1 className='fond-bold text-4xl my-10 text-center'>PC Build</h1>
           {
            data?.data.map(category => <div key={category._id} className='flex justify-between items-center border p-3 rounded-md mt-2 m-3'>
                <h1>{category.name}</h1>
                <Link href={`/pc-build/${category._id}`}>
                <Button>Choose</Button>
                </Link>
               </div>)
           }
        </div>
    );
};

export default index;