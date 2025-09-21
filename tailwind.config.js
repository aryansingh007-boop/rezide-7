/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'linkedin-blue': '#0077B5',
        'linkedin-dark': '#004182',
        'rezide-primary': '#2563eb',
        'rezide-secondary': '#1e40af',
      },
    },
  },
  plugins: [],
}
