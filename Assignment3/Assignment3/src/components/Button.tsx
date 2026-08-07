import React from "react";
import { memo,useRef } from "react";
type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  hover:string;
  focus:string;
};

const variantStyles = {
  primary: "bg-blue-500 hover:bg-blue-600 text-white",
  secondary: "bg-gray-200 hover:bg-gray-300 text-black",
  danger: "bg-red-500 text-white",
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  onClick,
  hover,
  focus
}) => {
const renderCount = useRef(0);

  renderCount.current += 1;

  console.log(`button rendered: ${renderCount.current} times`);

  return (
    <button
      onClick={onClick}
      className={`${variantStyles[variant]} ${hover} ${focus} px-4 py-2 rounded-md font-medium transition  `}
    >
      {children}
    </button>
  );
};
export default memo(Button);