/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      spacing: {

        'widthMax':'max(83vw, 83em);',
        'asidwidth': 'max(17vw, 17em);',
        'clamps': 'clamp(20vw, 40vw , 10em);'
      },
      colors: {
        'regal-blue': '#005674',
      },
      aspectRatio: {
        'lges': '4 / 3',
      },
      boxShadow: {
        'boxShad': '-5px 5px 5px -8px white',
      }
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      clamps: 'clamp(1vw, 20vw , .4em)',
      Iconsclamps: 'clamp(1.1vw, 10vw , .5em)',
    }
  },
  plugins: [],
}

