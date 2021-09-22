let total = 0;
let valoresInformados = ``;

for(let i=1; i<=10; i++){
    let valor = Number(prompt(`Digite o ${i}º valor`));
    if(i<10){
        valoresInformados += `${valor}, `;
    }else{
        valoresInformados += `${valor};`;
    }
    total += valor;
}

document.write(`Os valores informadores foram: ${valoresInformados} <br>
A média aritmética é: ${(total/10).toFixed(2)}`);