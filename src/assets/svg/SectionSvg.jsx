import PlusSvg from "./PlusSvg";

const SectionSvg = ({ crossesOffset }) => {
   return (
      <>
         <PlusSvg
            className={`hidden md:block absolute -top-[0.3125rem] left-[1.5625rem] xl:left-[2.1875rem] 
            ${crossesOffset && crossesOffset} pointer-events-none `} />

         <PlusSvg
            className={`hidden md:block absolute -top-[0.3125rem] right-[1.5625rem] xl:right-[2.1875rem]
            ${crossesOffset && crossesOffset} pointer-events-none `} />
      </>
   );
};

export default SectionSvg;
