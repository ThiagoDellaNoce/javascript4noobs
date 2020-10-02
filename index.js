const numeros = [1,2,3,4,5]
const somaDeTodosOsValoresDoArray = numeros.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual
});
console.log(somaDeTodosOsValoresDoArray);
/**
 * Saida 
 * > 15
 */

const nome = ['D','a','n','i','e','l'];
const nomeConcatenado = nome.reduce((acumulador, letra) => {
    return acumulador + letra;
});
console.log(nomeConcatenado);
/**
 * Saida 
 * > Daniel
 */