// tady je místo pro náš program

const calculate = (number1, operation, number2) => {
    if (operation === '+') {
        return number1 + number2
    } else if (operation === '-') {
        return number1 - number2
    } else if (operation === '*') {
        return number1 * number2
    } else if (operation === '/') {
        return number1 / number2
    } 
}

//funguje