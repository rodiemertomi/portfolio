module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      black: '#363538',
      gray: '#8d8c8a',
      white: '#f6f6f6',
      darkblue: '#408697',
      lightblue: '#52d6f4',
    },
    fontFamily: {
      Lora: ['Lora', 'sans-serif'],
    },
  },
  plugins: [require('tailwindcss-textshadow')],
}
