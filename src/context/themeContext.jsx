"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { AppContext } from "./context";

const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("");
  const value = { theme, setTheme };

  return (
    <ThemeContext.Provider value={value}>
      <body style={{ backgroundColor: `${theme}`, transition: "background-color 0.6s ease" }}>{children}</body>
    </ThemeContext.Provider>
  );
}

export function ThemeToggle({ children, data }) {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    setTheme(data);
  }, []);

  return children;
}
