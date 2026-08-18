// @ts-check
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';

export default tseslint.config(
  {
    ignores: [
      '**/dist/**',
      '**/node_modules/**',
      '**/.vercel/**',
      '**/.history/**',
      '**/coverage/**',
      'jvf_parser/docs/**',
      'jvf_parser/samples/**',
      'jvf_viewer/test-files/**',
      '**/*.d.ts',
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    rules: {
      // Codebase používá `_`-prefixed nepoužité parametry záměrně (destructuring, callbacky).
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      // Doménový kód často pracuje s `any` při parsování XML/GML — degradováno na warning.
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
  // Prettier musí být poslední — vypíná formátovací pravidla, která by kolidovala s Prettier.
  eslintConfigPrettier,
);
