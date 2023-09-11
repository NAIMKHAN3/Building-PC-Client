import RootLayout from '@/components/RootLayout';
import React from 'react';

const Login = () => {
    return (
        <div>
            this is login
        </div>
    );
};

export default Login;

Login.getLayout = function getLayout(page){
    return <RootLayout>{page}</RootLayout>
 }