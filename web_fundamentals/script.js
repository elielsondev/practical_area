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