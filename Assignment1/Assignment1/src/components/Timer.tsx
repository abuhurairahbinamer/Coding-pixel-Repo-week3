import { useEffect, useState } from "react";

function Timer() {
const [count, setCount] = useState(0);

useEffect(() => {
console.log("Effect started");


const id = setInterval(() => {
  setCount((c) => c + 1); //  safe update (no dependency needed)
}, 1000);

return () => {
  clearInterval(id); //  cleanup on unmount
  console.log("Cleanup ran");
};


}, []); 

return <p>Timer: {count}</p>;
}
export default Timer