const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: `${__dirname}/src/index.tsx`,
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/public/index.html`,
      filename: 'index.html',
      inject: true,
    }),
  ],
  devServer: {
    host: 'localhost',
    port: '3000',
    hot: true,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  performance: {
    maxEntrypointSize: 1049600,
    maxAssetSize: 1049600,
  },
  resolve: {
    roots: [__dirname, `${__dirname}/src`],
    modules: ['node_modules'],
    extensions: [
      '.tsx',
      '.ts',
      '.jsx',
      '.js',
      '.scss',
      '.css',
      '.png',
      '.svg',
      '.jpg',
    ],
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-typescript', '@babel/preset-react'],
          plugins: [
            '@babel/plugin-transform-runtime',
            '@babel/plugin-syntax-dynamic-import',
            '@babel/plugin-proposal-export-default-from',
            '@babel/plugin-proposal-class-properties',
          ],
        },
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: 'file-loader',
      },
    ],
  },
};
