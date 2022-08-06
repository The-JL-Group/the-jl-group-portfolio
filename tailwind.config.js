module.exports = {
  content: [
    './src/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        pnk: '#e09384',
        org: '#f8724c',
        blk: '#212020',
      },
      backgroundImage: {
        'contact-light': "url('assets/contact-header-light.svg')",
        'contact-dark': "url('assets/contact-header-dark.svg')",
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ['dark'],
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
};
