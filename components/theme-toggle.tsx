"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="relative w-12 h-6 rounded-full border border-[var(--border)] bg-[var(--bg-soft)] transition-colors"
    >
      <span
        className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-accent transition-transform duration-300 ${
          dark ? "translate-x-6" : ""
        }`}
      />
    </button>
  );
}