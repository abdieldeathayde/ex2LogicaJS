/*
*Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". 
Caso contrário, mostre "Boa semana!".

Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". 
Caso contrário, mostre "Tente novamente para ganhar.".

Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
* 
*/

// questão 1

/*
let dia = prompt("Digite um dia: ");

let booleano = true;

while(booleano == true) {

    if (dia == "Sábado" || dia == "Domingo") {
        alert("Bom final de semana! ");
    } else {
        alert("Boa semana!");
    }

    booleano = false;
}*/

// questao 2

/*

let numero = prompt("Por favor, digite um número: ");

if (numero < 0) {
    alert("Número é negativo");
} else {
    alert("Número é positivo");
}

Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". 
Caso contrário, mostre "Tente novamente para ganhar.".

Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.*/

//questão 3

/*

let pontuacao = prompt("Digite a pontuacao: ");

if (pontuacao >= 100) {
    alert("Parabéns, você venceu!")
} else {
    alert("Tente novamente para ganhar.");
}*/


/** Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.*/ 

/*
 questao 3

nome = prompt("por favor Digite seu nome: ");

alert(`Seja bem vindo ${nome}`);


*/


let nome = prompt("por favor Digite seu nome: ");
let saldo = prompt("Por favor, digite seu saldo: ");
let PF = prompt("por favor, digite seu PF");

class Banco {
    nome = prompt("por favor Digite seu nome: ");

//    alert(`Seja bem vindo ${nome}`);

    get nome() {
        return this.nome;
    }

    set nome(nome) {
        this.nome = nome;
    }
    saldo = prompt("Por favor, digite seu saldo: ");

    get saldo () {
        return this.saldo;
    }

    set saldo (saldo) {
        this.saldo = saldo;
    }

    PF = prompt("por favor, digite seu PF");
    
    set PF(PF) {
        this.PF = PF;
    }


    get PF() {
        return this.PF;
    }
    PJ;

    get PJ() {
        return this.PJ;
    }

    constructor(nome, saldo, PF) {
        this.nome = nome;
        this.saldo = saldo;
        this.PF = PF;
    }
}


let banco = new Banco(nome, saldo, PF);


alert(`Olá, ${banco.nome}, seu saldo é: ${banco.saldo}.`);

alert((`Olá ${nome}, seu saldo é: ${saldo}`));

