import React from 'react'
import { LocationMarkerIcon, MailIcon, PhoneIcon } from '@heroicons/react/solid';

const Contact = () => {
    return (
        <>
            <div className='bg-orange-50 pb-10'>
                <div>
                    <h1 className='text-4xl text-slate-500 pt-16 pb-8'>Contact Us</h1>
                </div>
                <div className='flex flex-col md:flex-row justify-center items-center md:items-start gap-20'>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='icon-secondary'>
                            <LocationMarkerIcon className='w-8 inline-block text-orange-400 text-left' />
                            <p>A108 Adam Street <br />New York, NY 535022</p>
                        </div>
                        <div className='icon-secondary'>
                            <MailIcon className='w-8 inline-block text-orange-400 text-left' />
                            <p>info@example.com</p>
                        </div>
                        <div className='icon-secondary'>
                            <PhoneIcon className='w-8 inline-block text-orange-400 text-left' />
                            <p>+1 5589 55488 55s</p>
                        </div>
                        <div>
                            <ul className='flex gap-2 mt-5'>
                                <li className='item-secondary'><a href="/"><i class="fa-brands fa-twitter"></i></a></li>
                                <li className='item-secondary'><a href="/"><i class="fa-brands fa-facebook"></i></a></li>
                                <li className='item-secondary'><a href="/"><i class="fa-brands fa-instagram"></i></a></li>
                                <li className='item-secondary'><a href="/"><i class="fa-brands fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <form className='flex flex-col justify-center items-center gap-3'>
                            <input className='input-secondary' placeholder='Your Name' />
                            <input className='input-secondary' placeholder='Your Email' />
                            <input className='input-secondary' placeholder='Subject' />
                            <textarea className='input-secondary h-[150px]' placeholder="Message" id="" cols="30" rows="10"></textarea>
                            <button className='bg-orange-600 hover:bg-orange-400 transition-colors text-white 
                                                px-3 py-2 text-lg text-center w-44'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact