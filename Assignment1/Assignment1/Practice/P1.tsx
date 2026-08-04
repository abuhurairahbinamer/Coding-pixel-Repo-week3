// import {useState ,useCallback,useEffect} from "react";

// function useToggle(initial:boolean = false) {
//   const [on, setOn] = useState(initial);

//   const toggle = useCallback(() => {
//     setOn(v => !v);
//   }, []);

//   return [on, toggle] as const;
// }

// export default function ToggleP1Task() {
// const [isOpen, toggle] = useToggle(false);
// useEffect(()=>{
// toggle();
// toggle();
// toggle();

// },[])
// useEffect(() => {
//  console.log('p1 task done with deeper (calling toggle twice with initial value=false) : ',isOpen)
// }, [isOpen]);
// return null
// }

import { useState, useCallback, useEffect, useRef } from "react";

function useToggle(initial: boolean = false) {
  const [on, setOn] = useState(initial);

  const toggle = useCallback(() => {
    setOn(v => !v);
  }, []);

  return [on, toggle] as const;
}

export default function ToggleP1Task() {
  const [isOpen, toggle] = useToggle(false);
  const hasRun = useRef(false); //  guard

  useEffect(() => {
    if (hasRun.current) return; // stop second run
    hasRun.current = true;

    toggle();
    toggle();
  }, []);
console.log('p1 task done with deeper (calling toggle twice with initial value=false) : ',isOpen)


  return "";
}
