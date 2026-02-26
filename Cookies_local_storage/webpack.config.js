const path = require("path");

module.exports = {
  mode: "development",

  entry: "./src/index.js",

  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },

  devServer: {
    static: {
      directory: path.resolve(__dirname), 
    },
    port: 8080,
    open: true,
  },
};
