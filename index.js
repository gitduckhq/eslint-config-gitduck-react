module.exports = {
  extends: [
    'gitduck',
    'plugin:react/recommended',
  ],
  rules: {
    'react/jsx-indent': [
      'error',
      2,
    ],
    'react/jsx-max-props-per-line': [
      'error',
      {
        maximum: 1,
        when: 'multiline',
      },
    ],
    'react/jsx-sort-props': [
      'error',
      {
        ignoreCase: true,
      },
    ],
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
}
