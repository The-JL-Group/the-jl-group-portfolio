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
        ltPnk: '#daada4',
        org: '#f8724c',
        ltOrg: '#ee8d72',
        blk: '#212020',
      },
      backgroundImage: {
        // HEADER IMAGES - WORKS
        'header-light': "url('/src/assets/header-image-light.svg')",
        'header-dark': "url('/src/assets/header-image-dark.svg')",
        'logo-light': "url('/src/assets/jl-logo-light.svg')",
        'logo-dark': "url('/src/assets/jl-logo-dark.svg')",

        // WORK IMAGES - WORKS
        'desktop-light': "url('/src/assets/work-desktop-light.svg')",
        'desktop-dark': "url('/src/assets/work-desktop-dark.svg')",
        'desktop-l': "url('/src/assets/work-desktop-light-1.svg')",
        'desktop-d': "url('/src/assets/work-desktop-dark-1.svg')",

        'tablet-light': "url('/src/assets/work-tablet-light.svg')",
        'tablet-dark': "url('/src/assets/work-tablet-dark.svg')",

        'phone-light': "url('/src/assets/work-phone-light.svg')",
        'phone-dark': "url('/src/assets/work-phone-dark.svg')",

        // CONTACT IMAGES - WORKS
        'contact-light': "url('/src/assets/contact-header-light.svg')",
        'contact-dark': "url('/src/assets/contact-header-dark.svg')",
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
