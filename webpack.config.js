module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    library: 'Deepchain',
    libraryTarget: 'umd'
  },
  externals: {
    'module': 'Module'
  }
}
