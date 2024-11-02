"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function InView({ children, color }) {
  const [opacity, setOpacity] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    setOpacity(() => isInView);
    console.log("Element is in view: ", isInView);
  }, [isInView, opacity]);

  return (
    <div ref={ref} style={{ width: "100%", height: "100%", backgroundColor: opacity ? color + "00" : color, transition: "background-color 0.3s ease" }}>
      {children}
    </div>
  );

  // return (
  //   <div ref={ref} style={{ width: "100%", height: "100%", backgroundColor: opacity ? color + "00" : color, transition: "background-color 1s ease" }}>
  //     <div style={{ width: "100%", height: "100%", opacity: opacity ? 1 : 0, transition: "opacity 1s ease" }}>{children}</div>
  //   </div>
  // );
}
