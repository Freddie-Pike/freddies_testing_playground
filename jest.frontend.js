const { commonConfig, commonModuleNameMappers } = require("./jest-common");

module.exports = {
  ...commonConfig,
  moduleDirectories: ["node_modules", "js"],
  moduleNameMapper: {
    ...commonModuleNameMappers,
  },
  roots: ["<rootDir>/"],
  displayName: {
    name: "Frontend",
    color: "white",
  },
};
