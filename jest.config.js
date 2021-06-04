const { commonConfig } = require("./jest-common");

module.exports = {
  ...commonConfig,
  projects: ["./jest.frontend.js", "./jest.lint.js"],
  verbose: true,
};
