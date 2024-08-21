//* DESAFIO
// Faça uma função que recebe um número de 1 a 26 e me retorne um array com as letras do alfabeto.
//Por exemplo, escolhi 2, então quero que ele retorne um array com A e B



function getAlphabetLetters(n) {
    // Verifica se o número está no intervalo válido
    if (n < 1 || n > 26) {
      throw new Error("O número deve estar entre 1 e 26");
    }
  
    // Cria um array vazio para armazenar as letras
    const letters = [];
    
    // Adiciona as letras ao array
    for (let i = 0; i < n; i++) {
      // A = 65 no código ASCII, então 65 + i dá a letra correta
      letters.push(String.fromCharCode(65 + i));
    }
  
    return letters;
  }
  
  // Exemplo de uso:
  console.log(getAlphabetLetters(5)); // ["A", "B"]
  