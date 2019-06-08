const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {

  entry: {
    path:path.resolve(__dirname,'./src/index.js')
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
         { loader: "style-loader"},
         { loader:'css-hot-loader'},
         { loader: MiniCssExtractPlugin.loader}, 
         { loader: "css-loader"},
         { loader: "postcss-loader"},
         { loader: "sass-loader",options: {implementation: require("node-sass")}}
        ]
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        exclude: /node_modules/,
        use:[
          {loader:'file-loader',options:{name:'./assets/[name].[ext]'}},
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              },

            }
          },
        ],
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
        template: './src/index.html',
        filename:"./index.html",
        inject:true
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
        filename: "bundle.css"
    })
  ],
  devServer:{
    contentBase: path.join(__dirname, './dist'),
    compress: true,
    bonjour: true,
    hot: true,
    stats:"errors-only",
    open: 'Chrome',
  }

};