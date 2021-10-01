module.exports = {
  publicPath: '/gitsearch/',
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    },
    notFound: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: '404.html'
    }
  }
}
