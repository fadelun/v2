import { useEffect, useState } from "react";

const themes = ["gray", "red", "cyan", "white"] as const;
type Theme = (typeof themes)[number];

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>("white");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme;
    if (saved && themes.includes(saved)) {
      setTheme(saved);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    themes.forEach((t) => root.classList.remove(`theme-${t}`));
    root.classList.add(`theme-${theme}`);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="flex flex-col gap-2 mb-4">
      {themes.map((t) => (
        <button
          key={t}
          onClick={() => setTheme(t)}
          className={`w-5 h-5 rounded-full text-white capitalize ${
            theme === t ? "ring-2 ring-white" : ""
          }`}
          style={{ backgroundColor: t }}
        ></button>
      ))}
    </div>
  );
}
