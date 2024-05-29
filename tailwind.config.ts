import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      oswald: 'Oswald, sans-serif',
      inter: 'Inter, sans-serif'
    },
    extend: {
      rotate: {
        '360': '360deg',
      }
    },
  },
  plugins: [],
};
export default config;
