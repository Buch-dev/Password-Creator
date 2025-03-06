import * as React from "react";

const TooWeakSvgIcon = ({
  width = 65,
  height = 28,
  fillColor = "#F64A4A",
  strokeColor = "#E6E5EA",
  strokeWidth = 2,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 65 28"
  >
    <path fill={fillColor} d="M.5 0h10v28H.5z"></path>
    <path
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      d="M19 1h8v26h-8zM37 1h8v26h-8zM55.5 1h8v26h-8z"
    ></path>
  </svg>
);

export default TooWeakSvgIcon;
