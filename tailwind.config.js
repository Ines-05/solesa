/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'sole-green': '#00A651',
        'sole-yellow': '#FFCB00',
        'sole-red': '#E30613',
        'sole-ocre': '#D4A017',
        'sole-blue': '#1A365D',
        'sole-beige': '#F7F4E9'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      boxShadow: {
        panel: '0 24px 60px rgba(26, 54, 93, 0.16)'
      },
      backgroundImage: {
        'sole-hero': 'linear-gradient(135deg, rgba(0, 166, 81, 0.95) 0%, rgba(255, 203, 0, 0.72) 52%, rgba(227, 6, 19, 0.86) 100%)'
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        fadeInUp: 'fadeInUp 0.8s ease-out'
      }
    }
  },
  plugins: []
};
