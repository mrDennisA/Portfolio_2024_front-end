"use client";

import { createContext } from "react";
import { useLenis, ReactLenis } from "lenis/react";

import { AppContext } from "@/context/context";

export const LenisContext = createContext();

export default function SmoothScrolling({ children }) {
  const lenis = useLenis();

  return (
    <AppContext.Provider value={lenis}>
      <ReactLenis root options={{ lerp: 0.05, wheelMultiplier: 1, smoothTouch: true }}>
        {children}
      </ReactLenis>
    </AppContext.Provider>
  );
}
