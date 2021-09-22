let prova1 = Number(prompt("Nota da primeira prova"));
let prova2 = Number(prompt("Nota da segunda prova"));
let prova3 = Number(prompt("Nota da terceira prova"));
let prova4 = Number(prompt("Nota da quarta prova"));

let media = (prova1+prova2+prova3+prova4)/4;

document.write(`Sua média é ${(media).toFixed}`);
