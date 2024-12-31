import React from 'react'
import SectionSvg from '../../assets/svg/SectionSvg'

const Section = ({ className, id, customPaddings, crosses, crossesOffset, children }) => {
    return (
        <div id={id}
            className={`relative ${className || ''}
                ${customPaddings || "py-10"}
                ${crosses ? "lg:py-30" : ""} `}>
            {children}

            <div className="hidden md:block absolute top-0 left-5 
            w-1 h-full bg-stroke-1 pointer-events-none 
            "/>
            <div className="hidden md:block absolute top-0 right-5 
            w-1 h-full bg-stroke-1 pointer-events-none 
            "/>
            {crosses && (
                <>
                    <div className={`hidden absolute top-0 left-7 right-7 h-1 bg-stroke-1
                        ${crossesOffset && crossesOffset} pointer-events-none md:block`} />
                    <SectionSvg crossesOffset={crossesOffset} />
                </>
            )}
        </div>
    )
}

export default Section