import React from 'react'
import { loading } from '../assets'

const Generating = ({ className }) => {
    return (
        <div className={`flex items-center text-base bg-n-8/80 px-6 rounded-full h-[3rem]
            ${className || ' '}`} >
            <img className='w-5 h-5 mr-4' src={loading} alt="loading" />
            AI is  generating
        </div>
    )
}

export default Generating