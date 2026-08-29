/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0A0F',
        panel: '#111117',
        signal: {
          violet: '#7C5CFC',
          cyan: '#22D3C7',
          amber: '#FFB020',
        },
        mist: '#E7E9EE',
        muted: '#8B8FA3',
        hairline: 'rgba(231,233,238,0.09)',
      },
      fontFamily: {
        display: ['"Clash Display"', 'sans-serif'],
        body: ['Switzer', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
