import RootLayout from '@/components/RootLayout';
import { useSession, signIn } from 'next-auth/react';
import Head from 'next/head';
import React from 'react';


const Login = () => {
    const { data: session } = useSession();
    console.log(session)
    return (
        <div className='h-[100vh] flex justify-center items-center'>
            <Head>
                <title>Build PC</title>
            </Head>
            <div className='w-96 mx-auto border p-4'>
                <h1 className='text-center font-semibold text-3xl'>Login</h1>
                <div className='flex justify-between items-center'>
                    <button className='cursor-pointer' onClick={() => signIn("google", {
                        callbackUrl: "https://building-pc-client.vercel.app"
                    })}>
                        <div className='flex flex-col justify-center items-center'>
                            <img className='w-24' src="https://i.ibb.co/ZdpTffm/google-logo.png" alt="" />
                            <h1>Google</h1>
                        </div>
                    </button>
                    <button className='cursor-pointer' onClick={() => signIn("github", {
                        callbackUrl: "https://building-pc-client.vercel.app"
                    })}>
                        <div className='flex flex-col justify-center items-center'>
                            <img className='w-24' src="https://i.ibb.co/m8Px85R/github-logo.png" alt="" />
                            <h1>GitHub</h1>
                        </div>
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Login;

Login.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>
}