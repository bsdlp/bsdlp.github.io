module.exports = {
  purge: {
    content: ['./index.html'],
    options: {
      keyframes: true,
    },
    mode: 'all',
    preserveHtmlElements: false,
    enabled: true,
  },
  darkMode: 'media',
  theme: {
    fontFamily: {
      sans: ['Helvetica Neue', 'Helvetica', 'sans-serif'],
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
    },
    extend: {},
  },
  variants: {
    extend: {
      transitionDuration: ['hover'],
      transitionProperty: ['hover'],
      transitionTimingFunction: ['hover'],
    },
  },
}
