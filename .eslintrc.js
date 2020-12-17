module.exports = {
  env: {
    node: true,
  },
  plugins: ["prettier", "lodash"],
  parser: "@babel/eslint-parser",
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      classes: true,
      experimentalObjectRestSpread: true,
    },
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  rules: {
    "prettier/prettier": "error",
  },
};
