export default [
  {
    ignores: ["node_modules/", "dist/", "build/"], // Ignore common directories
  },
  {
    files: ["**/*.js"], // Lint all JavaScript files
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
      "semi": ["error", "always"],
      "quotes": ["error", "double"],
    },
  },
];
