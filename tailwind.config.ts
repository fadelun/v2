import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-1": "var(--color-primary)",
        "dark-2": "var(--color-secondary)",
        "mung-beans": "var(--color-accent)",
        "warm-text": "var(--color-muted)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
