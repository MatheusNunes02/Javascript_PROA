let x = Number(prompt("Digite o primeiro número"));
let y = Number(prompt("Digite o segundo número"));
let z = Number(prompt("Digite o terceiro número"));

if(x != y && y != z && z!= x){
    if(x>y && y>z){
        document.write("Soma dos maiores:"+(x+y));
    }else if(x>z && z>y){
        document.write("Soma dos maiores:"+(x+z));
    }else{
        document.write("Soma dos maiores:"+(y+z));
    }
}else{
    document.write("Não vale números iguais");
}