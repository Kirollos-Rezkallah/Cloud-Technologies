let path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, 'main.js'),
    output: {
        filename: 'index.js'
    },
    mode: 'production',
    module: {
        rules: [
          {
            test: /.css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
          },
        ],
      },
      optimization: {
        minimizer: [
          `...`,
          new CssMinimizerPlugin(),
        ],
      },
      plugins: [new MiniCssExtractPlugin()],
}