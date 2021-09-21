alert("Bem vindo, está página é uma calculadora");

function inicio(){
    let operacao = Number(prompt("Selecione a operação conforme o número correspondente: \n 1)Soma;\n 2)Subtração;\n 3)Multiplicação;\n 4)Divisão;\n 5)Finalizar a execução"));

    switch(operacao){
        case 1:
            soma();
            break;
        case 2:
            subtracao();
            break;
        case 3:
            multiplicacao();
            break;
        case 4:
            divisao();
            break;
        case 5:
            finalizar();    
            break;
        default:
            alert('Selecione um número entre 1 a 5 com base nas operações');
            inicio();
            break;
    }
}

function soma(){
    let x = Number(prompt("Insira o primeiro valor"));
    let y = Number(prompt("Insira o segundo valor"));

    alert(`A soma entre ${x} + ${y} = ${x+y}`);
    inicio();
}

function subtracao(){
    let x = Number(prompt("Insira o primeiro valor"));
    let y = Number(prompt("Insira o segundo valor"));

    alert(`A subtracão entre ${x} - ${y} = ${x-y}`);
    inicio();
}

function multiplicacao(){
    let x = Number(prompt("Insira o primeiro valor"));
    let y = Number(prompt("Insira o segundo valor"));

    alert(`A multiplicação entre ${x} x ${y} = ${x*y}`);
    inicio();
}

function divisao(){
    let x = Number(prompt("Insira o numerador valor"));
    let y = Number(prompt("Insira o denominador valor"));

    alert(`A divisão entre ${x} / ${y} = ${(x/y).toFixed(2)}, arredondada a duas casas decimais`);  
    inicio();
}

function finalizar(){
    let question = confirm("Você deseja sair?")

    if(question){
        alert("Obrigado por usar a nossa calculadora, até mais!")
        window.close();
    }else{
        inicio();
    }
}

inicio();