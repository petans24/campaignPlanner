'use strict';

const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  extends: 'fbjs',

  plugins: [
    'react'
  ],

  // We're stricter than the default config, mostly. We'll override a few rules
  // and then enable some React specific ones.
  rules: {
    'accessor-pairs': OFF,
    'brace-style': [ERROR, '1tbs'],
    'comma-dangle': OFF,
    'consistent-return': OFF,
    'dot-location': [ERROR, 'property'],
    'dot-notation': ERROR,
    'eol-last': ERROR,
    'eqeqeq': [ERROR, 'allow-null'],
    'indent': OFF,
    'jsx-quotes': [ERROR, 'prefer-double'],
    'keyword-spacing': [ERROR, {after: true, before: true}],
    'no-bitwise': OFF,
    'no-inner-declarations': [ERROR, 'functions'],
    'no-multi-spaces': ERROR,
    'no-restricted-syntax': [ERROR, 'WithStatement'],
    'no-shadow': ERROR,
    'no-unused-expressions': ERROR,
    'no-unused-vars': [ERROR, {args: 'none'}],
    'no-useless-concat': OFF,
    'quotes': [ERROR, 'single', {avoidEscape: true, allowTemplateLiterals: true }],
    'space-before-blocks': ERROR,
    'space-before-function-paren': OFF,
    'curly': [ERROR, 'multi-line'],
    'object-curly-spacing': [ERROR, 'always'],
    'comma-spacing': [ERROR, { after: true, before: false }],
    'max-len': [WARN, 80],
    'max-len': [ERROR, 160],

    // React & JSX
    // Our transforms set this automatically
    'react/jsx-boolean-value': [ERROR, 'always'],
    'react/jsx-no-undef': ERROR,
    // We don't care to do this
    'react/jsx-sort-prop-types': OFF,
    'react/jsx-tag-spacing': ERROR,
    'react/jsx-uses-react': ERROR,
    'react/no-is-mounted': OFF,
    // This isn't useful in our test code
    'react/react-in-jsx-scope': ERROR,
    'react/self-closing-comp': ERROR,
    // We don't care to do this
    'react/jsx-wrap-multilines': [ERROR, {declaration: false, assignment: false}]
  },

  globals: {
    expectDev: true,
  },
};
