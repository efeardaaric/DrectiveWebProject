import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0E0D0B',
        foreground: '#F3EFE6',
        surface: '#171512',
        muted: '#9C9588',
        line: '#2A2620',
        brass: {
          DEFAULT: '#D4A017',
          soft: '#E8C35A',
          deep: '#A67C0F',
        },
        primary: {
          50: '#FBF6E8',
          100: '#F5E9C4',
          200: '#EBD48A',
          300: '#E0BF50',
          400: '#D4A017',
          500: '#D4A017',
          600: '#A67C0F',
          700: '#7A5B0B',
          800: '#4F3A07',
          900: '#2A1F04',
        },
        secondary: {
          50: '#F3EFE6',
          100: '#E5DFD2',
          200: '#C9C0AE',
          300: '#9C9588',
          400: '#6F6A60',
          500: '#4A4640',
          600: '#2A2620',
          700: '#1C1915',
          800: '#171512',
          900: '#0E0D0B',
        },
        accent: {
          50: '#FBF6E8',
          100: '#F5E9C4',
          200: '#EBD48A',
          300: '#E0BF50',
          400: '#D4A017',
          500: '#D4A017',
          600: '#A67C0F',
          700: '#7A5B0B',
          800: '#4F3A07',
          900: '#2A1F04',
        },
      },
      fontFamily: {
        sans: ['var(--font-plex)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-syne)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
