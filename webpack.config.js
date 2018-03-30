module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    library: "Deepchain",
    libraryTarget: "umd"
  },
  devServer: {
    contentBase: 'dist'
  },
  externals: {
    'module': 'Module'
  }
}
