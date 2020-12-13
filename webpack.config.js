const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'

const srcPath = path.resolve(__dirname, 'src')
const distPath = path.resolve(__dirname, 'dist')

module.exports = {
  context: srcPath,
  mode: 'development',
  entry: './index.tsx',
  output: {
    path: distPath,
    filename: "bundle.[fullhash].js"
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.json' ],
    alias: {
      providers: path.resolve(srcPath, 'providers'),

    }
  },
  devtool: !isProd ? 'source-map' : false,
  optimization: {
    minimize: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html",
      minify: {
        removeComments: isProd,
        collapseWhitespace: isProd
      }
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(srcPath, 'favicon.ico'),
          to: distPath
        }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.tsx?$/,
        use: [
          'ts-loader'
        ],
        exclude: /node_modules/,
      }
    ]
  },
  devServer: {
    port: 3999,
    open: true
  }
}