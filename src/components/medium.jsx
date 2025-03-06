import * as React from "react";

const MediumSvgIcon = ({
  width = 65,
  height = 28,
  fill = "#F8CD65",
  stroke = "#E6E5EA",
  strokeWidth = 2,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 65 28"
    {...props}
  >
    <path
      fill={fill}
      d="M.5 0h10v28H.5zM18.5 0h10v28h-10zM36.5 0h10v28h-10z"
    ></path>
    <path stroke={stroke} strokeWidth={strokeWidth} d="M55.5 1h8v26h-8z"></path>
  </svg>
);

export default MediumSvgIcon;
