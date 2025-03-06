import * as React from "react";

const ArrowSvgIcon = ({ width = 12, height = 12, fill = "#24232C", ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} {...props}>
        <path
            fill={fill}
            d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"
        ></path>
    </svg>
);

export default ArrowSvgIcon;
