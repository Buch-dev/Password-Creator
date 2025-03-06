import * as React from "react";

const WeakSvgIcon = ({
  width = 65,
  height = 28,
  fill1 = "#FB7C58",
  fill2 = "#E6E5EA",
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
    <path fill={fill1} d="M.5 0h10v28H.5zM18.5 0h10v28h-10z"></path>
    <path
      stroke={fill2}
      strokeWidth="2"
      d="M37 1h8v26h-8zM55.5 1h8v26h-8z"
    ></path>
  </svg>
);

export default WeakSvgIcon;
