const { commonConfig, commonModuleNameMappers } = require("./jest-common");

module.exports = {
  ...commonConfig,
  moduleDirectories: ["node_modules", "js"],
  moduleNameMapper: {
    ...commonModuleNameMappers,
  },
  roots: ["<rootDir>/"],
  runner: "jest-runner-eslint",
  testMatch: ['<rootDir>/js/**/*/*.jsx'],
  displayName: {
    name: "Lint",
    color: "blue",
  },
};
