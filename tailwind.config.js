module.exports = {
  content: [
    './src/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        pnk: '#e09384',
        org: '#f8724c',
      },
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
};
