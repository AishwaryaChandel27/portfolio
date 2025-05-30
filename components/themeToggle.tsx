"use client";

import { useEffect, useState } from "react";
import { Sun, Moon, Laptop } from "lucide-react";

type Theme = "light" | "dark" | "system";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("system");

  const applyTheme = (selectedTheme: Theme) => {
    const root = document.documentElement;

    if (selectedTheme === "system") {
      const isSystemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      root.classList.toggle("dark", isSystemDark);
    } else {
      root.classList.toggle("dark", selectedTheme === "dark");
    }
  };

  // Initialize theme on mount
  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;

    const userPref = stored === "light" || stored === "dark" ? stored : "system";
    setTheme(userPref);
    applyTheme(userPref);
  }, []);

  // Watch for system theme changes only if using system theme
  useEffect(() => {
    if (theme !== "system") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => applyTheme("system");

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  const cycleTheme = () => {
    const nextTheme: Theme =
      theme === "light" ? "dark" : theme === "dark" ? "system" : "light";

    setTheme(nextTheme);

    // Store only if user selects light or dark
    if (nextTheme === "system") {
      localStorage.removeItem("theme");
    } else {
      localStorage.setItem("theme", nextTheme);
    }

    applyTheme(nextTheme);
  };

  const renderIcon = () => {
    if (theme === "light") return <Sun size={18} />;
    if (theme === "dark") return <Moon size={18} />;
    return <Laptop size={18} />;
  };

  return (
    <button
      onClick={cycleTheme}
      className="p-2 rounded-md border text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
      aria-label={`Current Theme: ${theme}`}
      title={`Current Theme: ${theme}`}
    >
      {renderIcon()}
    </button>
  );
}
