import { AiOutlineMenu, } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';
import { useState } from 'react';

import Heading from './Heading';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { useGetCategoryQuery } from '@/redux/category/categoryApi';
import Button from './Button';


const MobileNavbar = () => {
    const { data: session, } = useSession();
    const [isOpen, setIsOpen] = useState(false);
    const [category, setCategory] = useState(false);


    const toggleIsOpen = () => {
        setIsOpen((value) => !value);
    };
    const toggleCategory = () => {
        setCategory((value) => !value);
    };
    const { data, isLoading } = useGetCategoryQuery()
    if (isLoading) {
        return <h1 className="text-center my-2 font-semibold">Loading....</h1>
    }
    return (
        <>
            <div className="md:hidden flex justify-between mx-5 py-2 transition duration-700">
                <Link href={'/'}>
                    <img className='w-24' src="https://i.ibb.co/xfZfGns/pc-logo.png" alt="" />

                </Link>
                <div>
                    <p
                        className="flex justify-center items-center bg-white px-2 py-1 text-primary rounded cursor-pointer"
                        onClick={toggleIsOpen}
                    >
                        <span>
                            <AiOutlineMenu className="text-2xl mr-1" />
                        </span>
                    </p>
                </div>
            </div>
            <div className="lg:hidden">
                <div
                    className={`absolute top-0 duration-700   ${isOpen ? "left-0 duration-700" : "left-[-1200px]"
                        } z-30 bg-[#0874c4] w-full p-3  h-[1300px]`}>
                    <p className={` absolute top-5 right-2  text-white py-1 cursor-pointer`}
                        onClick={toggleIsOpen}>
                        <span>
                            <ImCross className="text-xl  mr-1" />
                        </span>
                    </p>
                    <div className='text-white'>
                        <Link href={'/'}><p className={" mt-5"}> <span className='hover:bg-white font-semibold hover:text-[#0874c4] duration-300 cursor-pointer px-5 py-2 rounded-md' onClick={toggleIsOpen}>Home</span> </p></Link>

                        <p className={" mt-5"} onClick={toggleCategory}> <span className='hover:bg-white font-semibold hover:text-[#0874c4] duration-300 cursor-pointer px-5 py-2 rounded-md'>Category</span> </p>

                        {
                            category && <div>
                                {
                                    data?.data.map(category => <Link href={`/category/${category._id}`} key={category._id}><p className={" mt-5"}> <span className='hover:bg-white font-semibold hover:text-[#0874c4] duration-300 cursor-pointer px-5 py-2 rounded-md' onClick={toggleIsOpen} key={category._id}>{category.name}</span> </p></Link>)
                                }
                            </div>
                        }
                        <Link href={'/pc-build'}><h1><button className='mr-5 font-semibold hover:bg-[#0874c4] mt-3 border border-[#0874c4] duration-300 text-[#0874c4] bg-white hover:text-white px-2 py-2 rounded-md' onClick={toggleIsOpen}>PC Builder</button></h1></Link>
                        {
                            session?.user ? <>
                                
                                <button onClick={() => signOut()} className={"mr-5 font-semibold hover:bg-[#0874c4] mt-3 border border-[#0874c4] duration-300 text-[#0874c4] bg-white hover:text-white px-4 py-2 rounded-md"}>Log out</button>
                            </>
                                : <>
                                    <Link href={'/login'}><p className={"mt-5"}><span className='hover:bg-white font-semibold hover:text-[#0874c4] duration-300 cursor-pointer px-5 py-2 rounded-md' onClick={toggleIsOpen}>Login</span></p></Link>

                                </>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileNavbar;