import  { useState } from "react";
import Child from "./child";

const P7 = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
         <p className="my-4 mx-2 p-4 bg-cyan-700/80 w-80 text-center "><b>P7 task done with deeper below</b></p>
      <button className="bg-blue-600 p-4 rounded-2xl hover:bg-blue-700/50 hover:cursor-pointer" onClick={() => setCount(count + 1)}>
        Re-render Parent
      </button>

      <Child />
    </div>
  );
};

export default P7;


//Deeper
// In React development mode, <React.StrictMode> intentionally double-invokes render functions to help catch side-effects. To keep render count measurements honest during testing, you can either temporarily comment out <React.StrictMode> in main.tsx or run a production build (npm run build && npm run preview), where StrictMode double-rendering is automatically disabled.