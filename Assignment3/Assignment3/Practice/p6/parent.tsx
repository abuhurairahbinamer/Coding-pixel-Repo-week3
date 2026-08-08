import { useState, useMemo } from "react";
import { IdChild, ChildrenChild } from "./Child";

export default function P6() {
  const [count, setCount] = useState(0);

  // DEEPER: Stabilizing children using useMemo
  const memoizedChildren = useMemo(() => <span>Memoized Child Text</span>, []);

  return (
    <div className="p-4 space-y-4">
        <p className="my-4 mx-2 p-4 bg-cyan-700/80 w-80 text-center "><b>P6 task done with deeper below</b></p>

      <button
        className="p-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 cursor-pointer"
        onClick={() => setCount((c) => c + 1)}
      >
        Re-render Parent ({count})
      </button>

      <div className="space-y-3">
        {/* Case 1: id-only child (primitive string -> React.memo STOPS re-rendering) */}
        <div>
          <p className="font-semibold text-sm">1. IdChild (id="item-123"):</p>
          <IdChild id="item-123" />
        </div>

        {/* Case 2: inline children (fresh object reference -> React.memo FAILS to stop re-rendering) */}
        <div>
          <p className="font-semibold text-sm">2. ChildrenChild (inline children):</p>
          <ChildrenChild status={'unmemoized'}>
            <span>Inline Children Text</span>
          </ChildrenChild>
        </div>

        {/* Case 3: DEEPER - memoized children (stable reference -> React.memo STOPS re-rendering) */}
        <div>
          <p className="font-semibold text-sm">3. ChildrenChild (memoized children - DEEPER):</p>
          <ChildrenChild  status={'memoized'}>{memoizedChildren}</ChildrenChild>
        </div>
      </div>
    </div>
  );
}

// DEEPER explanation:
// React.memo compares props shallowly. The `id: string` is a primitive value, so its value comparison remains equal and React.memo skips re-renders.
// `children` is a React element object created fresh on every render. Because its object reference changes on every parent render, React.memo cannot bail out unless `children` is stabilized using useMemo or hoisted outside the component.
