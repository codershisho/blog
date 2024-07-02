import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        notoJP: ["var(--font-notojp)"],
        advent: ["var(--font-adventpro)"],
        libre: ["var(--font-libre)"],
      },
    },
  },
  plugins: [
    require('preline/plugin'),
    require('tailwindcss-animated')
  ],
};
export default config;
