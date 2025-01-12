import { brainwaveSymbol, check } from "../assets";
import { collabApps, collabContent, collabText } from "../constants";
import Button from "./Button";
import { LeftCurve, RightCurve } from "./design/Collaboration";
import Section from "./design/Section";

const Collaboration = () => {
    return (
        // remove paddings after completing the section
        <Section crosses customPaddings="py-20">
            <div className="container lg:flex">
                {/* Theory */}
                <div className="max-w-[25rem]">
                    <h2 className="h2 mb-4 lg:mb-8">
                        AI Chat App for seamless collaboration
                    </h2>
                    <ul className="max-w-[22rem] mb-4 lg:mb-8">
                        {collabContent.map((item) => (
                            <li key={item.id} className="mb-3m py-3">
                                <div className="flex gap-3">
                                    <img src={check} alt="" width={24} height={24} />
                                    <h6 className="body-2">{item.title}</h6>
                                </div>
                                {item.text && <p className="body-2 mt-3 text-n-4">
                                    {item.text}
                                </p>}
                            </li>
                        ))}
                    </ul>
                    <Button>Try it Now</Button>
                </div>

                {/* Logos illustration */}
                <div className="lg:ml-auto xl:w-[38rem] mt-4">
                    <p className="body-2 text-n-4 mb-8 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
                        {collabText}
                    </p>
                    {/* Brainwave logo and two black circles */}
                    <div className="relative flex w-[22rem] left-1/2 -translate-x-1/2 aspect-square scale-75 md:scale-100 border border-n-10 rounded-full">
                        <div className="flex w-60  aspect-square m-auto border border-n-10 rounded-full">
                            <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                                <div className="flex-center w-full h-full bg-n-8 rounded-full">
                                    <img src={brainwaveSymbol} width={48} height={48} className="m-auto" alt="brainwave" />
                                </div>
                            </div>
                        </div>
                        {/* Other Logos */}
                        {/* 45 * 8 (Total logos) = 360 degrees */}
                        <ul>
                            {collabApps.map((item, index) => (
                                <li key={index}
                                    className={`rotate-${index * 45} absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom`}
                                >
                                    <div className={`-rotate-${index * 45} relative flex-center -top-[1.6rem] h-[3.2rem] w-[3.2rem] border border-n-10 rounded-full`}>
                                        <img src={item.icon} alt=""
                                            width={item.width} height={item.height} />
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <LeftCurve/>
                        <RightCurve/>
                    </div>

                </div>
            </div>
        </Section>
    );
};

export default Collaboration;
