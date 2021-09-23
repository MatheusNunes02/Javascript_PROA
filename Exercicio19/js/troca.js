let a = Number(prompt("Digite o valor numérico da variável A:"));
let b = Number(prompt("Digite o valor numérico da variável B:"));

let troca = a;
a = b;
b = troca;

document.write(`O novo valor de A é : ${a} <br>O novo valor de B é: ${b}`);