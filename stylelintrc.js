module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier'],
  plugins: ['stylelint-order', './.stylelints/plugins/custom-rules.js'],
  ignoreFiles: ['**/node_modules/**', './src/design/css/base/*.scss'],
  rules: {
    'at-rule-no-vendor-prefix': true,
    'media-feature-name-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'selector-no-vendor-prefix': true,
    'value-no-vendor-prefix': true,
    'declaration-block-no-redundant-longhand-properties': null,
    'selector-id-pattern': /^[a-z][a-zA-Z0-9]*$/,
    'selector-class-pattern': /^(a|m|o|t|p|hp)(-[a-z][A-Za-z0-9]*){1,3}(__[A-Za-z0-9]+)?$/,
    'unit-disallowed-list': ['vh', 'vw'],
    'selector-pseudo-class-disallowed-list': ['hover'],
    'property-disallowed-list': ['font', 'font-family', 'font-weight', 'z-index'],
    'selector-disallowed-list': /^[^.#&]/,
    'at-rule-no-unknown': null,
    'color-hex-case': 'lower',
    'color-hex-length': 'long',
    'color-named': 'never',
    'comment-empty-line-before': 'never',
    'comment-whitespace-inside': 'always',
    'declaration-block-trailing-semicolon': 'always',
    'declaration-colon-space-after': 'always-single-line',
    'declaration-colon-space-before': 'never',
    'font-family-name-quotes': 'always-where-recommended',
    'function-url-quotes': 'always',
    indentation: 2,
    'media-feature-colon-space-before': 'never',
    'media-feature-parentheses-space-inside': 'never',
    'no-empty-source': null,
    'order/order': ['custom-properties', 'declarations'], // Sort alphabetically
    'order/properties-alphabetical-order': true,
    'rule-empty-line-before': ['always', { ignore: ['first-nested', 'after-comment'] }],
    'scss/at-rule-no-unknown': true,
    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-attribute-quotes': 'always',
    'selector-combinator-space-after': 'always',
    'selector-no-qualifying-type': true,
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-pseudo-element-colon-notation': 'single',
    'string-quotes': 'single',
  },
  overrides: [
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
      rules: {
        'at-rule-no-unknown': null,
        'scss/operator-no-newline-after': null,
        'scss/at-rule-no-unknown': true,
        'scss/at-mixin-pattern': /^_?[a-z0-9-]+$/,
      },
    },
  ],
};
