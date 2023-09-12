import Button from '@/components/Button';
import RootLayout from '@/components/RootLayout';
import { useGetCategoryQuery } from '@/redux/category/categoryApi';
import { removeAllProduct } from '@/redux/pcBuild/pcBuildSlice';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

const PcBuild = ({ data }) => {
    // const { data, isLoading } = useGetCategoryQuery();
    const router = useRouter();
    const dispatch = useDispatch();
    const { totalPrice, product, buttonState } = useSelector(state => state.pcBuild)
    const handleSubmit = () => {
        toast.success('Pc Build Order Success')
        router.push('/')
        dispatch(removeAllProduct())
    }
    // if (isLoading) {
    //     return <h1 className="text-center my-2 font-semibold">Loading....</h1>
    // }
    return (
        <div className='max-w-5xl mx-auto my-5'>
            <Head>
                <title>Build PC</title>
            </Head>
            <h1 className='fond-bold text-4xl mt-10 text-center'>PC Build</h1>
            <h1 className='fond-bold text-xl mt-3 mb-5 text-center'>Total Price: $ {totalPrice}</h1>
            {
                data?.data.map(category => <div key={category._id} className='border p-3 rounded-md mt-2 m-3'>
                    <div className='flex justify-between items-center '>
                        <div>
                            <h1>{category.name} <span className='text-red-500'> *</span></h1>
                            {
                                product?.map((product, i) => <div key={i}>
                                    {
                                        product.category === category.name ? <div className='flex mt-3 items-center'>
                                            <img className='w-12 mr-2' src={product.image} alt="" />
                                            <h1>{product.productName}</h1>
                                        </div> : null
                                    }
                                </div>)
                            }
                        </div>
                        <Link href={`/pc-build/${category._id}`}>
                            <Button>Choose</Button>
                        </Link>

                    </div>

                </div>)
            }
            <button onClick={handleSubmit} className={`${buttonState ? "bg-[#4361ee] hover:bg-gray-600" : " bg-gray-600"}  px-10 ml-3 mt-5 py-2 rounded-md text-white mr-3  duration-300`} disabled={!buttonState}>Complete Build</button>
        </div>
    );
};

export default PcBuild;

export const getServerSideProps = async () => {

    const res = await fetch('https://building-pc.vercel.app/api/v1/category/categorys')
    const data = await res.json()
    return {
        props: {
            data,
        },
    };

}

PcBuild.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>
}