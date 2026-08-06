import { useRef, useEffect, useState } from "react";

function usePrevious<T>(inputvalue:T) {
const prevValue = useRef(inputvalue);

 useEffect(() => {
    prevValue.current = inputvalue; // Runs AFTER render/paint
  }, [inputvalue]);

console.log("P4 Rendered"); 
if(prevValue.current===inputvalue) return "(no previous value exits.this is mount phase)"
return prevValue.current;

}


import React from 'react'

const p4 = () => {
    const [val,setval]=useState('')
   const result=usePrevious(val);
console.log("p4 task done with deeper : ",result)
const call=(e:React.ChangeEvent<HTMLInputElement>)=>{
setval(e.target.value)
}
  return (
    <>
    <div>p4 task done with deeper</div>
    <div><input type="text" onChange={call} /></div>
    </>
  )
}

export default p4

//deeper
//ref.current stores previous value as ref.current is in useEffect so it is being assigned value after render