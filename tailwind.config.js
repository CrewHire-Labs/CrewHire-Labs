/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne','sans-serif'],
        body: ['DM Sans','sans-serif'],
        mono: ['JetBrains Mono','monospace'],
      },
      colors: {
        g: {
          bg:     '#060608',
          card:   '#0D0F12',
          border: '#1A1D23',
          green:  '#00E87A',
          'green-dim': '#00994F',
          'green-glow': 'rgba(0,232,122,0.12)',
          muted:  '#4A5568',
          text:   '#E8E6DF',
        }
      },
    },
  },
  plugins: [],
}
