import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useContextApi = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useContextApi must be used within a contextProvider");
  }

  return context;
};
