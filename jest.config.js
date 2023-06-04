module.exports = {
  preset: 'jest-preset-angular',
  roots: ['<rootDir>/src'],
  moduleNameMapper: {
    '^@src(.*)$': '<rootDir>/src$1',
    '^@app/components(.*)$': '<rootDir>/src/app/components$1',
    '^@app/services(.*)$': '<rootDir>/src/app/services$1',
  },
  collectCoverage: true,
  coverageDirectory: "coverage",
  collectCoverageFrom: [
    "src/app/**/*.ts",
    "!src/app/**/*.module.ts"
  ],
  moduleDirectories: ['node_modules', 'src'],
  setupFilesAfterEnv: ['<rootDir>/setupJest.ts'],
};
