/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      /* prettier-ignore */
      colors: {
       "green": "#39DB4A",
"red":"#FF6868",
"secondary":"#555",
"primarybg":"#fcfcfc",
      },
    },
  },
  plugins: [require("daisyui")],
};
