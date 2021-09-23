let custo = Number(prompt("Quanto custa o produto?"));
let margem = Number(prompt("Quanto é a margem adicional por produto em % ?"));
let venda = (custo/100*margem)+custo;

document.write("Preço de venda: R$"+venda);