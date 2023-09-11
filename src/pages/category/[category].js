import RootLayout from '@/components/RootLayout';
import React from 'react';

const Category = () => {
    return (
        <div>
            <h1>Category Product</h1>
        </div>
    );
};

export default Category;

Category.getLayout = function getLayout(page){
    return <RootLayout>{page}</RootLayout>
 }