var jogador1 = 1;
var jogador2 = 0;
var placar;

// ESTRUTURA ANINHADA
/* if (jogador1 != -1){
    if(jogador1 > 0){
        console.log('Jogador 1 marcou ponto!');
    }else if(jogador2 > 0){
        console.log('Jogador 2 marcou ponto');
    }else{
        console.log('Ninguém marcou ponto');
    }
} */

// IF TERNARIO
/* jogador1 != -1 && jogador2 != -1 ? console.log('Jogadores válidos') : console.log('Jogadores inválidos') */

/* if (jogador1 > 0) {
    console.log('Jogador 1 marcou ponto!');
} else if (jogador2 > 0) {
    console.log('Jogador 2 marcou ponto');
} else {
    console.log('Ninguém marcou ponto');
} */

/* if (jogador1 > 0 && jogador2 == 0) {
    console.log('Jogador 1 marcou ponto!');
    placar = jogador1 > jogador2;
} else if (jogador2 > 0 && jogador1 == 0) {
    console.log('Jogador 2 marcou ponto');
    placar = jogador2 > jogador1;
} else {
    console.log('Ninguém marcou ponto');
} */

/* switch (placar) {
    case placar = jogador1 > jogador2:
        console.log('jogador 1 ganhou');
        break;
    case placar = jogador1 > jogador2:
        console.log('jogador 1 ganhou');
        break;
    default:
        console.log('Ninguém ganhou')
}    */ 

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];
let object = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3'}


//for: EXECUTA UMA INSTRUÇÃO ATÉ QUE ELA SEJA FALSA
/* for(let indice = 0; indice < array.length; indice++){
    console.log(indice)
}
console.log("\n"); */

//for/in com array: EXECUTA REPETIÇÃO A PARTIR DE UMA PROPRIEDADE
/* for (let i in array){
    console.log(i)
}
console.log("\n"); */

//for/in com object
/* for(i in object){
    console.log(i)
}
console.log("\n");
 */

//"for/of com array: funciona como uma repetição a partir de um valor"
/* for(i of array){
    console.log(i);
}

//"for/of com object
for(i of object.propriedade1){
    console.log(i);
} */

// while: executa uma instrução enquanto determinada condição for verdadeira, verificação antes da execução
var a = 0;
/* while(a < 10){
    a++;
    console.log(a);
}
 */
// do/while: executa uma instrução até o momento que seja falsa, verificação depois da execução

do {
    a++;
    console.log(a);
} while(a < 10);