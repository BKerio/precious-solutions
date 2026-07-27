/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Jost', 'sans-serif'],
        serif: ['Roboto Slab', 'Georgia', 'serif'],
        display: ['Syne', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#184341',
          dark: '#0f2d2b',
          light: '#1e5451',
        },
        accent: '#184341',
        teal: {
          50: '#F5F7F7',
          100: '#e8eeee',
          200: '#d3dede',
        },
        slate: {
          text: '#5F6973',
        },
        divider: '#D3D2D2',
        cream: {
          50: '#fdfcf8',
          100: '#F5F7F7',
          200: '#f2ece0',
        },
        charcoal: {
          800: '#1c1c1c',
          900: '#111111',
        },
        gold: {
          400: '#c9a96e',
          500: '#b8924a',
          600: '#a07c38',
        },
      },
      letterSpacing: {
        widest2: '0.2em',
        widest3: '0.3em',
      },
      animation: {
        'fade-up': 'fadeUp 0.9s ease forwards',
        'fade-in': 'fadeIn 0.8s ease forwards',
        'slide-in-left': 'slideInLeft 1s ease forwards',
        'slide-in-right': 'slideInRight 1s ease forwards',
        'scroll-bounce': 'scrollBounce 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scrollBounce: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.6' },
          '50%': { transform: 'translateY(10px)', opacity: '1' },
        },
      },
      maxWidth: {
        '8xl': '1400px',
      },
    },
  },
  plugins: [],
};
