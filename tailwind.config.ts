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
        "dark-1": "#1E201E",
        "dark-2": "#3C3D37",
        "mung-beans": "#697565",
        "warm-text": "#ECDFCC",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
