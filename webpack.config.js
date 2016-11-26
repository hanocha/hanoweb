module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: './dist'
  }

  module: {
    loaders: [
      test: /.jsx?$/,
      loader: 'babel-loader',
      exclude: /node-modules/,
      query: {
        presets: ['es2015','react']
      }
    ]
  }
}
