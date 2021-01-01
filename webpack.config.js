const path = require(`path`);
const miniCss = require(`mini-css-extract-plugin`);

module.exports = {
  entry: `./source/js/index.js`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `build`)
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
      }
    ],
  },
  plugins: [
    new miniCss({
      filename: `style.css`,
    }),
  ],
  resolve: {
    extensions: [`.js`, `json`],
  },
  devtool: `source-map`,
};
