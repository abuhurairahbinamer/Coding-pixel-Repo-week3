import { useRef, useEffect, useState } from "react";

function InputFocus() {
const inputRef = useRef<HTMLInputElement | null>(null);
const prevValue = useRef<string>("");

const [value, setValue] = useState("");
const [prev, setPrev] = useState("");
useEffect(() => {
inputRef.current?.focus(); //  focus without re-render
}, []);

useEffect(() => {
setPrev(prevValue.current);     
prevValue.current = value; //  store previous value (no re-render)
}, [value]);

console.log("Rendered"); //  prove re-renders only on state change

return ( 
<div>
<input
ref={inputRef}
value={value}
onChange={(e) => setValue(e.target.value)}
/> <p>Current: {value}</p> <p>Previous: {prev}</p> </div>
);
}

export default InputFocus
