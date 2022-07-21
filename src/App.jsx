import React from 'react';
import Form from './components/Form';
import Footer from './components/Footer';

export default function App() {
    return (
        <>
            <article className='md:text-left'>
                <h1 className='text-2xl font-bold px-6 my-4'>Learn to code by watching others</h1>
                <p className='font-normal text-sm text-white text-opacity-70 my-4'>
                    See how experienced developers solve problems in real-time. Watching scripted tutorials is great,
                    but understanding how developers think is invaluable.
                </p>

            </article>

            <div>
                <p className='rounded-md bg-pBlue p-4 text-sm px-10 my-6 shadow-pShadow'><strong>Try it free 7 days</strong> then $20/mo. thereafter</p>
                <Form />
            </div>

            <Footer />
        </>
    );
}