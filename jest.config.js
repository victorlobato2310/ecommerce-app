module.exports = {
  preset: 'jest-preset-angular',
  roots: ['<rootDir>/src'],
  testMatch: ['**/tests/**/*.+(ts|js)', '**/?(*.)+(spec|test).+(ts|js)'],
  moduleNameMapper: {
    '^@src(.*)$': '<rootDir>/src$1',
    '^@app/components(.*)$': '<rootDir>/src/app/components$1',
    '^@app/services(.*)$': '<rootDir>/src/app/services$1',
  },
  moduleDirectories: ['node_modules', 'src'],
  setupFilesAfterEnv: ['<rootDir>/setupJest.ts'],
};
