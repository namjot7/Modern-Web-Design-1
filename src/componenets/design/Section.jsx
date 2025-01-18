import React from 'react'
import SectionSvg from '../../assets/svg/SectionSvg'

const Section = ({ className, id, customPaddings, crosses, crossesOffset, children }) => {
    return (
        <div id={id} className={`z-5 relative 
            ${className || ''}
            ${customPaddings || "py-10"} 
            ${crosses ? "lg:py-30" : ""}`}>

            {children}

            {/* Sidelines (Vertically) */}
            <div className="hidden lg:block absolute top-0 left-5 
            w-0.25 h-full bg-stroke-1 pointer-events-none"/>
            <div className="hidden lg:block absolute top-0 right-5 
            w-0.25 h-full bg-stroke-1 pointer-events-none"/>

            {/* Horizontal line */}
            {crosses && (
                <>
                    <div className={`hidden md:block absolute top-0 left-7 right-7 h-1 bg-stroke-1
                        ${crossesOffset && crossesOffset} pointer-events-none `} />
                    <SectionSvg crossesOffset={crossesOffset} />
                </>
            )}
        </div>
    )
}

export default Section