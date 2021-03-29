module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  transformIgnorePatterns: [
    'node_modules/(?!@ngrx|ngx-socket-io)', // List any packages here that error
  ],
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest',
  },
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/src/test.ts',
  ],
  moduleNameMapper: {
    '@ui-controls/(.*)': '<rootDir>src/app/ui-controls/$1',
    '@services/(.*)': '<rootDir>/src/app/services/$1',
    '@environments/(.*)': '<rootDir>/src/environments/$1',
    '@models/(.*)': '<rootDir>src/app/models/$1',
  },
}
