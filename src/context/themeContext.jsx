"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("#1C1C20");
  const value = { theme, setTheme };

  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") {
      setTheme(() => "#1C1C20");
    }
  });

  return (
    <ThemeContext.Provider value={value}>
      <body style={{ backgroundColor: `${theme}`, transition: "background-color 0.3s ease" }}>{children}</body>
    </ThemeContext.Provider>
  );
}

export function ThemeToggle({ children, data }) {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    setTheme(data);
  });

  return children;
}
