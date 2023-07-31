const prod = process.env.NODE_ENV === 'production'

export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    cssnano: prod ? { preset: 'default' } : undefined,
  },
}
