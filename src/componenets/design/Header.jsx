import { background } from "../../assets";

// Rings 
// A square is converted to circle using rounded-full
// Then, circle is centered using: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
// width is set to increase size of circle leading to showing rings on different positions
export const Rings = () => {
    return (
        <div className="aspect-square rounded-full border border-n-2/15
                absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                w-[53.125rem]">
            <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/15 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/15 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        </div>
    );
};

// Create a div with background, convert div into a line (Vertically)
export const SideLines = () => {
    return (
        <>
            <div className="absolute top-0 left-5 w-[2px] h-[100vh] bg-stroke-1"></div>
            <div className="absolute top-0 right-5 w-[2px] h-[100vh] bg-stroke-1"></div>
        </>
    );
};

// Div with gradient bg, converted into circles
export const BackgroundCircles = () => {
    return (
        <>
            <div className="absolute md:hidden top-[9rem] left-16 w-4 h-4 
                 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full"></div>
            <div className="absolute md:hidden top-[10rem] right-16 w-4 h-4 
                 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full"></div>
            <div className="absolute md:hidden top-[30rem] left-12 w-6 h-6 
                 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full"></div>
        </>
    );
};

export const HamburgerMenu = () => {
    return (
        <div className="absolute md:hidden inset-0 pointer-events-none lg:hidden">
            <div className="absolute md:hidden inset-0 opacity-[0.03]">
                <img className="w-full h-full object-cover" alt="Background"
                    src={background} width={688} height={953} />
            </div>
            <Rings />
            <SideLines />
            {/* <BackgroundCircles /> */}
        </div>
    );
};
