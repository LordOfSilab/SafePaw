import type { Config } from 'tailwindcss'

export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paw: {
          cream: '#FFFBEB',
          amber: '#F59E0B',
          'amber-light': '#FDE68A',
          terracotta: '#C2410C',
          warm: '#92400E',
          'dark-bg': '#1C1208',
          'dark-card': '#2D1E0A',
          'dark-border': '#4A2F0E',
        },
        danger: {
          low: '#22c55e',
          medium: '#eab308',
          high: '#f97316',
          deadly: '#ef4444',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'slide-up': 'slideUp 0.3s ease-out',
        'fade-in': 'fadeIn 0.2s ease-out',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
} satisfies Config
