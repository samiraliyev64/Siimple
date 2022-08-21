import React, { useState } from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/solid';

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const handleBurger = () => setNav(!nav);

    return (
        <>
            <nav className='bg-zinc-200 flex justify-between items-center px-4 py-6'>
                <h1 className='text-4xl text-slate-500 tracking-wider'><a href="/">Siimple</a></h1>
                <ul className='hidden md:flex justify-center items-center gap-7 text-orange-400 font-bold'>
                    <li className='hover:text-orange-300 transition-colors'><a href="/">Home</a></li>
                    <li className='hover:text-orange-300 transition-colors'><a href="/">About Us</a></li>
                    <li className='hover:text-orange-300 transition-colors'><a href="/">Why Us</a></li>
                    <li className='hover:text-orange-300 transition-colors'><a href="/">Contact</a></li>
                </ul>
                <div className='hidden md:flex'>
                    <button className='btn-primary mr-3 bg-transparent text-slate-500 hover:text-white'>Sign in</button>
                    <button className='btn-primary'>Sign Up</button>
                </div>
                <div className='md:hidden' onClick={() => { handleBurger() }}>
                    {!nav ? <MenuIcon className='w-7' />
                        : <XIcon className='w-7' />
                    }
                </div>
            </nav>
            <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8 z-10'}>
                <li className='list-item-primary'><a href="/">Home</a></li>
                <li className='list-item-primary'><a href="/">About Us</a></li>
                <li className='list-item-primary'><a href="/">Why Us</a></li>
                <li className='list-item-primary'><a href="/">Contact</a></li>
                <div className='flex flex-col my-4'>
                    <button className='btn-primary w-full mr-3 bg-transparent text-slate-500 hover:text-white'>Sign in</button>
                    <button className='btn-primary w-full mt-3'>Sign Up</button>
                </div>
            </ul>
        </>
    )
}

export default Navbar