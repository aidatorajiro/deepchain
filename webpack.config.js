module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'Deepchain.js',
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
