module.exports = {
  printWidth: 100,
  tabWidth: 2,
  singleQuote: true,
  semi: false,
  trailingComma: 'all',
  arrowParens: 'always',
  overrides: [
    {
      files: '*.{js,jsx,tsx,ts,scss,json,html,scss}',
      options: {
        tabWidth: 2,
      },
    },
  ],
  endOfLine: 'auto',
}
