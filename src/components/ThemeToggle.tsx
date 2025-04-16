import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { toggleTheme } from "@/hooks/useTheme";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    setIsDark(saved === "dark");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggle = () => {
    toggleTheme();
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggle}
      className={`w-16 h-8 flex items-center rounded-full px-1 transition-colors duration-300
        ${isDark ? "bg-zinc-700" : "bg-yellow-300"}
      `}
    >
      <div
        className={`w-6 h-6 bg-white rounded-full shadow-md transform duration-300 ease-in-out
          ${isDark ? "translate-x-8" : "translate-x-0"}
        `}
      >
        <div className="flex items-center justify-center h-full">
          {isDark ? (
            <Moon className="w-4 h-4 text-zinc-700" />
          ) : (
            <Sun className="w-4 h-4 text-yellow-500" />
          )}
        </div>
      </div>
    </button>
  );
}
