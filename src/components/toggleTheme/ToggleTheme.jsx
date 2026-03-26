import React from "react";

import Button from "../button/Button";

import "./ThemeToggle.css";
import { useTheme } from "../../context/ThemeContext";

export default function ToggleTheme() {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button className="theme-toggle" onClick={toggleTheme}>
      {theme === "light" ? "🌙" : "🌞"}
    </Button>
  );
}
