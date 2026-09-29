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
          // Adymize-style deep navy/dark palette
          dark: '#0a0a1a',
          darker: '#06060f',
          surface: '#12122a',
          surfaceLight: '#1a1a3a',
          surfaceCard: '#15152e',
          border: '#2a2a4e',
          borderLight: '#3a3a5e',
          // Warm accent colors
          accent: '#f5c518',        // Gold/Yellow primary accent
          accentLight: '#ffd84d',
          accentDim: '#c49b0d',
          purple: '#8b5cf6',        // Violet accent
          purpleLight: '#a78bfa',
          purpleDim: '#6d28d9',
          // Warm orange for CTAs
          orange: '#ff6b35',
          orangeLight: '#ff8f66',
          // Emerald for success/positive
          emerald: '#18E6A0',
          deepEmerald: '#0BAA75',
          mint: '#8CFFE0',
          // Neutrals
          offWhite: '#f0f0f5',
          white: '#FFFFFF',
          text: '#e8e8f0',
          muted: '#8888aa',
          warning: '#F59E0B',
          success: '#18E6A0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        handwriting: ['Caveat', 'cursive'],
      },
      maxWidth: {
        'content': '1280px',
        'wide': '1320px',
      },
      boxShadow: {
        'glow-sm': '0 0 20px -5px rgba(245, 197, 24, 0.2)',
        'glow-md': '0 0 30px -5px rgba(245, 197, 24, 0.3)',
        'glow-lg': '0 0 50px -10px rgba(245, 197, 24, 0.4)',
        'glow-purple': '0 0 30px -5px rgba(139, 92, 246, 0.3)',
        'inner-glow': 'inset 0 1px 1px 0 rgba(245, 197, 24, 0.15)',
        'card': '0 4px 30px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 8px 40px rgba(245, 197, 24, 0.15)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'accent-gradient': 'linear-gradient(135deg, #f5c518 0%, #ff6b35 100%)',
        'accent-gradient-hover': 'linear-gradient(135deg, #ffd84d 0%, #ff8f66 100%)',
        'purple-gradient': 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
        'dark-gradient': 'linear-gradient(135deg, #12122a 0%, #0a0a1a 100%)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
}
