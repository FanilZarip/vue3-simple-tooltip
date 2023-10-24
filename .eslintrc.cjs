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
    "no-unused-vars": "error",
    "no-use-before-define": "error",
    "no-var": "error",

    "vue/multi-word-component-names": [
      "error",
      {
        ignores: [],
      },
    ],
    "vue/no-async-in-computed-properties": "error",
    "vue/no-deprecated-v-bind-sync": "error",
    "vue/no-deprecated-v-on-native-modifier": "error",
    "vue/no-deprecated-slot-scope-attribute": "error",
    "vue/no-duplicate-attributes": "error",
    "vue/no-export-in-script-setup": "error",
    "vue/no-lifecycle-after-await": "error",
    "vue/no-mutating-props": "error",
    "vue/no-reserved-component-names": "error",
    "vue/no-reserved-keys": "error",
    "vue/no-reserved-props": "error",
    "vue/no-side-effects-in-computed-properties": "error",
    "vue/no-unused-components": "error",
    "vue/no-unused-vars": "error",

    "vue/html-end-tags": "error",
    "vue/no-multi-spaces": "error",
    "vue/require-explicit-emits": "error",
  },
};
