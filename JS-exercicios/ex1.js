//Desafio 1
//Faça uma função que recebe um número de 1 a 26 e me retorne a letra do alfabeto daquele número

function getLetter(num) { 
    if (num < 1 || num > 26) {
        throw new Error("O número está fora do intervalo de 1 a 26")
    }

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; //o A tem índice 0

    return alphabet[num-1]
}

console.log(getLetter(1));

// em arrow: const getLetter = (num) => {
    // resumindo: const nomeDaFuncao = (parametros) => { corpoDaFuncao };