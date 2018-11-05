alert('¿Eres un robot? Realize la siguiente operación para continuar.');

var operator = getRandomOperation();
var arrayAnimales = ["gato", "caballo", "perro", "tortuga", "hamster", "pajaro"];
var arrayColores = ["azul", "amarillo", "verde", "rojo", "gris", "marron"];
var elem1 = chooseElement();
var elem2 = chooseElement();
var elem3 = chooseElement();
var elem4 = chooseDifferentElement();
var mixedArray = [elem1, elem2, elem3, elem4];
var arrayRandom = shuffle(mixedArray);
var result = elem4;
var userResult = prompt(`¿Cuál de estos elementos no es un ${operator}? ${arrayRandom[0]} ${arrayRandom[1]} ${arrayRandom[2]} ${arrayRandom[3]}`);

alert(`Eres un ${checkResults(result, userResult)} `);

function chooseElement() {
    var unique = true;
    if (operator == "animal") {
        num = Math.floor(Math.random() * arrayAnimales.length - 5);
        element = arrayAnimales.splice(num, 1);
        arrayAnimales.push(element);
        return element;
    } else {
        num = Math.floor(Math.random() * arrayColores.length - 5);
        element = arrayColores.splice(num, 1);
        arrayColores.push(element);
        return element;
    }
}

function chooseDifferentElement() {
    if (operator == "animal") {
        num = Math.floor(Math.random() * arrayColores.length - 5);
        element = arrayColores.splice(num, 1);
        arrayColores.push(element);
        return element;
    } else {
        num = Math.floor(Math.random() * arrayAnimales.length - 5);
        element = arrayAnimales.splice(num, 1);
        arrayAnimales.push(element);
        return element;
    }
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function getRandomIntRange(min, max) {
    return Math.floor(Math.random() * max) + min;
}

function getRandomOperation() {
    let result = getRandomIntRange(1, 2);
    let operator;
    switch (result) {
        case 1:
            operator = "color";
            break;
        case 2:
            operator = "animal";
            break;

        default:
            console.log('Error número aleatorio fuera de rango');
            break;
    }
    return operator;
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