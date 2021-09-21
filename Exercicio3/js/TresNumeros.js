let x = Number(prompt("Digite o primeiro número"));
let y = Number(prompt("Digite o segundo número"));
let z = Number(prompt("Digite o terceiro número"));

if(x != y && y != z && z!= x){
    if(x>y && x>z){
        document.write(`O maior número entre eles é o ${x}`)
    }else if(y>x && y>z){
        document.write(`O maior número entre eles é o ${y}`)
    }else{
        document.write(`O maior número entre eles é o ${z}`)
    }
}else{
    document.write("Não vale números iguais")
}