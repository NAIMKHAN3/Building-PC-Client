import RootLayout from '@/components/RootLayout';
import { useGetSingleProductQuery } from '@/redux/product/productApi';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

const ProductDetails = ({ data }) => {
    const router = useRouter();
    const id = router.query?.productId;
    // const { data, isLoading } = useGetSingleProductQuery(id);
    // if (isLoading) {
    //     return <h1 className="text-center my-2 font-semibold">Loading...</h1>
    // }
    const { keyFeatures,
        image, productName, reviews, category, price, rating, status, description, indivisualRating } = data.data;
    console.log(data)
    return (
        <div className='max-w-6xl mx-auto p-4'>
            <Head>
                <title>Build PC</title>
            </Head>
            <img className='w-full md:h-[500px]' src={image} alt="" />
            <div className='flex flex-col md:flex-row justify-between'>
                <div className='font-semibold mt-3'>
                    <h1 className='mt-2'>Name: {productName}</h1>
                    <h1 className='mt-2'>Category: {category}</h1>
                    <h1 className='mt-2'>Price: $ {price}</h1>
                    <h1 className='mt-2'>Status: <span className={`${status === "In Stock" ? "text-[#1fc600]" : "text-red-500"}`}>{status}</span></h1>
                    <h1 className='mt-2'>Rating: {rating}</h1>
                    <h1 className='mt-2'>Indivisual Rating: {indivisualRating}</h1>
                </div>
                <div className='font-semibold mt-3'>
                    <h1 className='mt-2'>Brand: {keyFeatures?.brand}</h1>
                    <h1 className='mt-2'>Model: {keyFeatures?.model}</h1>
                    <h1 className='mt-2'>Specification: {keyFeatures.specification}</h1>
                    {
                        keyFeatures?.sockettype && <h1 className='mt-2'>Socket Type: {keyFeatures?.sockettype}</h1>
                    }
                    {
                        keyFeatures.tdp && <h1 className='mt-2'>TDP: {keyFeatures.tdp}</h1>
                    }
                    {
                        keyFeatures.ramSlots && <h1 className='mt-2'>RAM Slots: {keyFeatures.ramSlots}</h1>
                    }

                    {
                        keyFeatures.type && <h1 className='mt-2'>Type: {keyFeatures.type}</h1>
                    }

                    <h1 className='mt-2'>Description: {description}</h1>
                </div>
            </div>
            <div className='mt-3'>
                <h1 className='text-center font-semibold text-2xl'>Reviews: {reviews?.length}</h1>
                {
                    reviews?.map((review, i) => <div key={i} className='mt-3 font-semibold'>
                        <h1><span className='font-bold'>{i + 1}. </span>Rating: {review.rating}</h1>
                        <h1>Comment: {review.comment}</h1>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ProductDetails;

export const getStaticPaths = async () => {

    const res = await fetch('https://building-pc.vercel.app/api/v1/product/products')
    const products = await res.json()


    const paths = products?.data.map((product) => ({
        params: { productId: product._id },
    }))
    return { paths, fallback: false }
}

export const getStaticProps = async (contex) => {
    const { params } = contex;

    const res = await fetch(`https://building-pc.vercel.app/api/v1/product/single-product/${params.productId}`)
    const data = await res.json()

    return {
        props: {
            data
        },
    };

}

ProductDetails.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>
}

