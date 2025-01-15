
// Rotate the tow lines to make a "cross X" icon 
const MenuSvg = ({ showNav }) => {
  return (
    <svg
      className="overflow-visible"
      width="20"
      height="12"
      viewBox="0 0 20 12"
    >
      <rect
        className="transition-all origin-center"
        y={showNav ? "5" : "0"}
        width="20"
        height="2"
        rx="1"
        fill="white"
        transform={`rotate(${showNav ? "45" : "0"})`}
      />
      <rect
        className="transition-all origin-center"
        y={showNav ? "5" : "10"}
        width="20"
        height="2"
        rx="1"
        fill="white"
        transform={`rotate(${showNav ? "-45" : "0"})`}
      />
    </svg>
  );
};

export default MenuSvg;
