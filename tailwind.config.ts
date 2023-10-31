import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        fontSize: "font-size",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        agbalumo: ["var(--font-agbalumo)"],
      },
    },
  },
  plugins: [],
};
export default config;
