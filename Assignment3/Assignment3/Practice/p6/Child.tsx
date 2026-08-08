import React, { memo, useRef } from "react";

// 1. Component taking only id (primitive string)
type IdChildProps = {
  id: string;
};

export const IdChild = memo(function IdChild({ id }: IdChildProps) {
  const ref = useRef(0);
  ref.current += 1;
  console.log("p6 task : IdChild (id: string) rendered:", ref.current, "times");

  return <div className="p-2 bg-green-100 border border-green-400 rounded">ID: {id}</div>;
});

// 2. Component taking status as primitive children (React.ReactNode)
type ChildrenChildProps = {
  children: React.ReactNode;
  status:"memoized" | "unmemoized"
};

export const ChildrenChild = memo<ChildrenChildProps>(({ children, status }) => {
  const ref = useRef(0);
  ref.current += 1;
  console.log(`P6 task : ${status} children rendered: ${ref.current} times`);

  return <div className="p-2 bg-yellow-100 border border-yellow-400 rounded">{children}</div>;
});