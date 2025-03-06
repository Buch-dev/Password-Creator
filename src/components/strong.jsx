import * as React from "react";

const StrongSvgIcon = ({
  width = 64,
  height = 28,
  fill = "#A4FFAF",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 64 28"
    {...props}
  >
    <path
      fill={fill}
      d="M.5 0h10v28H.5zM18.5 0h10v28h-10zM36.5 0h10v28h-10zM54 0h10v28H54z"
    ></path>
  </svg>
);

export default StrongSvgIcon;
