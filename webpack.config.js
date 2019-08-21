const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin') //vue-loader中慣用的套件
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const routeApp = 'src'

module.exports = {
  entry: './src/main.js', //編譯的入口
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      //定義各種屬性的檔案使用的loader
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // this will apply to both plain `.js` files
      // AND `<script>` blocks in `.vue` files
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          plugins: ['@babel/plugin-syntax-dynamic-import']
        }
      },
      // this will apply to both plain `.css` files
      // AND `<style>` blocks in `.vue` files
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.svg$/,
        loader: 'vue-svg-loader'
      }
    ]
  },
  plugins: [
    // make sure to include the plugin for the magic
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: `${routeApp}/index.html`
    }),
    new CopyWebpackPlugin([
      {
        from: `${routeApp}/assets`,
        to: 'assets'
      },
      {
        from: `${routeApp}/css`, //`${routeApp}` 會等於src
        to: 'css'
      }
    ])
  ],
  resolve: {
    //將@置換為路徑'src'
    alias: {
      '@': path.resolve('src')
    }
  },
  devServer: {
    contentBase: path.resolve(__dirname, `./src`),
    port: 4300
  }
}
