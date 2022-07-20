import React from 'react';
import Form from './components/Form';
import Footer from './components/Footer';

export default function App() {
    return (
        <>
            <article className='md:text-left'>
                <h1 className='text-3xl font-bold'>Learn to code by watching others</h1>
                <p>
                    See how experienced developers solve problems in real-time. Watching scripted tutorials is great,
                    but understanding how developers think is invaluable.
                </p>

            </article>

            <div>
                <p className='rounded-md bg-pBlue p-2'><strong>Try it free 7 days</strong> then $20/mo. thereafter</p>
                <Form />
            </div>

            <Footer />
        </>
    );
}