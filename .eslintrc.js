module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    extends: [
        'airbnb-base',
    ],
    parserOptions: {
        ecmaVersion: 13,
    },
    rules: {
        indent: ['error', 4],
        'linebreak-style': ['error', 'windows'],
        'class-methods-use-this': 'off',
        'no-promise-executor-return': 'off',
        'consistent-return': 'off',
        'object-curly-newline': 'off',
        camelcase: 'off',
        'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
    },
};
