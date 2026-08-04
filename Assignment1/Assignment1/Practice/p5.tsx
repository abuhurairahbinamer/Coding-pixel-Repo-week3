
import { useState,useEffect,useMemo } from 'react'
const p5 = () => {
    const [count,setCount]=useState(0)
//     useEffect(() => {
//   setCount(count + 1);
// }, [count]); //  causes loop

//fix
useEffect(() => {
  setCount(c => c + 1);
}, []); //  runs once


//deeper
const obj = useMemo(() => ({}), []);
useEffect(() => {
  setCount(c => c + 1);
}, [obj]); 


console.log("p5 task done with deeper:",count)
  return ''
}

// deeper -->empty array/object litral in dependency array create new array/object so they have new refrecne.react compares new with old so they dont match so it causes re-rendering (loop) .we can stablize it with useMemo or useCallback.


export default p5