/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#061512',
          surface: '#0B211D',
          surfaceLight: '#112C26',
          surfaceCard: '#0E2722',
          border: '#1E3A34',
          borderLight: '#2A4E46',
          emerald: '#18E6A0',
          deepEmerald: '#0BAA75',
          mint: '#8CFFE0',
          offWhite: '#F5F8F7',
          white: '#FFFFFF',
          text: '#0A1714',
          muted: '#5B6965',
          warning: '#F59E0B',
          success: '#18E6A0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      maxWidth: {
        'content': '1280px',
        'wide': '1320px',
      },
      boxShadow: {
        'glow-sm': '0 0 20px -5px rgba(24, 230, 160, 0.25)',
        'glow-md': '0 0 30px -5px rgba(24, 230, 160, 0.35)',
        'glow-lg': '0 0 50px -10px rgba(24, 230, 160, 0.45)',
        'inner-glow': 'inset 0 1px 1px 0 rgba(24, 230, 160, 0.2)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'emerald-gradient': 'linear-gradient(135deg, #18E6A0 0%, #0BAA75 100%)',
        'emerald-gradient-hover': 'linear-gradient(135deg, #26f0ab 0%, #0db87f 100%)',
      }
    },
  },
  plugins: [],
}
