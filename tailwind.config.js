module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0c',
        foreground: '#fafafa',
        primary: {
          500: '#ce9829',
        },
        secondary: {
          500: '#17161a',
        },
        white: {
          DEFAULT: '#fff',
          5: 'rgba(255,255,255,0.05)',
          10: 'rgba(255,255,255,0.10)',
          20: 'rgba(255,255,255,0.20)',
        },
        navbar: '#27272a',
      },
      fontFamily: {
        sans: ['Inter', 'Sora', 'sans-serif'],
      },
    },
  },
  plugins: [],
};