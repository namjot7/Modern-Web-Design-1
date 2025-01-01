import React from 'react'
import Section from './design/Section'
import { curve, heroBackground, robot } from '../assets'
import Button from './Button'
import { ScrollParallax } from 'react-just-parallax'
import { heroIcons } from '../constants'
import { SideLines } from './design/Header'


const Hero = () => {
    return (
        <Section id='hero' className="pt-[12rem] md:pt-[19rem] -mt-[5rem]"
            crosses customPaddings crossesOffset="lg:translate-y-[5.25rem]">
                
            <div className="container relative">
                <div className="relative z-1 max-w-[60rem] mx-auto text-center
                    mb-[4rem] lg:px-10">
                    <h1 className="h1 mb-6 lg:mb-12">
                        Explore the Possibilties of AI Chatting with
                        Brainwave
                        <span className="inline-block relative">
                            Brainwave {" "}
                            <img src={curve}
                                height={600} width={200}
                                className='absolute top-full w-full lg:mt-2'
                                alt="curve" />
                        </span>
                    </h1>
                    <p className='body-1 text-n-2 mb-10 lg:px-15'>
                        Unleash the power of AI within Brainwave.
                        Upgrade your productivity with Brainwave,
                        the open AI chat app.
                    </p>
                    <Button href="/pricing" white>Get Started</Button>
                </div>
                <div className="relative max-w-[100%]  lg:max-w-[75%] mx-auto">
                    <div className="relative bg-conic-gradient p-1 rounded-2xl">
                        <div className="relative bg-n-8 rounded-2xl">
                            <div className="h-[1.5rem] bg-n-10 rounded-t-2xl" />

                            <div className='aspect-[33/40] md:aspect-[688/490] 
                                 lg:aspect-[1024/490] overflow-hidden '>
                                <img className='md:-translate-y-[20%]' src={robot}
                                    width={1000} height={498} alt="" />
                                <ScrollParallax>
                                    {heroIcons.map((icon, index) => (
                                        <img src="" key={index} />
                                    ))}


                                </ScrollParallax>
                            </div>
                        </div>
                    </div>
                    <div className="-z-1 absolute -top-[30%] md:-top-[50%] 
                        lg:-top-[70%] left-0 ">
                        <img src={heroBackground} alt="hero background"
                            width={1400} />
                    </div>

                </div>
            </div>
        </Section>
    )
}

export default Hero