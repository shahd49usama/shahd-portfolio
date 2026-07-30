/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#0B1220',
          700: '#1C2A44',
        },
        navy: {
          950: '#080D1F',
          900: '#0D1730',
          800: '#132242',
          700: '#1F3864', // brand blue carried over from the source CV
          600: '#2B4A80',
        },
        cyan: {
          400: '#22D3EE',
          300: '#67E8F9',
        },
        slate: {
          50: '#F5F7FB',
          100: '#EEF1F7',
          200: '#E1E6EF',
          400: '#8A93A6',
          600: '#4B5568',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-lines':
          'linear-gradient(to right, rgba(31,56,100,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(31,56,100,0.06) 1px, transparent 1px)',
      },
      boxShadow: {
        card: '0 1px 2px rgba(11,18,32,0.04), 0 8px 24px -12px rgba(13,23,48,0.12)',
        cardHover: '0 4px 8px rgba(11,18,32,0.06), 0 16px 32px -12px rgba(13,23,48,0.18)',
      },
      animation: {
        blink: 'blink 1.1s steps(2, start) infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
}
