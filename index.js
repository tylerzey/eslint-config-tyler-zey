module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "jest-formatting", "jest", "unused-imports"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  env: { es6: true, node: true, browser: true, "jest/globals": true },
  rules: {
    "unused-imports/no-unused-imports": "error",
    "import/no-cycle": [2, { maxDepth: 1 }],
    "import/order": ["error"],
    "no-console": "off",
    "jest-formatting/padding-around-describe-blocks": 2,
    "jest-formatting/padding-around-test-blocks": 1,
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "return" },
      { blankLine: "always", prev: "*", next: "block-like" },
    ],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "no-undef": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-empty-function": "off",
    "no-async-promise-executor": "off",
  },
};
