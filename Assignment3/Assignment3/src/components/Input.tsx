import React from "react";

type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?:string;
  focus?:string;
  hover?:string;
};

 const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  className,
  focus,
  hover
}) => {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`${focus} ${hover} px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition ${className}`}
    />
  );
};
export default Input;