const { defaults } = require('jest-config');
module.exports = {
  // Specify the extensions
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx', 'svg'],

  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: ['src/**/*.{js,jsx,mjs}'],

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // Ignore node_modules and enzyme configuration file
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/__tests__/config/'
  ],

  // Mock styles
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy'
  },

  // Mock images
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/fileTransformer.js'
  },

  // Define code coverage rule
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90
    }
  }
};
