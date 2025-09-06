import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef7ed',
          100: '#fdedd3',
          200: '#fad7a6',
          300: '#f6bb6d',
          400: '#f19532',
          500: '#ed7611',
          600: '#de5c07',
          700: '#b84408',
          800: '#93380e',
          900: '#78300f',
        },
      },
    },
  },
  plugins: [],
};
export default config;