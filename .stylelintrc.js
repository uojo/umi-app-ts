module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-css-modules',
    // https://github.com/constverum/stylelint-config-rational-order/issues/10
    // "stylelint-config-rational-order",
    'stylelint-config-prettier',
  ],
  plugins: [
    // "stylelint-order",
    // "stylelint-config-rational-order/plugin",
    'stylelint-declaration-block-no-ignored-properties',
  ],
  rules: {
    // "order/properties-order": [],
    // "plugin/rational-order": [true, {
    //   "border-in-box-model": true,
    //   "empty-line-between-groups": true,
    // }],
    'unit-whitelist': ['rem', '%', 's', 'deg', 'vh'],
    'no-descending-specificity': null,
    'plugin/declaration-block-no-ignored-properties': true,
    // "selector-class-pattern": "^[a-z][a-zA-Z0-9]+$",
    indentation: 2,
  },
}
