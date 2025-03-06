import React from "react";
import GreenSvgIcon from "./greencheck";

const Square = ({ checked }) => (
  <div
    className={`w-6 h-6 border-2 flex items-center justify-center ${
      checked ? "bg-green-500" : "bg-transparent"
    }`}
  >
    {checked && <GreenSvgIcon />}
  </div>
);

export default Square;
