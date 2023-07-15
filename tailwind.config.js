/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['var(--font-lato)'],
        mont: ['var(--font-montserrat)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        slidein: {
          '0%': {
            'display': 'none',
            'right': '-14rem'
          },
          '0.01%': {
            'display': 'block'
          },
          '100%': {
            'right': '0rem'
          },
        },
        slideout: {
          '0%': {
            'right': '0rem'
          },
          '0.01%': {
            'display': 'none'
          },
          '100%': {
            'display': 'block',
            'right': '-14rem'
          },
        },
        hide: {
          '0%': {
            'opacity': '100%'
          },
          '100%': {
            'visibility': 'hidden',
            'opacity': '0%'
          }
        },
        show: {
          '0%': {
            'opacity': '0%'
          },
          '0.01%': {
            'visibility': 'visible'
          },
          '100%': {
            'opacity': '100%'
          }
        }
      },
      animation: {
        'slidein': 'slidein 200ms ease-in-out normal 1 forwards',
        'slideout': 'slideout 200ms ease-in-out normal 1 forwards',
        'hide': 'hide 300ms ease-in-out normal 1 forwards',
        'show': 'show 300ms ease-in-out normal 1 forwards',
      }
    },
  },
  plugins: []
}
