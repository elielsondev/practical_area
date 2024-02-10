console.log('Hello World!');

// Váriáveis & Constantes:
const faith = 'Yeshua Hamashia';
let name = 'Yeshua';
let age = 33;
let isMarried = false;

// Tipos primitivos:
let name2 = 'Elielson'; // string
let age2 = 33; // number
let isMarried2 = true; // boolean
let isAdmin = null; // null
let user; // undefined

// Operadores aritméticos:
let n1 = 2;
let n2 = 10;

let sum = n1 + n2; // soma de n1 e n2;
let sub = n1 - n2; // subtração de n1 por n2;
let mult = n1 * n2; // multiplicação de n1 por n2;
let div = n1 / n2; // divisão de n1 por n2;
let mod = n1 % n2; // resto da divisão de n1 por n2;
let exp = n1 ** n2; // 2 elevado a 10
let inc =  ++n1; // n1 = n1 + 1;
let dec = --n2; // n2 = n2 - 1;

// if/else:
let statusSignal = 'green';

if (statusSignal === 'green') {
    console.log('Drive');
}
else if (statusSignal === 'yellow') {
    console.log('Prepare to stop');
}
else {
    console.log('Stop');
};

// switch:
switch (statusSignal) {
    case 'green':
        console.log('Drive');
        break;
    case 'yellow':
        console.log('Prepare to stop');
        break;
    default:
        console.log('Stop');
};

// Operadores lógicos:

// && (AND) Só retorna true apenas quando as duas condições forem verdadeiras.
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// || (OR) Só retorna falso quando ambas condições forem falsas.
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// ! (NOT) Ele é capaz de inverter o valor booleano de um elemento.
console.log(!true); // false
console.log(!false); // true

// Operadores de comparação:

// == (IGUAL) Retorna verdadeiro caso os operandos sejam iguais.
console.log(1 == "1"); // true
console.log(1 == 1); // true
console.log(1 == 2); // false

// != (NÃO IGUAL) Retorna verdadeiro caso os operandos não sejam iguais.
console.log(1 != "1"); // false
console.log(1 != 1); // false
console.log(1 != 2); // true

// === (ESTRITAMENTE IGUAL) Retorna verdadeiro caso os operandos sejam iguais e do mesmo tipo.
console.log(1 === "1"); // false
console.log(1 === 1); // true
console.log(1 === 2); // false

// !== (ESTRITAMENTE NÃO IGUAL) Retorna verdadeiro caso os operandos não sejam iguais e/ou não sejam do mesmo tipo.
console.log(1 !== "1"); // true
console.log(1 !== 1); // false
console.log(1 !== 2); // true

// > (MAIOR QUE) Retorna verdadeiro caso o operando da esquerda seja maior que o da direita.
console.log(1 > "1"); // false
console.log(2 > "1"); // true
console.log(2 > 1); // true
console.log(2 > 2); // false
console.log(1 > 2); // false

// >= (MAIOR QUE OU IGUAL) Retorna verdadeiro caso o operando da esquerda seja maior ou igual ao da direita.
console.log(1 >= "1"); // true
console.log(2 >= "1"); // true
console.log(2 >= 1); // true
console.log(2 >= 2); // true
console.log(1 >= 2); // false

// < (MENOR QUE) Retorna verdadeiro caso o operando da esquerda seja menor que o da direita.
console.log(1 < "1"); // false
console.log(2 < "1"); // false
console.log(2 < 1); // false
console.log(2 < 2); // false
console.log(1 < 2); // true

// <= (MENOR QUE OU IGUAL) Retorna verdadeiro caso o operando da esquerda seja menor ou igual ao da direita.
console.log(1 <= "1"); // true
console.log(2 <= "1"); // false
console.log(2 <= 1); // false
console.log(2 <= 2); // true
console.log(1 <= 2); // true

// Array:
let array = [1, 2, 3, 4, 5];
let array2 = ['Yeshua', 'Elielson', 'Yuri'];
let array3 = [true, false, true];
let array4 = [1, 'Yeshua', true];

// For:
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
};

// for/in:
for (let i in array) {
    console.log(array[i]); // 1, 2, 3, 4, 5
};

let car = { type: "Fiat", model: "500", color: "white"};

for (let index in car) {
console.log(index, car[index]);
}

// for/of:
for (let i of array) {
    console.log(i); // 1, 2, 3, 4, 5
};

let food = ["hamburguer", "bife", "acarajé"];

for (let value of food) {
    console.log(value);
}

let word = "Hello";
for (let letter of word) {
    console.log(letter);
}
