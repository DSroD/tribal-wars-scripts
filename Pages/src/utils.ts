import { MutableRef, useEffect } from "preact/hooks";

// source: https://usehooks.com/useOnClickOutside/
export function useOnClickOutside<T extends HTMLElement | null>(ref: MutableRef<T>, handler: (event: MouseEvent | TouchEvent) => void) {
    useEffect(
      () => {
        const listener = (event: MouseEvent | TouchEvent) => {
          // Do nothing if clicking ref's element or descendent elements
          if (!ref.current || (event.target instanceof Node && ref.current.contains(event.target))) {
            return;
          }
          handler(event);
        };
        document.addEventListener("click", listener);
        return () => {
          document.removeEventListener("click", listener);
        };
      },
      [ref, handler]
    );
  }
