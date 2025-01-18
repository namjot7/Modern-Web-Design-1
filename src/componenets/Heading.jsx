import React from 'react'
import Tagline from './Tagline'

const Heading = ({ className, title, text, tag }) => {
    return (
        <div className={`${className || ""} h2 mx-auto max-w-[50rem] mb-12 md:text-center `}>
            {tag && <Tagline>{tag}</Tagline>}
            {title && <h2>{title}</h2>}
            {text && <p className='body-2 mt-4 text-n-4'>{text}</p>}
        </div>
    )
}

export default Heading