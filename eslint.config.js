import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import tailwindcss from 'eslint-plugin-tailwindcss';
import prettierPlugin from 'eslint-plugin-prettier'; // Import the Prettier plugin

export default [
  {
    ignores: ['dist', 'node_modules'],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: tsParser, // Use TypeScript parser
    },
    plugins: {
      '@typescript-eslint': tseslint,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      tailwindcss,
      prettier: prettierPlugin, // Ensure Prettier is included as a plugin
    },
    rules: {
      // Base ESLint rules
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'no-unused-vars': 'off',
      'no-undef': 'off',

      // TypeScript rules
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',

      // React hooks rules
      ...reactHooks.configs.recommended.rules,

      // React Refresh rules
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // Tailwind CSS rules
      'tailwindcss/classnames-order': 'warn', // Enforce class order
      'tailwindcss/no-custom-classname': 'off', // Allow custom class names if necessary

      // Prettier integration
      'prettier/prettier': ['error'], // Prettier rules
    },
    settings: {
      tailwindcss: {
        callees: ['classnames', 'clsx'], // Support popular classnames libraries
        config: './tailwind.config.js', // Point to your Tailwind configuration
      },
    },
  },
];
