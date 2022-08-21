import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className='bg-dark-brown text-white flex flex-col justify-center items-center h-[120px]'>
                <div>
                    <p className='text-base'>© Copyright <b>Siimple</b>. All Rights Reserved</p>
                </div>
                <div className='mt-2'>
                    <p className='text-sm'>Designed by <a href="/" className='text-orange-500 
                                hover:text-orange-400 transition-colors'>BootstrapMade</a></p>
                </div>
            </footer>
        </>
    )
}

export default Footer