"use client";

import { useContext, useState, useEffect } from "react";
import { AppContext } from "./context";

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("#1C1C20");
  const value = { theme, setTheme };

  return (
    <ThemeContext.Provider value={value}>
      <body style={{ backgroundColor: `${theme}` }}>
        <div className="wrapper">{children}</div>
      </body>
    </ThemeContext.Provider>
  );
}

export function ThemeToggle({ children, data }) {
  const { theme, setTheme } = useContext(AppContext);

  useEffect(() => {
    setTheme(data);
  });

  return children;
}
