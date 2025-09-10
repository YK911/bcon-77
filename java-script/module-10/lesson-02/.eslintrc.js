import { files } from '@eslint/js';
import pkg from '@eslint/js';

const { rules: eslintRules } = pkg;

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      ...eslintRules.all,
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
    },
  },
];
