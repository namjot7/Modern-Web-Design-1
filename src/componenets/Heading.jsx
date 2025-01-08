import React from 'react'

const Heading = ({className,title}) => {
    return (
        <div className={`${className} h2 mx-auto max-w-[50rem] mb-12 md:text-center `}>
            {title && <h2>{title}</h2>}
        </div>
    )
}

export default Heading