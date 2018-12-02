const assert = require('assert');

const validator = {
    objectConstructor: {}.constructor
}

validator.assertInputDataType = function(input) {
    if (input === undefined || input === null || input.constructor !== Object) {
        throw Error(`input is not a valid json object`)
    }
}
validator.assertInputParameters = function(input) {
    validator.assertInputDataType(input)

    if (!input.data) throw Error('data property required')
}

module.exports = validator;