// DiagonalDivider.jsx
import React from "react";

const DiagonalDivider = () => {
  return (
    <div className="relative w-full overflow-hidden leading-[0]">
      <svg
        viewBox="0 0 500 100"
        preserveAspectRatio="none"
        className="w-full h-20"
      >
        <polygon points="0,100 500,0 500,100" className="#FF8282" />
      </svg>
    </div>
  );
};

export default DiagonalDivider;
