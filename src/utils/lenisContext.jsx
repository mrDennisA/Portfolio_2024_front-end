"use client";

import { createContext } from "react";

import { useLenis, ReactLenis } from "lenis/react";

export const LenisContext = createContext();

export default function LenisContextProvider({ children }) {
  const lenis = useLenis();

  return (
    <LenisContext.Provider value={lenis}>
      <ReactLenis
        root
        options={{
          lerp: 0.05,
          wheelMultiplier: 1,
          smoothTouch: true,
        }}
      >
        {children}
      </ReactLenis>
    </LenisContext.Provider>
  );
}
