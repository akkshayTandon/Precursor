/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'precursor_theme_color': '#1EB6D6',
        // 'precursor_theme_color': '#013854',
      },
    },
  },
  plugins: [],
}