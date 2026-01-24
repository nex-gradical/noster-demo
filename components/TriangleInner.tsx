import React from "react";

const FilledTriangle = ({ className = "", size = 200, color = "#FF5349" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      
    >
      <polygon points="50,15 90,85 10,85" fill={color} />
    </svg>
  );
};

export default FilledTriangle;
