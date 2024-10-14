module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '88vh': '88vh',
      },
      width: {
        'custom-79': '79.666667%',
        'custom-80': '20.333333%',
      },
      colors: {
        gray5: '#F6F8FB',
        blue: '#0eabeb',
        customGray: '#818194', // Custom color
        customLightBlue: '#f6f8fb',
        costumDarkGray: '#4F4F4F',
        customBlue: '#030229',
        customBl: ' #5678E9',
        customyellowopacity: 'rgba(255, 195, 19, 0.1)',
        customyellow: '#FFC313'
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
