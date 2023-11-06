import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx,svg}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx,svg}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx,svg}',
  ],
  theme: {
    fontFamily: {
      'rounded': ['M PLUS Rounded 1c', 'sans-serif'],
      'rubik': ['Rubik', 'sans-serif'],
      'slacksideOne': ['Slackside One', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'top': '0 -4px 8px 0px rgba(0, 0, 0, 0.16)',
        'bottom': '0 12px 12px 0px rgba(0, 0, 0, 0.16)',
      }
    },
  },
  plugins: [],
}
export default config
