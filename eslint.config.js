
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "@typescript-eslint/no-unused-vars": "off",
      // CRITICAL SEO RULE: Prevent window.location.origin usage in page components
      "no-restricted-globals": [
        "error",
        {
          "name": "location",
          "message": "❌ SEO VIOLATION: Use buildCanonicalUrl() from '@/utils/url-builder' instead of window.location.origin to prevent canonical/OG URL mismatches. This prevents Ahrefs redirect chain errors."
        }
      ],
      "no-restricted-syntax": [
        "error",
        {
          "selector": "MemberExpression[object.name='window'][property.name='location']",
          "message": "❌ SEO VIOLATION: Use buildCanonicalUrl() from '@/utils/url-builder' instead of window.location for consistent domain usage. Critical for preventing canonical URL mismatches."
        }
      ]
    },
  }
);
