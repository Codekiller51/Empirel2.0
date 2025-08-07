/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'primary': {
          900: '#1F2E6C',
          800: '#2A3B7A',
          700: '#354888',
          600: '#405596',
          500: '#4B62A4',
          400: '#6B7FB8',
          300: '#8B9CCC',
          200: '#ABB9E0',
          100: '#CBD6F4',
        },
        'secondary': {
          900: '#734A27',
          800: '#8A5A32',
          700: '#A16A3D',
          600: '#B87A48',
          500: '#CF8A53',
          400: '#D9A172',
          300: '#E3B891',
          200: '#EDCFB0',
          100: '#F7E6CF',
        },
        'accent': {
          600: '#D0A51D',
          500: '#FAD707',
          400: '#FBE138',
          300: '#FCEB69',
          200: '#FDF59A',
          100: '#FEFACB',
        },
        'neutral': {
          50: '#FAFAF9',
          100: '#F5F5F4',
          200: '#E7E5E4',
          300: '#D6D3D1',
          400: '#A8A29E',
          500: '#78716C',
          600: '#57534E',
          700: '#44403C',
          800: '#292524',
          900: '#1C1917',
        }
      },
      animation: {
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'slide-in-up': 'slideInUp 0.8s ease-out',
        'fade-in': 'fadeIn 1s ease-out',
        'text-reveal': 'textReveal 1.2s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        textReveal: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '50%': { transform: 'translateY(0)', opacity: '0.5' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(250, 215, 7, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(250, 215, 7, 0.8), 0 0 30px rgba(250, 215, 7, 0.6)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(135deg, #1F2E6C 0%, #734A27 50%, #D0A51D 100%)',
      },
    },
  },
  plugins: [],
};