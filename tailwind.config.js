/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '1170': '1170px',  // ширина
        '520': '520px',    // высота
      },
    },
  },
  plugins: [],
}
