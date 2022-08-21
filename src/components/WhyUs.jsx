import React from 'react'
import { BookOpenIcon, CalendarIcon, PhotographIcon } from '@heroicons/react/solid';
import WhyUsImage1 from '../assets/why-us-1.jpg';
import WhyUsImage2 from '../assets/why-us-2.jpg';
import WhyUsImage3 from '../assets/why-us-3.jpg';

const WhyUs = () => {
    return (
        <>
            <div className='flex flex-col lg:flex-row gap-5 mt-5 py-10 px-8'>
                <div>
                    <div className='w-full'>
                        <img src={WhyUsImage1} className='img-primary' alt="/" />
                    </div>
                    <div className='summary'>
                        <BookOpenIcon className='icon-primary' />
                        <h3 className='header'>Our Mission</h3>
                        <p className='description'>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
                <div>
                    <div className='w-full'>
                        <img src={WhyUsImage2} className='img-primary' alt="/" />
                    </div>
                    <div className='summary'>
                        <CalendarIcon className='icon-primary' />
                        <h3 className='header'>Our Plan</h3>
                        <p className='description'>Sed ut perspiciatis unde omnis iste
                            natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                            inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                    </div>
                </div>
                <div>
                    <div className='w-full'>
                        <img src={WhyUsImage3} className='img-primary' alt="/" />
                    </div>
                    <div className='summary'>
                        <PhotographIcon className='icon-primary' />
                        <h3 className='header'>Our Vision</h3>
                        <p className='description'>Nemo enim ipsam voluptatem quia voluptas sit
                            aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt
                            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyUs