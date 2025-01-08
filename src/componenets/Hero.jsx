import React, { useRef } from 'react'
import Section from './design/Section'
import { curve, heroBackground, robot } from '../assets'
import Button from './Button'
import { ScrollParallax } from 'react-just-parallax'
import { heroIcons } from '../constants'
import { SideLines } from './design/Header'
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero"
import Generating from './Generating'
import Notification from './Notification'
import CompanyLogos from './CompanyLogos'

const Hero = () => {
    const parallexRef = useRef(null);

    return (
        <Section id='hero' className="pt-[16rem] md:pt-[19rem] -mt-[5rem]"
            crosses crossesOffset="lg:translate-y-[5.25rem]">

            <div className="container relative" ref={parallexRef}>
                {/* Hero Text */}
                <div className="relative max-w-[62rem] mx-auto text-center mb-[4rem] lg:px-10">
                    <h1 className="h1 mb-6 lg:mb-12">
                        Explore the Possibilties of&nbsp;AI&nbsp;Chatting with&nbsp;
                        <span className="inline-block relative">
                            Brainwave
                            <img src={curve} alt="curve" height={600} width={200}
                                className='absolute top-full w-full lg:mt-2' />
                        </span>
                    </h1>
                    <p className='body-1 text-n-2 mb-10 lg:px-15'>
                        Unleash the power of AI within Brainwave.
                        Upgrade your productivity with Brainwave,
                        the open AI chat app.
                    </p>
                    <Button href="/pricing" white>Get Started</Button>
                </div>

                {/* Hero Image */}
                <div className="relative max-w-[100%] lg:max-w-[75%] mx-auto">
                    <div className="relative bg-conic-gradient p-1 rounded-2xl">
                        <div className="relative bg-n-8 rounded-2xl">
                            {/* Dark bg */}
                            <div className="h-[1.5rem] bg-n-10 rounded-t-2xl" />

                            {/* Image and Icons */}
                            <div className='aspect-[50/40] md:aspect-[600/300] lg:aspect-[600/280] overflow-hidden rounded-b-2xl'>
                                <img className='-translate-y-[15%] ' src={robot}
                                    width={1000} height={498} alt="" />

                                <Generating className={'z-30 absolute bottom-5 left-4 right-5  md:left-1/2 md:right-auto md:-translate-x-1/2 md:w-[30rem]'} />

                                <ScrollParallax isAbsolutelyPositioned>
                                    <ul className="hidden absolute bottom-[25%] -left-[10%] lg:flex gap-4 bg-n-9/40 p-1 rounded-2xl border-n-1 backdrop-blur">
                                        {heroIcons.map((icon, index) => (
                                            <img className='p-3' src={icon} key={index} />
                                        ))}
                                    </ul>
                                </ScrollParallax>

                                <ScrollParallax isAbsolutelyPositioned>
                                    <Notification className={'hidden absolute lg:flex bottom-[11rem] -right-[5rem] w-[18rem] xl:flex'} title={"Code generation"} />
                                </ScrollParallax>
                            </div>
                        </div>
                        {/* Gradient background */}
                        <Gradient />
                    </div>
                    {/* Hero background image */}
                    <div className=" -z-1 absolute -top-[84%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[90%] md:w-[138%]">
                        <img width={1440} height={1800} src={heroBackground} alt="hero background" />
                    </div>
                    <BackgroundCircles parallaxRef={parallexRef} />
                </div>
                <CompanyLogos className='hidden lg:block mt-20' />
            </div>
            <BottomLine />
        </Section>
    )
}

export default Hero