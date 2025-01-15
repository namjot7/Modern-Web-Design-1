import { benefits } from "../constants"
import Section from "./design/Section"
import Heading from "./Heading"
import React from "react"
import Arrow from "../assets/svg/Arrow"
import { GradientLight } from "./design/Benefits"
import ClipPath from "../assets/svg/ClipPath"

const Benefits = () => {
    return (
        <Section id='features'>
            <div className="container relative z-10">
                <Heading
                    className="md:max-w-md lg:max-w-2xl"
                    title="Chat Smarter, Not Harder with Brainwave"
                />
                {/* Benefits Cards */}
                <div className="relative z-2 flex flex-wrap justify-center gap-10 mb-10">
                    {benefits.map(item => (
                        <div key={item.id}
                            className="z-2 block relative p-0.5 bg-no-repeat bg-[length:100%_100%] max-w-[24rem]"
                            style={{
                                backgroundImage: `url(${item.backgroundUrl})`
                            }}>
                            <div className="z-2 relative flex flex-col min-h-[22rem] p-10 ">
                                <h5 className="h5 mb-5">
                                    {item.title}
                                </h5>
                                <div className="body-2 mb-6 text-n-3/90">
                                    {item.text}
                                </div>
                                <div className="flex items-center mt-auto">
                                    <img src={item.iconUrl} alt={item.iconUrl}
                                        width={48} height={48} />
                                    <p className="font-code uppercase text-xs font-semibold text-n-1 tracking-wider ml-auto">Explore more</p>
                                    <Arrow />
                                </div>
                            </div>
                            {/* Background Light effect in some cards */}
                            {item.light && <GradientLight />}

                            {/* Bg image for card */}
                            <div
                                className="absolute inset-0.5 bg-n-7/80"
                                style={{ clipPath: "url(#benefits)" }}
                            >
                                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-100">
                                    {item.imageUrl && (
                                        <img
                                            src={item.imageUrl}
                                            width={380}
                                            height={362}
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                        />
                                    )}
                                </div>
                            </div>
                            <ClipPath/>
                        </div>
                    ))}
                </div>
            </div>
            <GradientLight />
        </Section>
    )
}

export default Benefits