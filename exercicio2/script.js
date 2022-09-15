
function SomaNumero(num1, num2) {
    return num1 + num2;
}

function PrimeiroMaiorOuIgualAoSegundo(num1, num2) {
    return num1 >= num2;
}

function EhPar(num1) {
    return num1 % 2 === 0;
}

function ImprimeTexto(mensagem) {
    console.log(`Contém ${mensagem.length} caracteres - ${mensagem.toUpperCase()}`);
}

const numero1 = Number(prompt("Informe um número"));
const numero2 = Number(prompt("Informe outro número"));

console.log(`Soma: ${SomaNumero(numero1, numero2)}`);
console.log(`É igual: ${PrimeiroMaiorOuIgualAoSegundo(numero1, numero2)}`);
console.log(`O primeiro número é ${EhPar(numero1) ? "par" : "ímpar"}.`);
console.log(`O segundo número é ${EhPar(numero2) ? "par" : "ímpar"}.`);
ImprimeTexto("Final do exercício");
