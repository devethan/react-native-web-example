const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: path.resolve(__dirname, './public/index.html'),
  filename: 'index.html',
  inject: 'body',
});

// Loader configurations
const tsxLoader = {
  test: /\.(js|ts|tsx)$/,
  exclude: /node_modules\/(?!()\/).*/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-react'],
    },
  },
};

const imgLoader = {
  test: /\.(gif|jpe?g|png)$/,
  use: {
    loader: 'url-loader',
    options: {
      useRelativePath: false,
      name: '[sha512:hash:base62:5].[ext]',
      limit: 4096,
      outputPath: 'img/',
      publicPath: '/',
    },
  },
};

const svgLoader = {
  test: /\.(svg)$/,
  use: {
    loader: 'file-loader',
    options: {
      useRelativePath: false,
      name: '[sha512:hash:base62:5].[ext]',
      outputPath: 'img/',
      publicPath: '/',
    },
  },
};

module.exports = {
  entry: path.join(__dirname, 'index.web.js'),
  output: {
    filename: 'bundle.web.js',
    path: path.join(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      'react-native$': 'react-native-web',
    },
    extensions: ['.web.js', '.js', '.ts', '.tsx', 'json'],
  },
  module: {
    rules: [tsxLoader, imgLoader, svgLoader],
  },
  plugins: [HTMLWebpackPluginConfig],
  devServer: {
    open: true,
    historyApiFallback: true,
    hot: true,
    port: 3000,
  },
};
