import React from "react";
import { memo ,useRef} from "react";
type CardProps = {
  className?: string;
  hover:string;
  focus:string;
  name:string;
  role:string;
  email:string;
  Status:string;
};

 const Card: React.FC<CardProps> = ({ className,focus,hover,name,role,email,Status }) => {
  const getStatus=(status:string)=>{
  return status === "Active"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
  }
  const renderCount = useRef(0);

  renderCount.current += 1;

  console.log(`Card rendered: ${renderCount.current} times`);

  return (
    <div  tabIndex={0}
      className={`${className} ${hover} ${focus} bg-white shadow-md rounded-lg p-4 border hover:shadow-lg transition space-y-2 danger w-50 mt-5 mb-5 `}
    >
      {/* {children} */}
          <h2 className="text-lg font-bold">{name}</h2>
          
          <p className="text-gray-600">{role}</p>
          
          <p className="text-sm text-gray-500">{email}</p>

          <span
            className={`inline-block px-2 py-1 text-xs rounded 
            ${getStatus(Status)}`}>
            {Status}
          </span>
    </div>
  );
};
export default memo(Card);