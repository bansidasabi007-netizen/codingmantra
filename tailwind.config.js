/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primarybg: "var(--primary-bg)",
        primarytext: "var(--primary-text)",
        dropdownbg: "var(--dropdown-bg)"
      }
    }
  },
  plugins: [],
}