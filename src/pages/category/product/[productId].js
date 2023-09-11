import RootLayout from '@/components/RootLayout';
import React from 'react';

const ProductDetails = () => {
    return (
        <div>
            <h1>Product Details</h1>
        </div>
    );
};

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page){
    return <RootLayout>{page}</RootLayout>
 }

