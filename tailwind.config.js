/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './components/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '1rem',
        xl: '1rem',
        '2xl': '2.5rem',
      }
    },
    extend: {
      fontFamily: {
        sans: ['MontserratVariable', 'sans-serif'],
        mono: ['RobotoMonoVariable', 'monospace'],
      },
      colors: {
        'custom-black': '#0A0603'
      },
    },
  },
  plugins: [ require('@tailwindcss/typography')],
}

