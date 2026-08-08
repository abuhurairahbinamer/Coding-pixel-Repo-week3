import React, { memo ,useRef} from "react";

type Props = {
  style: React.CSSProperties;
  onClick: () => void;
};

function Child({ style, onClick }: Props) {
   const ref=useRef(0)
    ref.current+=1
    console.log("P4 task child rendered : ",ref.current," times")
  return (
    <div style={style}>
      <button className="p-4 bg-red-500/50 rounded-2xl cursor-pointer hover:bg-red-700/50" onClick={onClick}>Click child button</button>
    </div>
  );
}

export default memo(Child);

//deeper
//If removing useMemo doesn’t break performance or behavior then  don’t use it