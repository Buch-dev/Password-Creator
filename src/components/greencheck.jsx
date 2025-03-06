import * as React from "react";

const GreenSvgIcon = ({
  width = 20,
  height = 20,
  fill = "#A4FFAF",
  stroke = "#18171F",
  strokeWidth = 3,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 20 20"
  >
    <path fill={fill} d="M0 0h20v20H0z"></path>
    <path
      stroke={stroke}
      strokeWidth={strokeWidth}
      d="M4 10.607 7.393 14l8-8"
    ></path>
  </svg>
);

export default GreenSvgIcon;
