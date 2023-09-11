import React from 'react';

const Li = ({children}) => {
    return (
        <li className='mr-5 font-semibold hover:text-[#4361ee] cursor-pointer'>{children}</li>
    );
};

export default Li;