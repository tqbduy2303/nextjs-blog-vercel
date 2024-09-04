import type { Config } from "tailwindcss";
const colors = require('tailwindcss/colors')
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primaryColor: '#000000',
        secondaryColor: '#FFFFFF',
        keyColor: '#CFFD60'
      },
      screens: {
        xs: "450px",
        sm: "575px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      
        boxShadow: {
          signUp: "0px 5px 10px rgba(4, 10, 34, 0.2)",
          one: "0px 2px 3px rgba(7, 7, 77, 0.05)",
          sticky: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)",
        },
    },
  },
  plugins: [],
};
export default config;
