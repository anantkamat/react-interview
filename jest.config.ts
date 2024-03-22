export default {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.svg?$": "jest-transform-stub",
    ".+\\.(css|styl|less|sass|scss)$": "jest-css-modules-transform",
    // process `*.tsx` files with `ts-jest`
  },
  // moduleNameMapper: {
  //   "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/__ mocks __/fileMock.js",
  // },
};
