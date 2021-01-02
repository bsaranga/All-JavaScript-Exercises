module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
    // defaultLineHeights: true,
    // standardFontWeights: true
  },
  purge: {
    //enabled: true,
    //content: ['./client/**/*.js']
  },
  theme: {
    extend: {
      colors: {
        primary:'#ff6363',
        secondary:{
          100: '#E2E2D5',
          200: '#88883'
        }
      },
      fontFamily:{
        standard: ['Nunito']
      }
    }
  },
  variants: {},
  plugins: []
}