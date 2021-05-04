const path = require("path");

const commonModuleNameMappers = {
  "\\.module\\.(css|scss)$": "identity-obj-proxy",
  "\\.(css|scss)$": require.resolve("./__mocks__/empty_mock.js"),
};

module.exports = {
  rootDir: path.join(__dirname, "./"),
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  moduleFileExtensions: ["js", "jsx"],
  moduleDirectories: ["node_modules", "js"],
  resetMocks: true,
  setupFilesAfterEnv: ["<rootDir>/test/setupTests.js"],
  testEnvironment: "jsdom",
  transformIgnorePatterns: ["node_modules/(?!${greeter})"],
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
  moduleNameMapper: commonModuleNameMappers,
  verbose: true,
  collectCoverageFrom: ["example_test/**/*.{js,jsx}", "js/**/*.{js,jsx}"],
  coverageDirectory: "docs/coverage",
};
