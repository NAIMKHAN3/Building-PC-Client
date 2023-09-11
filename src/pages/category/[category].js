import RootLayout from '@/components/RootLayout';
import { useRouter } from 'next/router';
import React from 'react';

const Category = () => {

    const router = useRouter()
    console.log(router.query?.category)
    return (
        <div>
            <h1>Category Product</h1>
        </div>
    );
};

export default Category;

Category.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>
}