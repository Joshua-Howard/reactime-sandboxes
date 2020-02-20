const path = require('path');

module.exports = {
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js']
  },
  entry: path.join(__dirname, 'Frontend', 'index.tsx'),
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      },
      // {
      //   test: /\.jsx?/,
      //   exclude: /node_modules/,
      //   use: ['babel-loader']
      // },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  output: {
    path: path.join(__dirname, 'Frontend', 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: [
      path.join(__dirname, 'Frontend', 'public'),
      path.resolve(__dirname, 'node_modules')
    ]
  }
};
