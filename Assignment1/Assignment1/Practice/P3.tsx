import React from 'react'
import { useState,useEffect } from 'react'
const useDebouncedValue=<T,>(value:T,delay:number)=>{

const [Textvalue,setTextValue]=useState(value)
useEffect(()=>{
const timer=setTimeout(()=>{
setTextValue(value);
},delay)
return ()=>clearTimeout(timer)
},[value,delay]);// i was using []

return Textvalue;
}
const P3 = () => {
const [value,setValue]=useState('');
const result=useDebouncedValue(value,5000);
console.log("p3 task done with deeper : ",result)
const func=(e: React.ChangeEvent<HTMLInputElement>)=>{
setValue(e.target.value);
}
  return (
    <div>
        <br /><br />
        p3 task done with deeper
    <div><input type="text"  onChange={func}/></div>
    <div><span>Result : </span><span>{result}</span></div>
    </div>
  )
}

export default P3;
//deeper
// if we forget adding the dependency array in hook useEffect,then it will fire on every render.With cleanup old timer is cancelled and newest value is used otherwise it will use stale value