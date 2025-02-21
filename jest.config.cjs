module.exports = {
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  transformIgnorePatterns: [
    "/node_modules/(?!axios)/", // axios 모듈을 변환 대상으로 포함
  ],
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "jsx", "json", "node"],
};
