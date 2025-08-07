/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'midnight': {
          900: '#0D1B2A',
          800: '#1B2B3A',
          700: '#2A3B4A',
        },
        'tanzanian': {
          green: '#006B3C',
          gold: '#FFD700',
          teal: '#00FFC6',
        },
        'neon': {
          teal: '#00FFC6',
          green: '#00FF88',
          blue: '#00CCFF',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'gradient-shift': 'gradient-shift 3s ease infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(0, 255, 198, 0.5)',
        'glow-lg': '0 0 40px rgba(0, 255, 198, 0.4)',
        'neon': '0 0 5px theme(colors.neon.teal), 0 0 20px theme(colors.neon.teal), 0 0 40px theme(colors.neon.teal)',
      }
    },
  },
  plugins: [],
};