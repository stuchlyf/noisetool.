import { type Config } from "tailwindcss";

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'brown-gradient': 'linear-gradient(180deg, #A74905 0%, #72380D 56.25%, #522504 100%)',
        'white-gradient': 'linear-gradient(180deg, #FFFFFF 0%, rgba(205, 205, 205, 0.88) 55.21%, rgba(205, 205, 205, 0.58) 100%)',
        'green-gradient': 'linear-gradient(180deg, #39FFA0 0%, #148F54 75.52%, #066738 100%)',
        'pink-gradient': 'linear-gradient(180deg, #FDAEFF 0%, #FE73C7 66.15%, #FF39D4 100%)',
        'dark-brown-gradient': 'linear-gradient(180deg, #612D08 0%, #432108 56.25%, #291709 100%)',
        'black-gradient': 'linear-gradient(180deg, #353535 0%, #1C1C1C 56.25%, #050505 100%)',
        'wave-background': 'url("../../public/static/images/background.svg")'
      },
      backgroundPosition: {
        'wave-background': 'bottom center'
      },
      backgroundSize: {
        'wave-background': 'cover'
      },
      boxShadow: {
        'blob': ' 2px 4px 11px 1px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  daisyui: {
    themes: [
      {
        dark: {
          "primary": "#641ae6",
          "secondary": "#d926a9",
          "accent": "#1fb2a6",
          "neutral": "#2a323c",
          "base-100": "#1d232a",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
    ],
  },
  plugins: [require('daisyui')],
} satisfies Config;
