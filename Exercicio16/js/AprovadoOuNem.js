let n1 = Number(prompt("Digite a sua 1º nota"));
let n2 = Number(prompt("Digite a sua 2º nota"));

let media = (n1+n2)/2;

if(media>=7){
    document.write("Aprovado, sua média é: "+media);
}else{
    document.write("Reprovado, sua média é: "+media);
}