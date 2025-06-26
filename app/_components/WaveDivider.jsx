import React from "react";

function WaveDivider() {
  return (
    <div className="w-full -mt-1 overflow-hidden leading-none">
      <svg
        viewBox="0 0 1440 320"
        className="w-full h-32"
        preserveAspectRatio="none"
      >
        <path
          fill="#FF8282" // tailwind red-100 (same as your `from-red-100`)
          d="M0,192L48,202.7C96,213,192,235,288,245.3C384,256,480,256,576,224C672,192,768,128,864,128C960,128,1056,192,1152,186.7C1248,181,1344,107,1392,69.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
}

export default WaveDivider;
