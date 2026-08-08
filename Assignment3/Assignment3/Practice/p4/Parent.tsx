import  { useState, useMemo, useCallback } from "react";
import Child from "./Child";

export default function P4() {
  const [count, setCount] = useState(0);
  const [id, setId] = useState(1);

  //  stable object
  const style = useMemo(() => ({ margin: 8 }), []);

  //  depends on id
  const handleClick = useCallback(() => {
    console.log("ID is:", id);
  }, [id]); 

  return (
    <div>
        <p className="my-4 mx-2 p-4 bg-cyan-700/80 w-80 text-center "><b>P4 task done with deeper below</b></p>
      <button className="p-4 bg-green-500/50 rounded-2xl hover:bg-green-700/50 cursor-pointer" onClick={() => setCount(count + 1)}>
        Re-render Parent ({count})
      </button>

      <button className="p-4 bg-blue-500/50 rounded-2xl hover:bg-blue-700/50 cursor-pointer"  onClick={() => setId(id + 1)}>
        Change ID ({id})
      </button>

      <Child style={style} onClick={handleClick} />
    </div>
  );
}


//deeper
//If removing useMemo doesn’t break performance or behavior then  don’t use it