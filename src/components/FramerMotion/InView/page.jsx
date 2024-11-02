"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function InView({ children, color }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // useEffect(() => {
  //   console.log("Element is in view: ", isInView);
  // }, [isInView]);

  // return (
  //   <div ref={ref} style={{ width: "100%", height: "100%" }}>
  //     {children}
  //   </div>
  // );

  return (
    <div ref={ref} style={{ width: "100%", height: "100%", backgroundColor: color }}>
      <div style={{ width: "100%", height: "100%", opacity: isInView ? 1 : 0, transition: "opacity 0.3s ease" }}>{children}</div>
    </div>
  );
}
