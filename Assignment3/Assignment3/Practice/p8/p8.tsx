import  { useState } from "react";

const Row = ({ label }: { label: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ margin: "10px", border: "1px solid black" }}>
      <button onClick={() => setOpen(!open)}>
        {label} {open ? "🔓" : "🔒"}
      </button>
    </div>
  );
};

export default function P8() {
  const [items, setItems] = useState(["A", "B", "C"]);

  const reverseList = () => {
    setItems([...items].reverse());
  };

  return (
    <div>
      <p className="my-4 mx-2 p-4 bg-cyan-700/80 w-80 text-center "><b>P8 task done with deeper below</b></p>
      <p>click the lock icon and then click the reverse button and then see the defect of index as key</p>
      <button className="bg-red-500/50 rounded-2xl cursor-pointer hover:bg-red-700/50 p-4" onClick={reverseList}>Reverse List</button>
         <p>with key as index</p>
      {items.map((item, index) => (
        <Row key={index} label={item} />
      ))}
      <br /><br />
      <p>with key not as index</p>
       {items.map((item) => (
        <Row key={item} label={item} />
      ))}
    </div>
  );
}


//Deeper
//When is index key safe?
//Only in these cases:

//1) List never changes order
//2) Items never removed
//3) Items only added at end