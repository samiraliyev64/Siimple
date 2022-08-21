import React from 'react';
import heroImage from '../assets/hero-bg.jpg';

const Hero = () => {
    return (
        <>
            <div className='w-full'>
                <div className='absolute'>
                    <img src={heroImage} className='w-full h-full object-cover' alt="/" />
                </div>
                <div className='relative flex flex-col justify-center items-center h-[300px] md:h-[450px] lg:h-[600px]'>
                    <div>
                        <h1 className='text-3xl sm:text-4xl lg:text-5xl'>Welcome to Siimple</h1>
                        <p className='text-1xl md:text-2xl text-slate-700 mt-6'>Please, fill out the for below to be notified for the latest updates!</p>
                    </div>
                    <div className='mt-10'>
                        <input placeholder='Your Name' className='input-primary' />
                        <input placeholder='Your Email' className='input-primary ml-6' />
                    </div>
                    <div>
                        <button className='btn-primary text-sm sm:text-base lg:text-lg rounded-full px-7 py-2 mt-8'>Notify me!</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero