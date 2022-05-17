//@ts-nocheck

function calculator(number1, number2, operator) {
    try {
        let result;
        if (operator == '+') {
            result = number1 + number2;
        } else if (operator == '-') {
            result = number1 - number2;
        } else if (operator == '*') {
            result = number1 * number2;
        } else if (operator == '/') {
            result = number1 / number2;
        } else {
            throw RangeError("The operator must be +, -, * , /")
        }
        return result;
    } catch (err) {
        console.log(err.message)
    }
}

console.log(calculator(3, 9, '%'));