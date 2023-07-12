const prod = process.env.NODE_ENV === 'production'

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    cssnano: prod ? { preset: 'default' } : undefined,
  },
}
