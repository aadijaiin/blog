"use client";

import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

export default function ThemeBtn() {
  const toggleTheme = () => {
    const html = document.documentElement;
    const isDark = html.classList.toggle("dark");

    document.cookie = `theme=${isDark ? "dark" : "light"}; path=/; max-age=31536000`;
  };

  return (
    <button
      className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:ring-2 hover:ring-primary/20 transition-all"
      onClick={toggleTheme}
    >
      <span className="block dark:hidden text-[20px]!">
        <DarkModeOutlinedIcon />
      </span>
      <span className="hidden dark:block text-[20px]!">
        <LightModeOutlinedIcon />
      </span>
    </button>
  );
}
