import React from 'react'
import { notificationImages } from '../constants'
import { notification1 } from '../assets'

const Notification = ({ className, title }) => {
    return (
        <div className={`${className || ''} flex items-center gap-3 backdrop-blur  p-4 pr-6 bg-n-9/40 rounded-2xl border-n-1/10`}>
            <img
                src={notification1}
                width={60} height={60}
                className='rounded-2xl' />

            <div className="flex-1">
                <h6 className='text-base mb-1 font-semibold'>{title}</h6>
                <div className="flex items-center justify-between">
                    {/* people logos */}
                    <ul className="flex -m-0.5">
                        {notificationImages.map((item, index) => (
                            <li key={index} className='rounded-full w-6 h-6 border-2 border-n-12 overflow-hidden'>
                                <img src={item} className='w-full' 
                                width={25} height={25} alt={item} />
                            </li>
                        ))}
                    </ul>
                    <div className="body-2 text-n-13">
                        1m ago
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Notification