"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

//Util
import { LenisContext } from "@/utils/lenisContext";

const ThemeContext = createContext();

export const colorBG = "#1C1B20";

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("");
  const value = { theme, setTheme };

  const pathname = usePathname();
  const lenis = useContext(LenisContext);

  useEffect(() => {
    if (lenis) {
      lenis.stop();
      lenis.start();
    }
    if (pathname === "/") {
      setTheme(() => colorBG);
    }
  }, [pathname]);

  return (
    <ThemeContext.Provider value={value}>
      <body style={{ backgroundColor: `${theme}`, transition: "background-color 0.6s ease" }}>{children}</body>
    </ThemeContext.Provider>
  );
}

export function ThemeToggle({ children, data }) {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    setTheme(() => data);
  }, [data]);

  return children;
}
