/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f0ff',
          100: '#b3d1ff',
          200: '#80b3ff',
          300: '#4d94ff',
          400: '#1a75ff',
          500: '#0056e0',
          600: '#0044b3',
          700: '#003380',
          800: '#00224d',
          900: '#00111a',
        },
        accent: {
          50: '#e6fff9',
          100: '#b3fff0',
          200: '#80ffe7',
          300: '#4dffde',
          400: '#1affd5',
          500: '#00e6c3',
          600: '#00b399',
          700: '#008070',
          800: '#004d47',
          900: '#001a1e',
        },
        dark: {
          50: '#f5f7fa',
          100: '#e4e9f0',
          200: '#c9d3e0',
          300: '#a0b1c5',
          400: '#7689a1',
          500: '#566b85',
          600: '#3f4d61',
          700: '#2a3545',
          800: '#1a202e',
          900: '#0a0e17',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
