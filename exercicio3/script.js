function Somar(num1, num2) {
    return num1 + num2;
}

function Subtrair(num1, num2) {
    return num1 - num2;
}

function Multiplicar(num1, num2) {
    return num1 * num2;
}

function Dividir(num1, num2) {
    return num1 / num2;
}

const primeiroNumero = Number(prompt("Digite um número:"));
const segundoNumero = Number(prompt("Digite outro número:"));

console.log(`Soma: ${Somar(primeiroNumero, segundoNumero)}`);
console.log(`Subtração: ${Subtrair(primeiroNumero, segundoNumero)}`);
console.log(`Multiplicação: ${Multiplicar(primeiroNumero, segundoNumero)}`);
console.log(`Divisão: ${Dividir(primeiroNumero, segundoNumero)}`);
