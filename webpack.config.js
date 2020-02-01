// Exports Webpack's Configuration
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js", // Where application starts, where to start bundling
  mode: "development", // Saves us from having to run with development flag
  // Defines how exported javascript modules are transformed
  module: {
    rules: [
      // Transform JSX and ES6
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      // Processing CSS (no pre or post-processing)
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  // Extensions resolved by Webpack (allows importing modules without extensions)
  resolve: { extensions: ["*", ".js", ".jsx"] },
  // Location to place bundled code (also tells webpack server where to serve from)
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  // Setting up webpack-dev-server
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true // Hot reloading
  },
  // Instantiate new instance of plugin
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
