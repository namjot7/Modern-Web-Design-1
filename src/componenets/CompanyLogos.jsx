import { companyLogos } from '../constants'
import React from 'react'

const CompanyLogos = ({ className }) => {
    return (
        <div className={className}>
            <h5 className='tagline text-center text-n-1/50'>
                Helping people create content at
            </h5>
            <ul className="flex">
                {companyLogos.map((logo, index) => (
                    <li key={index}
                        className="flex items-center justify-center flex-1 h-[8rem]">
                        <img width={134} height={28} src={logo} />
                    </li>
                ))}
            </ul>
        </div >
    )
}

export default CompanyLogos