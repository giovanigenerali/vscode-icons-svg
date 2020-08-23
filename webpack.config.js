const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "vscode-icons-svg.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "umd",
  },
};
