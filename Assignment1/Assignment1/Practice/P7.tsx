import { useEffect, useRef } from "react";

 function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef<() => void>(() => {});

  //  Always keep latest callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  //  Handle interval
  useEffect(() => {
    if (delay === null) return;

    const id = setInterval(() => {
      savedCallback.current(); // always latest callback
    }, delay);

    return () => clearInterval(id);
  }, [delay]);
}

export default useInterval;
//deeper
//Including callback in dependencies causes the interval to reset on every render because functions are re-created.Using a ref allows us to always call the latest callback without restarting the interval.