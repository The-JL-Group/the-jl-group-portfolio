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
        // 'eye-light': "url('/src/assets/icons/eye-icon-light')",
        // 'eye-dark': "url('/src/assets/icons/eye-icon-dark')",

        // WORK IMAGES
        'test-1': "url('/src/assets/test3.jpg')",
        'test-2': "url('/src/assets/test4.jpg')",

        // ABOUT IMAGES
        // Dark
        'card-dark': "url('/src/assets/jimbo-card-dark.jpg')",
        'card-d': "url('/src/assets/lina-card-dark.jpg')",
        // Light
        'card-light': "url('/src/assets/jimbo-card-light.jpg')",
        'card-l': "url('/src/assets/lina-card-light.jpg')",

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
