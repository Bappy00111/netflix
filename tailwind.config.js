/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark': 'rgba(23, 23, 23, 0.2)',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

