function parcelar(){
    let parcelas = Number(prompt("Com quantas parcelas deseja pagar o drone artesanal?\n preço: R$8190.00 Max:15"
    ))


    if(parcelas>15){
        alert("Você não pode parcelar mais de 15 vezes!");
        parcelar();
    }else if(parcelas<=0){
        alert("As parcelas precisam ser um número maior que 0");
        parcelar();
    }else{
        let parecelaUnit = "R$"+((18230/parcelas).toFixed(2))
        document.write("São "+parcelas+" parcelas, logo a parcela unitária será "+parecelaUnit);
    }
}

parcelar();