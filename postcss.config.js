let plugins = ['tailwindcss', 'autoprefixer']

if (process.env.NODE_ENV === 'production') {
  plugins.push(['cssnano', { preset: 'default' }])
}

module.exports = {
  plugins,
}
