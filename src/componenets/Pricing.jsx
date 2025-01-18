import React from 'react'
import Section from './design/Section'
import { smallSphere, stars } from '../assets'
import Heading from './Heading'
import PricingList from './PricingList'
import { LeftLine, RightLine } from './design/Pricing'

const Pricing = () => {
    return (
        <Section className='overflow-hidden' id='pricing'>
            <div className="container relative z-5">
                {/* Sphere */}
                <div className="relative hidden lg:flex justify-center mb-[7rem]">
                    <img src={smallSphere} width={250} height={250} alt="sphere" />
                    <div className="z-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] pointer-events-none">
                        <img src={stars} width={950} height={400} alt="stars" />
                    </div>
                </div>

                <Heading
                    className='flex items-center gap-3 flex-col'
                    title='Pay once, use forever'
                    tag='Get started with Brainwave'
                />
                <div className="relative">
                    <PricingList />
                    <RightLine />
                    <LeftLine />
                </div>

                <div className="flex justify-center">
                    <a href="/details" className='text-xs font-code uppercase border-b font-bold tracking-wider'>
                        See the full details
                    </a>
                </div>
            </div>
        </Section>
    )
}

export default Pricing