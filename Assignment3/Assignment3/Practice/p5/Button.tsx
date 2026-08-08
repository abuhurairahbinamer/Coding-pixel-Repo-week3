import React from "react";
import { memo} from "react";
type ButtonProps = {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "danger";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  size:'sm' | 'md' | 'lg';
  disabled:boolean;
  hover?:string;
  focus?:string;
}& React.ButtonHTMLAttributes<HTMLButtonElement>; //---->Deeper

const variantStyles = {
  primary: "bg-blue-500",
  secondary: "bg-gray-200",
  danger: "bg-red-500 text-white",
};
const sizeStyle={
  sm:"text-lg px-2 py-1",
  md:"text-xl px-4 py-2",
  lg:"text-2xl px-5 py-3",
}
const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  onClick,
  hover,
  focus,
  size,
  disabled,
  ...rest      //---->Deeper
}) => {

  return (<>
        <p className="my-4 mx-2 p-4 bg-cyan-700/80 w-80 text-center "><b>P5 task done with deeper below</b></p>
    <button
    disabled={disabled}
      onClick={onClick}
      className={`${variantStyles[variant]} ${sizeStyle[size]} ${hover} ${focus}  rounded-md  transition  `}
      {...rest} //---->Deeper
   >
      {children}
    </button>
    </>
  );
};
export default memo(Button);