const path = require(`path`);
const miniCss = require(`mini-css-extract-plugin`);
const copy = require(`copy-webpack-plugin`);

module.exports = {
  entry: `./source/index.js`,
  mode: `development`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `build`),
    publicPath: ``,
  },
  devServer: {
    contentBase: path.join(__dirname, `build`),
    open: true,
    inline: false,
    port: 1337,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      }, {
        test: /\.(s*)css$/,
        use: [
          miniCss.loader,
          `css-loader`,
          `sass-loader`,
        ]
      }, {
        test: /\.(png|jpg|jpeg)$/i,
        loader: `file-loader`,
        options: {outputPath: `img`, useRelativePaths: true}
      }, {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: `file-loader`,
        options: {outputPath: `fonts`, useRelativePaths: true}
      }
    ],
  },
  plugins: [
    new miniCss({
      filename: `style.css`,
    }),
    new copy({
      patterns: [{
        context: `./source/`,
        from: `**/*.html`,
        to: `./`,
        force: true
      }]
    })
  ],
  devtool: `source-map`,
};
