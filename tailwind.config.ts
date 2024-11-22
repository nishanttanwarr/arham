import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'sm': '425px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1440px',
      },
      fontFamily: {
        'poiret': ['Poiret One', 'cursive'],
      },
    },
  },
  plugins: [],
}
export default config