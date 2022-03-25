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
         'full': '100%',
         '1/5': '20%',
         '2/5': '40%',
         '3/5': '60%',
         '4/5': '80%',
         '10px': '10px',
         '20px': '20px',
         '30px': '30px',
         '40px': '40px',
         '50px': '50px',
         '60px': '60px',
         '70px': '70px',
         '80px': '80px',
         '90px': '90px',
         '100px': '100px'
      },
      minWidth: {
         '0': '0px',
         'full': '100%',
         'min': 'min-content',
         'max': 'max-content',
         'fit': 'fit-content',
         '1/5': '20%',
         '2/5': '40%',
         '3/5': '60%',
         '4/5': '80%',
         '10px': '10px',
         '20px': '20px',
         '30px': '30px',
         '40px': '40px',
         '50px': '50px',
         '60px': '60px',
         '70px': '70px',
         '80px': '80px',
         '90px': '90px',
         '100px': '100px',
         '1em': '1em',
         '2em': '2em',
         '3em': '3em',
         '4em': '4em',
         '5em': '5em',
         '10em': '10em',
         '15em': '15em',
         '20em': '20em',
         '25em': '25em',
         '30em': '30em',
         '35em': '35em',
         '40em': '40em',
         '45em': '45em',
         '50em': '50em',
         '55em': '55em',
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
