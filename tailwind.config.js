module.exports = {
  content: [
    './src/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js',
    './node_modules/flowbite/**/*.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        mobile: '320px',
      },
      colors: {
        pnk: '#e09384',
        ltPnk: '#daada4',
        org: '#f8724c',
        ltOrg: '#ee8d72',
        blk: '#212020',
      },
      // ONLY TWO DASHES
      backgroundImage: {
        // HEADER IMAGES - WORKS
        'header-light': "url('/src/assets/header-image-light.svg')",
        'header-dark': "url('/src/assets/header-image-dark.svg')",
        'logo-light': "url('/src/assets/jl-logo-light.svg')",
        'logo-dark': "url('/src/assets/jl-logo-dark.svg')",

        // ABOUT IMAGES
        // Dark
        'card-dark': "url('/src/assets/jimbo-card-dark.jpg')",
        'card-d': "url('/src/assets/lina-card-dark.jpg')",
        // Light
        'card-light': "url('/src/assets/jimbo-card-light.jpg')",
        'card-l': "url('/src/assets/lina-card-light.jpg')",

        // CONTACT IMAGES - WORKS
        'contact-light': "url('/src/assets/contact-header-light.svg')",
        'contact-dark': "url('/src/assets/contact-header-dark.svg')",
        'full-light': "url('/src/assets/contact-light-full.svg')",
        'full-dark': "url('/src/assets/contact-dark-full.svg')",
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ['dark'],
    },
  },
  plugins: [require('tw-elements/dist/plugin'), require('flowbite/plugin')],
};
