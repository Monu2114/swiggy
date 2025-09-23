/** @type {import('jest').Config} */
const config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",

  // Add this line to polyfill TextEncoder/TextDecoder in Jest
  setupFiles: ["<rootDir>/jest.setup.js"],
};

module.exports = config;
