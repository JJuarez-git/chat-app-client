module.exports = {
   content: ['./src/**/*.{ts,tsx}'],
   darkMode: 'class',
   theme: {
      /* colors: {
         'modalBackdrop':'#0006'
      }, */
      fontFamily: {
         'outfit': ['Outfit', 'sans-serif'],
         'source-sans': ['Source Sans 3', 'sans-serif']
      },
      maxWidth: {
         '0': '0px',
         'none': 'none',
         '1/5': '20%',
         '2/5': '40%',
         '3/5': '60%',
         '4/5': '80%',
      },
      minHeight: {
         '0': '0px',
         'full': '100%',
         'screen': '100vh',
         'min': 'min-content',
         'max': 'max-content',
         'fit': 'fit-content',
         '10': '10px',
         '20': '20px',
         '30': '30px',
         '40': '40px',
         '50': '50px',
         '60': '60px',
         '70': '70px',
         '80': '80px',
         '90': '90px',
         '100': '100px'
      },
      extend: {
         animation: {
            fadeIn: 'fadeIn .5s ease',
            fadeInSlow: 'fadeIn 1s ease',
            fadeInUp: 'fadeInUp .5s ease',
            fadeInUpSlow: 'fadeInUp 1s ease',
            fadeOut: 'fadeOut .5s ease',
            fadeOutSlow: 'fadeOut 1s ease'
         },
         keyframes: {
            fadeIn: {
               '0%': { opacity: 0 },
               '100%': { opacity: 1 }
            },
            fadeInUp: {
               '0%': { opacity: 0, transform: 'translateY(20px)' },
               '100%': { opacity: 1, transform: 'translateY(0)' }
            },
            fadeOut: {
               '0%': { opacity: 1 },
               '100%': { opacity: 0 }
            },
         }
      },
   },
   plugins: [],
}
