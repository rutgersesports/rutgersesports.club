import { useRef, useEffect } from "react";

export function sideScroll() {
  const reference = useRef();
  useEffect(() => {
    const el = reference.current;
    if (el) {
      const onWheel = event => {
        if (event.deltaY === 0) return;
        if (
            !(el.scrollLeft === 0 && event.deltaY < 0) &&
            !(el.scrollWidth - el.clientWidth - Math.round(el.scrollLeft) === 0 && 
                event.deltaY > 0)
          ) {
            event.preventDefault();
          }
        el.scrollBy({left:event.deltaY});
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);
  return reference
  ;
}