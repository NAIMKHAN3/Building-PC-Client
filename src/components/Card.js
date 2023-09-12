import Link from 'next/link';
import React from 'react';

const Card = ({product}) => {
    return (
        <Link href={`/category/product/${product._id}`}>
        <div  className='border h-[480px] p-3 font-medium rounded-md shadow-sm hover:shadow-lg mx-2'>
                    <img className='w-full h-72' src={product.image} alt="" />
                    <div className='mt-3'>
                        <h1>Name: {product.productName}</h1>
                        <h1>Category: {product.category}</h1>
                        <h1>Price: $ {product.price}</h1>
                        <h1 >Status: <span className={`${product.status === "In Stock" ? "text-[#1fc600]" : "text-red-500"}`}>{product.status}</span></h1>
                        <h1>Rating: {product.rating}</h1>
                    </div>
                </div>
        </Link>
    );
};

export default Card;