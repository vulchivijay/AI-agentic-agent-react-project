import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import react from 'eslint-plugin-react';

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  js.configs.recommended,
  ...compat.extends('plugin:react/recommended'),
  {
    files: ['*.ts', '*.tsx'],
    rules: {
      // Add TypeScript-specific rules here
    },
  },
];
