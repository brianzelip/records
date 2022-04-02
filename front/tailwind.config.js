module.exports = {
  content: [
    './index.html',
    './src/components/**/*.vue',
    './src/views/**/*.vue'
  ],
  theme: {
    borderColor: ({ theme }) => ({
      ...theme('colors'),
      DEFAULT: theme('colors.gray.200', 'currentColor')
    }),
    extend: {}
  },
  plugins: []
};
