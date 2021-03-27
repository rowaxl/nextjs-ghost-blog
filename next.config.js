const NextWrokboxWebpack = require('next-workbox-webpack-plugin')

module.exports = {
  webpack: (config, { isServer, dev, buildId, config: { distDir } }) => {

    if (!isServer && !dev && config.plugin) {
      config.plugin.push(
        new NextWrokboxWebpack({
          importWorkboxFrom: 'cdn',
          distDir,
          buildId,
          swDestRoot: './static/sw.js',
          swURLRoot: '/static/sw.js'
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