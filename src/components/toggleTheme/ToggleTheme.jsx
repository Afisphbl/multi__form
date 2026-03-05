import React from "react";
import { useContextApi } from "../../context/useContextApi";
import Button from "../button/Button";

import "./ThemeToggle.css";

export default function ToggleTheme() {
  const { theme, toggleTheme } = useContextApi();
  return (
    <Button className="theme-toggle" onClick={toggleTheme}>
      {theme === "light" ? "🌙" : "🌞"}
    </Button>
  );
}
