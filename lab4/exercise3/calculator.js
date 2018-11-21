var isInteger = function (param) {
    return Number.isInteger(param);
}

var addTwoNumbers = function (x, y) {
    if(!isInteger(x) || !isInteger(y)) {
        throw new Error()
    }
    return x + y;
}

var subtractTwoNumbers = function (x, y) {
    if(!isInteger(x) || !isInteger(y)) {
        throw new Error()
    }
    return x - y;
}

module.exports = {
    addTwoNumbers: addTwoNumbers,
    subtractTwoNumbers: subtractTwoNumbers
}