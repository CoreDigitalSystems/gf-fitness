/** @type {import('tailwindcss').Config} */
const tokens = require('@gf/ui/tokens.json')

module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: tokens.colors,
      fontFamily: {
        heading: tokens.fontFallbacks.heading,
        body: tokens.fontFallbacks.body,
        mono: tokens.fontFallbacks.mono,
      },
    },
  },
  plugins: [],
}
