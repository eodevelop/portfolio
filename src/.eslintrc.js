module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended", // React 규칙
    "plugin:@typescript-eslint/recommended", // TypeScript 규칙
    "plugin:prettier/recommended", // Prettier 규칙
  ],
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    // 추가 규칙 설정 가능
    "prettier/prettier": "error",
  },
};
