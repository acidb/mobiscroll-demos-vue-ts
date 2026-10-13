import js from '@eslint/js'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import { globalIgnores } from 'eslint/config'
import pluginCypress from 'eslint-plugin-cypress'
import importPlugin from 'eslint-plugin-import-x'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'

export default defineConfigWithVueTs(
  globalIgnores(['dist/**', 'dist-ssr/**', 'coverage/**', 'cypress/support/*.ts']),
  { linterOptions: { reportUnusedDisableDirectives: 'off' } },
  js.configs.recommended,
  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,
  skipFormatting,
  {
    ...pluginCypress.configs.recommended,
    files: [
      '**/__tests__/*.{cy,spec}.{js,ts,jsx,tsx}',
      'cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}'
    ]
  },
  {
    files: ['**/*.{js,jsx,cjs,mjs,ts,tsx,cts,mts,vue}'],
    plugins: { import: importPlugin },
    languageOptions: {
      ecmaVersion: 'latest',
      globals: { ...globals.browser, ...globals.node }
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'arrow-body-style': ['warn', 'as-needed'],
      'capitalized-comments': [
        'warn',
        'always',
        { ignorePattern: 'theme,?$|locale,?$|localeImport' }
      ],
      'import/order': ['warn', { alphabetize: { order: 'asc', caseInsensitive: true } }],
      'no-unassigned-vars': 'off',
      'no-useless-assignment': 'off',
      'no-var': 'warn',
      'one-var': ['warn', 'never'],
      'prefer-arrow-callback': 'warn',
      'sort-imports': ['warn', { ignoreCase: true, ignoreDeclarationSort: true }],
      'vue/multi-word-component-names': 'off'
    }
  },
  {
    files: ['**/*.{ts,tsx,cts,mts,vue}'],
    rules: { 'no-undef': 'off', 'no-unused-vars': 'off' }
  }
)
