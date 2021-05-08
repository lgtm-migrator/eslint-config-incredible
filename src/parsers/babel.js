module.exports = {
    'parser'        : 'babel-eslint',
    'parserOptions' : {
        'sourceType'   : 'module',
        'ecmaFeatures' : {
            'arrowFunctions'                   : true,
            'blockBindings'                    : true,
            'classes'                          : true,
            'defaultParams'                    : true,
            'destructuring'                    : true,
            'forOf'                            : true,
            'generators'                       : false,
            'modules'                          : true,
            'objectLiteralComputedProperties'  : true,
            'objectLiteralDuplicateProperties' : false,
            'objectLiteralShorthandMethods'    : true,
            'objectLiteralShorthandProperties' : true,
            'restParams'                       : true,
            'spread'                           : true,
            'superInFunctions'                 : true,
            'templateStrings'                  : true,
            'jsx'                              : true
        }
    }
};
