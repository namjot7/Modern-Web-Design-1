import { lines } from "../../assets";

const lineProps='hidden lg:block absolute top-1/2  w-[92.5rem] h-[11.0625rem] -translate-y-1/2 pointer-events-none';


export const LeftLine = () => {
  return (
    <div className={`right-full ${lineProps}`}>
      <img
        className="w-full"
        src={lines}
        width={1480}
        height={177}
        alt="Lines"
      />
    </div>
  );
};

export const RightLine = () => {
  return (
    <div className={`left-full -scale-x-100 ${lineProps}`}>
      <img
        className="w-full"
        src={lines}
        width={1480}
        height={177}
        alt="Lines"
      />
    </div>
  );
};
