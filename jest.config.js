const completeCoverage = {
  branches: 100,
  functions: 100,
  lines: 100,
  statements: 100,
};

module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.(js|ts|vue)"],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 0,
    },
    "./src/constants": { ...completeCoverage },
    "./src/router": { ...completeCoverage },
    "./src/services": { ...completeCoverage },
    "./src/store": { ...completeCoverage },
    "./src/utils": { ...completeCoverage },
  },
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "src/registerServiceWorker.ts",
    "src/plugins/",
    "src/store/",
  ],
};
