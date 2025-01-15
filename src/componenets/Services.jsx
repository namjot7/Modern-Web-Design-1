import { check, service1, service2, service3 } from "../assets"
import { brainwaveServices, brainwaveServicesIcons } from "../constants"
import Section from "./design/Section"
import { Gradient, PhotoChatMessage, VideoBar, VideoChatMessage } from "./design/Services"
import Generating from "./Generating"
import Heading from "./Heading"

const Services = () => {
    return (
        // remove paddings after completing the section
        <Section customPaddings="py-20">
            <div className="container bg-n-7">
                <Heading
                    title="Generative AI made for creators."
                    text='Brainwave unlocks the potential of AI-powered applications'
                />
                <div className="relative">

                    {/* First box: MAIN */}
                    <div className="relative bg-n-8 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
                        <div className="absolute top-0 left-0 w-full h-full md:w-3/5 xl:w-auto pointer-events-none">
                            <img src={service1}
                                className="w-full h-full object-cover md:object-right"
                                width={800} height={730} alt="Smartest AI"
                            />
                        </div>
                        <div className="relative max-w-[17rem] ml-auto">
                            <h4 className="h4 mb-4">Smartest AI</h4>
                            <p className="body-2 text-n-3 mb-[3rem]">
                                Brainwave unlocks the potential of AI-powered applications
                            </p>
                            <ul className="body-2">
                                {brainwaveServices.map((item, index) => (
                                    <li className="flex gap-3 items-start border-t border-n-6 py-4" key={index}>
                                        <img src={check} alt="" />
                                        <p>{item}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Generating className='absolute left-4 right-4 bottom-4 border-n-1/15 border lg:bottom-8 lg:left-1/2 lg:-translate-x-1/2 ' />
                    </div>

                    {/* Two boxes in a Grid layout */}
                    <div className="relative z-1 grid lg:grid-cols-2 gap-5">
                        {/* Second */}
                        <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
                            <div className="absolute inset-0">
                                <img src={service2} alt=""
                                    width={630} height={750}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute inset-0 flex flex-col justify-end  bg-gradient-to-b from-n-8/0 to-n-8/90 p-8 lg:p-15">
                                <h4 className="h4 mb-4">Photo editing</h4>
                                <p className="body-2 text-n-3 mb-[3rem]">
                                    Automatically enhance your photos using our AI app&apos;s photo editing feature. Try it now!
                                </p>
                            </div>
                            <PhotoChatMessage />
                        </div>
                        {/* Third */}
                        <div className="bg-n-7 lg:min-h-[46rem] rounded-3xl p-4 overflow-hidden">
                            <div className="py-12 px-4 lg:px-8">
                                <h4 className="h4 mb-4">Video generation</h4>
                                <p className="body-2 text-n-3 mb-[2rem]">
                                    The world’s most powerful AI photo and video art generation engine. What will you create?
                                </p>
                                {/* Icons */}
                                <ul className="flex gap-3items-center justify-between">
                                    {brainwaveServicesIcons.map((item, index) => (
                                        <li key={index} className={`${index == 2 ? 'bg-conic-gradient w-[3rem] h-[3rem] md:w-[4.5rem] md:h-[4.5rem]' : 'flex justify-center w-10 h-10 md:w-15 md:h-15 bg-n-6'} p-0.25 rounded-[1rem] `}>
                                            <img src={item} alt="" height={24} width={24}
                                                className={`${index == 2 ? 'bg-n-7 w-full h-full p-3 md:p-5 rounded-[1rem]' : ''} `} />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="relative">
                                <img src={service3} alt="Scary robot" width={520} height={400} className="h-full w-full object-cover" />

                                <VideoChatMessage />
                                <VideoBar />
                            </div>
                        </div>
                    </div>
                    <Gradient />
                </div>
            </div>
        </Section>
    )
}

export default Services