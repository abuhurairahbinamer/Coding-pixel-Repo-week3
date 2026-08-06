import { useState } from "react";

function useToggle(initial: boolean = false) {
const [value, setValue] = useState(initial);

const toggle = () => setValue((v) => !v);

return [value, toggle] as const;
}
// using the hook
export default function ToggleComponent() {
const [isOpen, toggle] = useToggle(false);

return ( <div> <button onClick={toggle}>
{isOpen ? "Close" : "Open"} </button>
{isOpen && <p>Content visible</p>} </div>
);
}
