import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';


export default defineConfig([
  { files: ['**/*.{js,mjs,cjs,vue}'] },
  { files: ['**/*.{js,mjs,cjs,vue}'], languageOptions: { globals: globals.browser } },
  { files: ['**/*.{js,mjs,cjs,vue}'], plugins: { js }, extends: ['js/recommended'] },
  pluginVue.configs['flat/essential'],
  { rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'eqeqeq': ['error', 'always'],
    'indent': ['error', 2],
    'no-eval': ['error'],
    'no-trailing-spaces': ['error'],
    'no-unused-vars': ['error'],
    'no-var': ['error'],
    'prefer-const': ['error'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
  },
  },
]);