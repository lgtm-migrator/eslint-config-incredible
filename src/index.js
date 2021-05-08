const babel = require('./parsers/babel');

module.exports = {
    parser        : babel.parser,
    parserOptions : {
        ...babel.parserOptions
    },
    env     : require('./env/node'),
    extends : [
        './plugins/import',
        './plugins/censor',
        './plugins/security',
        './plugins/more'
    ].map(require.resolve),
    rules : {
        ...require('./rules/base')
    },
    overrides : [
        require('./overrides/tests')
    ]
};
