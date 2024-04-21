import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      accent: 'var(--clr-current-accent)',

      red: 'hsl(5, 75%, 44%)',
      special: 'hsl(4, 53%, 67%)',

      light: {
        100: '#FFFFFF',

        600: '#A4A4A4',
        700: '#828282',
      },

      dark: {
        300: '#404040',
        400: '#363636',
        500: '#333333',
        600: '#2D2D2D',
        700: '#202020',
      },
    },

    extend: {
      dropShadow: {
        '5xl': '0 45px 35px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
};
export default config;
