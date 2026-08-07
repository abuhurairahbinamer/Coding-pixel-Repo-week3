import React from "react";

import { memo,useRef } from "react";
type SpinnerProps = {
  size?: "sm" | "md" | "lg";
  color?: "blue" | "gray" | "red" | "green";
  focus?:string;
  hover?:string;

};

const sizeStyles = {
  sm: "w-4 h-4 border-2",
  md: "w-6 h-6 border-3",
  lg: "w-10 h-10 border-4",
};

const colorStyles = {
  blue: "border-blue-500",
  gray: "border-gray-400",
  red: "border-red-500",
  green: "border-green-500",
};

const Spinner: React.FC<SpinnerProps> = ({
  size = "md",
  color = "blue",
  focus,
  hover,
}) => {
const renderCount = useRef(0);

  renderCount.current += 1;

  console.log(`spinner rendered: ${renderCount.current} times`);

  return (
    <div tabIndex={0}
      className={`
        ${focus}
        ${hover}
        ${sizeStyles[size]}
        ${colorStyles[color]}
        border-t-transparent
        rounded-full
        animate-spin
      `}
    />
  );
};

export default memo(Spinner);