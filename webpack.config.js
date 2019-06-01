const path = require("path");
module.exports = {
  entry: "./index.js",
  target: "node",
  output: {
    filename: "index.bundle.js"
  },
  mode: "development"
};
