alert('¿Eres un robot? Realize la siguiente operación para continuar.');

var operator = getRandomOperation();
var num1 = getRandomInt();
var num2 = getRandomInt();
var result = operationResult(num1, operator, num2);
var userResult = prompt(`Resultado ${num1} ${operator} ${num2} = ${result} (Resultado mostrado solo para comprobación)`);

alert(`Eres un ${checkResults(result, userResult)} `);

function getRandomAribitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomIntRange(min, max) {
    return Math.floor(Math.random() * max) + min;
}

function getRandomInt() {
    return Math.floor(Math.random() * 1000);
}

function getRandomOperation() {
    let result = getRandomIntRange(1, 3);
    let operator;
    switch (result) {
        case 1:
            operator = "+";
            break;
        case 2:
            operator = "-";
            break;
        case 3:
            operator = "*";
            break;
    
        default:
            console.log('Error número aleatorio fuera de rango');
            break;
    }
    return operator;
}

function operationResult(num1, operator, num2) {
    let result;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1-num2;
        break;
        case "*":
            result = num1*num2;
        break;
        default:
            console.log('Error operación');
            break;
    }
    return result;
}

function checkResults(result, userResult) {
    let checkResult;
    if (result == userResult) {
        checkResult = "humano";
    } else {
        checkResult = "robot";
    }
    return checkResult;
}