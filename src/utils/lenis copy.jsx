"use client";

import { useEffect } from "react";

import Lenis from "lenis";

export default function SmoothScrolling({ children }) {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.05, wheelMultiplier: 1.5 });

    // lenis.on("scroll", (e) => {
    //   console.log(e);
    // });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return children;
}
