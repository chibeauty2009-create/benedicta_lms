/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#101C30',
          50: '#EEF1F5',
          100: '#D6DCE6',
          200: '#AEB9CC',
          300: '#8595B0',
          400: '#5D7093',
          500: '#3A4C6B',
          600: '#26344C',
          700: '#1B2438',
          800: '#141C2C',
          900: '#101C30',
          950: '#0A1220',
        },
        brass: {
          DEFAULT: '#C99A3E',
          50: '#FBF3E3',
          100: '#F5E4BF',
          200: '#EBCB85',
          300: '#DEB25B',
          400: '#C99A3E',
          500: '#AB7F2E',
          600: '#8A6524',
          700: '#684B1B',
          800: '#473212',
          900: '#271B09',
        },
        verdant: '#2F6E51',
        paper: '#FFFFFF',
        mist: '#F5F7FA',
      },
      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'ledger-lines':
          'repeating-linear-gradient(to bottom, transparent, transparent 27px, rgba(255,255,255,0.06) 28px)',
        'ledger-lines-dark':
          'repeating-linear-gradient(to bottom, transparent, transparent 27px, rgba(16,28,48,0.06) 28px)',
      },
      boxShadow: {
        seal: '0 12px 40px -12px rgba(16,28,48,0.35)',
      },
      maxWidth: {
        content: '1280px',
      },
    },
  },
  plugins: [],
}
