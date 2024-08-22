/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // add custom values here
      colors: {
        "custom-color": "#000080",
      },
    },
  },
  plugins: [],
};
