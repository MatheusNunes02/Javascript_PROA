function calcularIdadeGato(idade){
    let idadeConvertida = 0;
    for(i=1; i<=idade; i++){
        if(i==1){
            idadeConvertida+= 15;
        }else if(i==2){
            idadeConvertida+= 10;
        }else{
            idadeConvertida+= 4;
        }
    }

    document.write("A idade do gato convertida em idade humana é: "+idadeConvertida+" <br>")
}

calcularIdadeGato(7);
// calcularIdadeGato(8);
// calcularIdadeGato(9);
// calcularIdadeGato(10);