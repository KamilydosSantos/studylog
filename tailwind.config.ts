module.exports = {
  content: ['./app/**/*.vue', './components/**/*.vue', './pages/**/*.vue'],
  theme: {
    extend: {
      colors: {
        'custom-primary': '#0F8C98',
        'custom-secondary': '#F2F2F2',
        'custom-primary-text': '#1B1B1B',
        'custom-secondary-text': '#404040',
      },
      spacing: {
        'mobile-menu-height': 'calc(100vh - 96px)',
      },
    },
  },
  plugins: [],
};
