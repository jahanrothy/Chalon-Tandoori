/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["index.html"],
  theme: {

    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1400px',
    },

    container: {
      center: true
    },

    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      Tangerine: ["Tangerine", 'cursive'],
      Oswald: ["Oswald", 'sans-serif'],
      cabin: ["Cabin", 'sans-serif']
    },


    extend: {
      colors:{
        primary: '#cfa670',
        text: '#777',
        blacks: '#101010',
        light_black:'#151515',
        bg_black: '#212121',
        bg_transparent: '#00000080'
        
      },
    },
    backgroundImage: {
      'custom-radial': 'radial-gradient(circle closest-side, #B0B0B0 80%, #ffffff 10%)',
    },
    backgroundSize: {
      'custom-size': '4px 2px',
    },
    height: {
      '1px': '1px',
    },
  },
  plugins: [],
}

