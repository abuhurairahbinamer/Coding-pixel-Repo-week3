import React, { useRef } from "react";

const Child = React.memo(() => {
  const renderCount = useRef(0);

  renderCount.current += 1;

  console.log("p7 task : Child render count:", renderCount.current);

  return <div>Child Component</div>;
});

export default Child;


//Deeper
// In React development mode, <React.StrictMode> intentionally double-invokes render functions to help catch side-effects. To keep render count measurements honest during testing, you can either temporarily comment out <React.StrictMode> in main.tsx or run a production build (npm run build && npm run preview), where StrictMode double-rendering is automatically disabled.