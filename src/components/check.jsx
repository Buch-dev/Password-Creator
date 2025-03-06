import * as React from "react";

const CheckSvgIcon = ({ width = "14", height = "12", stroke = "#18171F", strokeWidth = "3", ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} {...props}>
        <path
            fill="none"
            stroke={stroke}
            strokeWidth={strokeWidth}
            d="M1 5.607 4.393 9l8-8"
        ></path>
    </svg>
);

const Check = ({ isChecked }) => (
    <div>
        {isChecked && <CheckSvgIcon />}
    </div>
);

export default Check;