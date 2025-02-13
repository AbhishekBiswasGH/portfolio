import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import prettierPlugin from "eslint-plugin-prettier";
import importPlugin from "eslint-plugin-import";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

const eslintConfig = [
  ...compat.extends(
    "plugin:prettier/recommended",
    "next/core-web-vitals",
    "next/typescript",
    "prettier"
  ),
  {
    plugins: {
      prettier: prettierPlugin,
      import: importPlugin,
      "jsx-a11y": jsxA11yPlugin
    },
    rules: {
      "prettier/prettier": ["error"],
      "import/no-unresolved": "error",
      "import/named": "error",
      "import/default": "error",
      "import/no-extraneous-dependencies": "error",
      // "import/order": [
      //   "error",
      //   {
      //     groups: [["builtin", "external", "internal"]]
      //   }
      // ],
      "jsx-a11y/alt-text": "warn",
      "jsx-a11y/anchor-is-valid": "warn",
      "jsx-a11y/click-events-have-key-events": "warn",
      "jsx-a11y/heading-has-content": "warn",
      "jsx-a11y/no-autofocus": "warn",
      "jsx-a11y/no-static-element-interactions": "warn",
      "jsx-a11y/role-has-required-aria-props": "warn",
      "jsx-a11y/aria-props": "warn",
      "jsx-a11y/aria-role": "warn",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn"
    }
  }
];

export default eslintConfig;
