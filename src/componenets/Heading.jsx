import React from 'react'

const Heading = ({ className, title, text }) => {
    return (
        <div className={`${className} h2 mx-auto max-w-[50rem] mb-12 md:text-center `}>
            {title && <h2>{title}</h2>}
            {text && <p className='body-2 mt-4 text-n-4'>{text}</p>}
        </div>
    )
}

export default Heading