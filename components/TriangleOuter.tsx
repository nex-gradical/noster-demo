import React from "react";

const OutlinedTriangle = ({
  className = "",
  size = 20,
  strokeColor = "black",
  strokeWidth = 0.3,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
     
    >
      <polygon
        points="50,15 90,85 10,85"
        fill="none"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default OutlinedTriangle;
