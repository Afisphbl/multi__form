import React from "react";
import { useContextApi } from "../../context/useContextApi";
import Button from "../button/Button";

import "./ThemeToggle.css";
import { useTheme } from "../../context/ThemeCntext";

export default function ToggleTheme() {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button className="theme-toggle" onClick={toggleTheme}>
      {theme === "light" ? "🌙" : "🌞"}
    </Button>
  );
}
