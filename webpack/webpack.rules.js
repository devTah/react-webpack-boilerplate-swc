const { inDev } = require('./webpack.helpers');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const appDirectory = path.resolve(__dirname, '../');

module.exports = [
  {
    test: /\.m?js$/,
    exclude: /(node_modules)/,
    use: {
      loader: 'swc-loader',
      options: {
        parseMap: true,
      },
    },
  },
  {
    // Typescript loader
    test: /\.(ts|tsx)$/,
    exclude: /(node_modules|bower_components)/,
    use: {
      loader: 'swc-loader',
      options: {
        // This makes swc-loader invoke swc synchronously.
        sync: true,
        jsc: {
          parser: {
            syntax: 'typescript',
          },
        },
      },
    },
  },
  {
    test: /\.(s[ac]ss|css)$/,
    use: [
      { loader: inDev() ? 'style-loader' : MiniCssExtractPlugin.loader },
      {
        loader: 'css-loader',
        options: { sourceMap: inDev() ? true : false },
      },
      {
        loader: 'sass-loader',
        options: { sourceMap: inDev() ? true : false },
      },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: inDev() ? true : false,
          postcssOptions: {
            plugins: [
              require('tailwindcss'),
              require('autoprefixer'),
              require('postcss-import'),
              require('tailwindcss/nesting'),
              require('postcss-preset-env'),
              require('postcss-simple-vars')({ silent: true }),
            ],
          },
        },
      },
    ],
  },
  {
    // Less loader
    test: /\.less$/,
    use: [
      { loader: inDev() ? 'style-loader' : MiniCssExtractPlugin.loader },
      { loader: 'css-loader' },
      { loader: 'less-loader' },
    ],
  },
  {
    // Images Loader
    test: /\.(gif|jpe?g|tiff|png|webp|bmp|svg)$/,
    dependency: { not: ['url'] },
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    ],
  },
  {
    // Font & SVG loader
    test: /\.(woff(2)?|ttf|otf|eot)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          // publicPath: 'assets/fonts',
          // outputPath: 'assets/fonts',
        },
      },
    ],
    dependency: { not: ['url'] },
  }
];
