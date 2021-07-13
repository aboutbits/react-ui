module.exports = () => {
  return {
    env: {},
    webpack: function (config, { dev }) {
      if (dev) {
        config.module.rules.push({
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
          options: {
            fix: true,
          },
        })
      }

      return config
    },
  }
}
