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
        // New design palette (see newdesign/HANDOFF.md)
        'ambrosian-dark': '#0D1828',
        'ambrosian-gold': '#F9C879',
        'amb-ink': '#0D1828',
        'amb-navy': '#172E49',
        'amb-gold': '#F9C879',
        'amb-bronze': '#CB9C69',
        'amb-red': '#D42938',
        'amb-ivory': '#FBF7F0',
        'amb-mist': '#C2BBAD',
        'amb-slate': '#4F5B6D',
      },
      fontFamily: {
        sans: ['Jost', 'Futura', 'Century Gothic', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
