import { React, useState } from 'react';
import { ChevronDownIcon, XIcon } from '@heroicons/react/solid';

const FAQ = () => {
    const data = [
        {
            question: 'Non consectetur a erat nam at lectus urna duis?',
            answer: 'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.'
        },
        {
            question: 'Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?',
            answer: 'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.'
        },
        {
            question: 'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?',
            answer: 'Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis'
        },
        {
            question: 'Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?',
            answer: 'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.'
        },
        {
            question: 'Tempus quam pellentesque nec nam aliquam sem et tortor consequat?',
            answer: 'Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in'
        },
        {
            question: 'Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor?',
            answer: 'Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nibh tellus molestie nunc non blandit massa enim nec.'
        }
    ]

    const [panel, setPanel] = useState(null);
    const handlePanel = (index) => {
        if (panel === index) {
            return setPanel(null);
        }
        setPanel(index);
    }

    return (
        <>
            <div>
                <div>
                    <h1 className='text-4xl text-slate-500 pt-16 pb-8'>Frequenty Asked Questions</h1>
                </div>
                <div className='mt-3 text-left text-xl'>
                    {data.map((item, index) => (
                        <div className="item">
                            <div className='flex justify-between items-center px-5 hover:text-orange-500'
                                onClick={() => { handlePanel(index) }}>
                                <button className='p-4 w-full text-left border-0 transition duration-300'>
                                    {item.question}
                                </button>
                                <div className='hover:cursor-pointer'>
                                    {panel === index ? <XIcon className='w-8' /> : <ChevronDownIcon className='w-8' />}
                                </div>
                            </div>
                            <div className={panel === index ? 'flex py-4 px-9' : 'hidden'}>
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default FAQ