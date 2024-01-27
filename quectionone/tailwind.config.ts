import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'plus': ['Plus-Jakarta-Sans', 'sans-serif'],
    },
    screens: {
      sm: "375px",
      // => @media (min-width: 375px) { ... }
      lg: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      colors: {
        "primary": "#11284B",
      },
    },
  },
  plugins: [],
};
export default config;
