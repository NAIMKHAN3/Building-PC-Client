import Image from 'next/image';
import React, { useState } from 'react';
import Heading from './Heading';
import Button from './Button';
import Li from './Li';

const Navbar = () => {
    const [categoryShow, setCategoryShow] = useState(false)

    const handleCategory = () => {
        setCategoryShow(!categoryShow)
    }
    console.log(categoryShow)
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
                                <ul className='absolute top-8 right-[-70px] duration-300 bg-white rounded-md pt-2 w-[200px] border'>
                                    <li className='px-3 cursor-pointer hover:text-[#4361ee]'>
                                        CPU / Processor
                                    </li>
                                    <li className='mt-2 border-t px-3 hover:text-[#4361ee]'>
                                        Motherboard
                                    </li>
                                    <li  className='mt-2 border-t px-3 hover:text-[#4361ee]'>
                                        RAM
                                    </li>
                                    <li  className='mt-2 border-t px-3 hover:text-[#4361ee]'>
                                        Power Supply Unit
                                    </li>
                                    <li  className='mt-2 border-t px-3 hover:text-[#4361ee]'>
                                        Storage Device
                                    </li>
                                    <li  className='mt-2 border-t px-3 hover:text-[#4361ee]'>
                                        Monitor
                                    </li>
                                </ul>
                            }
                        </div>
                    </div></li>
                    <Li>Login</Li>
                    <li><Button>Log out</Button></li>
                    <li><Button>PC Build</Button></li>
                </ul>
            </div>
        </div>
        </div>
        
    );
};

export default Navbar;