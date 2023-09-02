import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        main: {
          DEFAULT: '#782D2D',
          light: '#C87D5A',
          dark: '#1D0A0A'
        }
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        openSans: ['Open Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}
export default config
