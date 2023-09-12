import Card from '@/components/Card';
import RootLayout from '@/components/RootLayout';
import { useGetProductsQuery } from '@/redux/product/productApi';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

const Category = ({data}) => {

    const router = useRouter()
    const id = router.query?.category

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-6xl mx-auto my-5'>
            {
                data?.data.map(product => <Card key={product._id} product={product} />)
            }
        </div>
    );
};

export default Category;

export const getStaticPaths = async () => {

    const res = await fetch('https://building-pc.vercel.app/api/v1/category/categorys')
    const categorys = await res.json()
   
    
    const paths = categorys?.data.map((category) => ({
      params: { category: category._id },
    }))
    return { paths, fallback: false }
  }

export const  getStaticProps = async (contex) => {
    const {params} = contex;
   
    const res = await fetch(`https://building-pc.vercel.app/api/v1/product/category-products/${params.category}`)
  const data = await res.json()
    
    return {
      props: {
        data
      },
    };
  
  }

Category.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>
}