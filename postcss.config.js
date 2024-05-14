module.exports = {
 
  theme: {
    extend: {
      backgroundImage: {
        'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
      },
    },
    variants: {
      backgroundImage: ['responsive', 'hover', 'focus', 'active', 'dark'],
    },
  },
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
