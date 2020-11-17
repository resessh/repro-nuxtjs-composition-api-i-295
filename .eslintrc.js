module.exports = {
  parser: '@babel/eslint-parser',
  plugins: ['import'],
  rules: {
    'import/no-unresolved': 2,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './']],
        extensions: ['.js'],
      },
    },
  },
};
