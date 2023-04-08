module.exports = {
  devServer: {
    // 'auto' | 'all' [string] here
    allowedHosts: 'all',
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/ffmpeg-commander/'
    : '/',
};
