import React from 'react'
import aboutImage from '../assets/about-img.jpg';
import { CheckIcon } from '@heroicons/react/solid';

const About = () => {
    return (
        <>
            <div className='flex flex-col lg:flex-row mt-36 px-24 py-4 lg:py-24'>
                <div>
                    <img src={aboutImage} className='w-[1700px] h-[300px] sm:h-[400px] md:h-[600px] lg:h-[430px]' alt='/' />
                </div>
                <div className='text-left ml-8 text-slate-700'>
                    <h1 className='text-2xl lg:text-2xl xl:text-3xl w-full mt-6 lg:mt-0'>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h1>
                    <p className='mt-3 italic'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <ul className='mt-4'>
                        <li className='mt-2'><CheckIcon className='w-5 inline-block text-orange-500' /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                        <li className='mt-2'><CheckIcon className='w-5 inline-block text-orange-500' /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                        <li className='mt-2'><CheckIcon className='w-5 inline-block text-orange-500' /> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                    </ul>
                    <p className='mt-8 text-base md:text-[17px]'>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
            </div>
        </>
    )
}

export default About