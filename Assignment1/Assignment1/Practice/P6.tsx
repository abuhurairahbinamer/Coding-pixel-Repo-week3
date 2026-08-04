import { useEffect,useState, useCallback } from "react";

function useEventListener( target: Window | HTMLElement | null , type: string, handler: (event: Event) => void) {
  useEffect(() => {
    if(!target) return 
    target.addEventListener(type, handler);

    return () => {
      target.removeEventListener(type, handler);
      console.log("eventListner removed")
    };
  }, [target, type, handler]);
}


// const P6 = () => {
//     const refrence=useRef<HTMLElement>(null)
//     const handler = useCallback(() => {
//   console.log("clicked");
// }, []);
//     useEventListener(refrence.current,'click',handler)
//   return (
//     <div>

// <div>
//     P6 task done with deeper <span ref={refrence} className="cursor">(click here to call addeventlistner)</span>
// </div>
//     </div>
//   )
// }

const P6 = () => {
  const [element, setElement] = useState<HTMLElement | null>(null);

  const handler = useCallback(() => {
    console.log("clicked");
  }, []);

  useEventListener(element, 'click', handler);

  return (
    <div>
      <div>
        P6 task done with deeper{" "}
        <span ref={setElement} className="cursor">
          (click here to call addeventlistener)
        </span>
      </div>
    </div>
  );
};

export default P6