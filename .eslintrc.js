module.exports = {
  root: true,
  env: {
    es6: true,
    node: true
  },
  // parser: 'babel-eslint',
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:cypress/recommended"
  ],
  ignorePatterns: ["*.min.js"],
  rules: {
    semi: ["error", "always"],
    "prettier/prettier": ["error"],
    "max-lines-per-function": ["error", 25],
    "no-console": [
      "error",
      {
        allow: ["error"]
      }
    ]
  }
};
