import { useEffect, useState } from "react";
import PlusSvg from "../../assets/svg/PlusSvg";
import { MouseParallax } from "react-just-parallax";

// Two black colored divs to add a card effect on the Hero image
export const Gradient = () => {
	const gradientProps = "relative z-1 h-6 shadow-xl rounded-b-[1.25rem] lg:h-6";
	return (
		<>
			<div className={"mx-2.5 bg-n-11 lg:mx-8 " + gradientProps} />
			<div className={"mx-6 bg-n-11/70 lg:mx-20 " + gradientProps} />
		</>
	);
};
// One horizontal line with two Plus icons are each side
export const BottomLine = () => {
	const plusProps = "hidden absolute top-[54.9375rem] z-2 pointer-events-none xl:block";
	return (
		<>
			<div className="-z-1 hidden absolute top-[55.25rem] left-10 right-10 h-0.25 bg-n-6 pointer-events-none xl:block" />
			<PlusSvg className={"left-[2.1875rem] " + plusProps} />
			<PlusSvg className={"right-[2.1875rem] " + plusProps} />
		</>
	);
};

const Rings = () => {
	const ringsProps = "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square border border-n-2/10 rounded-full";
	return (
		<>
			<div className={"w-[65.875rem] " + ringsProps} />
			<div className={"w-[51.375rem] " + ringsProps} />
			<div className={"w-[36.125rem] " + ringsProps} />
			<div className={"w-[23.125rem] " + ringsProps} />
		</>
	);
};
// bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom
export const BackgroundCircles = ({ parallaxRef }) => {
	const [mounted, setMounted] = useState(false);

	if (parallaxRef.current) console.log(parallaxRef.current); // parent ref

	const outerDivProps = " xl:absolute bottom-1/2 left-1/2  w-0.25 h-1/2 origin-bottom  ";
	const bgCirclesProps = ` ${mounted ? "translate-y-20 opacity-100" : "translate-y-15 opacity-0"} 
							duration-500 ease-out rounded-full `;

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<div className="absolute z-1 -top-[42.375rem] left-1/2 w-[78rem] aspect-square border border-n-2/5 rounded-full -translate-x-1/2 md:-top-[38.5rem] xl:-top-[32rem]">
			<Rings />

			{/* Moving background colored circle balls */}
			{/* Structure: outer divs to rotate them and inner divs are bg circles */}
			{parallaxRef.current && <MouseParallax strength={0.07} parallaxContainerRef={parallaxRef}>
				<div className={outerDivProps + " rotate-[46deg]"}>
					<div className={`w-4 h-4 -ml-1 -mt-36 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] ${bgCirclesProps}`} />
				</div>
				<div className={outerDivProps + " rotate-[54deg]"}>
					<div className={`w-4 h-4 -ml-1 -mt-32 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] xl:block transit ${bgCirclesProps}`} />
				</div>
				<div className={outerDivProps + " -rotate-[56deg]"}>
					<div className={`w-4 h-4 -ml-1 mt-[12.9rem] bg-gradient-to-b from-[#DD734F] to-[#1A1A32] ${bgCirclesProps}`} />
				</div>
				<div className={outerDivProps + " -rotate-[65deg]"}>
					<div className={`w-4 h-4 ml-[20rem] -mt-24 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] ${bgCirclesProps}`} />
				</div>
				<div className={outerDivProps + " rotate-[70deg]"}>
					<div className={`w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] ${bgCirclesProps}`} />
				</div>
				<div className={outerDivProps + " -rotate-[85deg]"}>
					<div className={`w-6 h-6 ml-12 -mt-12 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] ${bgCirclesProps}`} />
				</div>
			</MouseParallax>
			}
		</div >
		// <div className="absolute -top-[42.375rem] left-1/2 w-[78rem] aspect-square border border-n-2/5 rounded-full -translate-x-1/2 md:-top-[38.5rem] xl:-top-[32rem]">
		// 	<Rings />

		// 	{/* Moving background colored circle balls */}
		// 	<MouseParallax strength={0.07} parallaxContainerRef={parallaxRef}>
		// 		<div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[46deg]">
		// 			<div
		// 				className={`w-4 h-4 -ml-1 -mt-36 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
		// 					}`}
		// 			/>
		// 		</div>

		// 		<div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[56deg]">
		// 			<div
		// 				className={`w-4 h-4 -ml-1 -mt-32 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
		// 					}`}
		// 			/>
		// 		</div>

		// 		<div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[54deg]">
		// 			<div
		// 				className={`w-4 h-4 -ml-1 mt-[12.9rem] bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full xl:block transit transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
		// 					}`}
		// 			/>
		// 		</div>

		// 		<div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[65deg]">
		// 			<div
		// 				className={`w-4 h-4 -ml-1.5 mt-52 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
		// 					}`}
		// 			/>
		// 		</div>

		// 		<div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[85deg]">
		// 			<div
		// 				className={`w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
		// 					}`}
		// 			/>
		// 		</div>

		// 		<div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[70deg]">
		// 			<div
		// 				className={`w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
		// 					}`}
		// 			/>
		// 		</div>
		// 	</MouseParallax>
		// </div>
	);
};
