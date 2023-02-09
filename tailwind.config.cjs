/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,md,mdx,ts,tsx}'],
  theme: {
    colors: {
      background: '#f8fafc',
      primary: '#9b4dca',
      secondary: '#606c76',
    },
    fontFamily: {
      sans: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        '"Hiragino Kaku Gothic ProN"',
        '"Hiragino Sans"',
        '"Yu Gothic"',
        'YuGothic',
        '"ヒラギノ角ゴ"',
        '"Noto Sans"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
    },
    extend: {
      listStyleType: {
        circle: 'circle',
      },
    },
  },
  plugins: [],
}
