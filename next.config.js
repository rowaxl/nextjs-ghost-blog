const NextWorkboxWebpack = require('next-workbox-webpack-plugin')

module.exports = {
  webpack: (config, { isServer, dev, buildId, config: { distDir } }) => {

    if (!isServer && !dev) {
      config.plugins.push(
        new NextWorkboxWebpack({
          distDir,
          buildId,
        })
      )
    }

    return config
  },
  exportPathMap: () => {
    return {
      '/': { page: '/' }
    }
  }
}