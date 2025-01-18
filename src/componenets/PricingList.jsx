import React from 'react'
import { pricing } from '../constants'
import Button from './Button'
import { check } from '../assets'

const PricingList = () => {
    return (
        <div className='flex gap-[1rem] max-lg:flex-wrap '>
            {pricing.map(item => (
                <div key={item.id} className="w-[19rem] max-lg:w-full lg:w-auto h-full bg-n-8 rounded-2xl px-6 even:py-14 odd:py-8 border border-n-6 odd:my-14 
                [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
                >
                    {/* odd:my-14 to push the other two card below as compared to the main "Oremium" card */}
                    <h4 className="h4 mb-4">{item.title}</h4>

                    <p className='body-2 min-h-[4rem]  text-n-1/50'>{item.description}</p>

                    <div className="flex items-center h-[5.5rem] mb-6">
                        {item.price &&
                            <>
                                <div className='h3'>$</div>
                                <div className='text-[5rem] leading-none font-bold'>{item.price}</div>
                            </>
                        }
                    </div>
                    
                    <Button className='w-full mb-6'
                        href={item.price ? '/pricing' : 'mailto:contact@gmail.com'}
                        white={!!item.price}
                    >
                        {item.price ? 'Get Started' : 'Contact Us'}
                    </Button>
                    
                    <ul>
                        {item.features.map((feature, index) => (
                            <li key={index} className='flex items-start gap-4 border-t border-n-6 py-5'>
                                <img src={check} width={24} height={24} alt='check' />
                                <p className="body-2">{feature}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default PricingList