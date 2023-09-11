import Image from 'next/image';
import React, { useState } from 'react';
import Heading from './Heading';
import Button from './Button';
import Li from './Li';
import Link from 'next/link';
import { useGetCategoryQuery } from '@/redux/category/categoryApi';
import { useSession, signOut } from 'next-auth/react';

const Navbar = () => {

    const { data: session } = useSession();
    const [categoryShow, setCategoryShow] = useState(false)
    const { data, isLoading } = useGetCategoryQuery()
    if (isLoading) {
        return <h1>Loading....</h1>
    }

    const handleCategory = () => {
        setCategoryShow(!categoryShow)
    }

    return (
        <div className='bg-gray-100'>
            <div className='flex justify-between items-center max-w-7xl mx-auto'>
                <div>
                    <Image src="https://i.ibb.co/xfZfGns/pc-logo.png" width={150} height={50} alt='' />
                </div>
                <div>
                    <ul className='flex items-center'>

                        <Li>Home</Li>
                        <li onMouseEnter={handleCategory} onMouseLeave={handleCategory} className='mr-3 font-semibold cursor-pointer py-2'><div className='relative'>
                            <h1 className=''>Category</h1>
                            <div>
                                {
                                    categoryShow &&
                                    <ul className='absolute top-8 right-[-70px] duration-300 bg-white rounded-md pt-2  w-[200px] border'>

                                        {
                                            data?.data.map((category, i) => <Link href={`/category/${category._id}`} key={category._id}>
                                                <li className={`px-3 cursor-pointer hover:text-[#4361ee] ${i !== 0 && "mt-2 border-t"} `}>
                                                    {category.name}
                                                </li>
                                            </Link>)
                                        }
                                    </ul>
                                }
                            </div>
                        </div></li>
                        {
                            session?.user ? <li><Button onClick={signOut}>Log out</Button></li> :
                            <Link href={'/login'}> <Li>Login</Li></Link>
                        }
                      
                        
                        <li><Button>PC Build</Button></li>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Navbar;