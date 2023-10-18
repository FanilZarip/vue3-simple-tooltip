/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier/skip-formatting",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },

  rules: {
    "no-console": "error", // без console.log
    "no-debugger": "error", // без debugger
    "no-unused-vars": ["error"],

    "vue/multi-word-component-names": [
      "error",
      {
        ignores: [],
      },
    ],
    "vue/no-async-in-computed-properties": ["error"],
  },
};
