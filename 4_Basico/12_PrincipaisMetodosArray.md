# 4.11

## Map

O método map é utilizado geralmente quando você deseja percorrer um array e fazer uma alteração em cada elemento. E como consequência o método map gerar um array novo.
### Argumentos

1. Valor atual: É o item atual do array com que a função está trabalhando

2. Índice ou index: Esse valor é o índice do item dentro do array no qual você está trabalhando.

3. Array original: Você pode pegar todo o array e trabalhar com ele dentro do map também. 

Os 3 argumentos são recebidos na função de callback que você irá passar para dentro do map.

```javascript

const numeros = [1,2,3,4,5]
const adicionarUm = numeros.map((number, index, array) => {
    
    console.log(`Índice ${index} - Number: ${number}`);
    console.log('Array de origem:');
    console.table(array); // Vai mostrar o índice e cada valor do array no índice em questão
    return number + 1;
})
console.log(adicionarUm) 
/** Saida
 *  Índice 0 - Number: 1
    Array de origem:
    Índice 1 - Number: 2
    Array de origem:
    Índice 2 - Number: 3
    Array de origem:
    Índice 3 - Number: 4
    Array de origem:
    Índice 4 - Number: 5
    Array de origem:
    [ 2, 3, 4, 5, 6 ]
 */
```
## Filter

O método filter é usado para filtrar os itens de um array e apenas devolver aqueles que satisfazem a condição passada na função.

### Argumentos

1. Valor atual: É o item atual do array com que a função está trabalhando

2. Índice ou index: Esse valor é o índice do item dentro do array no qual você está trabalhando.

3. Array original: Você pode pegar todo o array e trabalhar com ele dentro do filter também. 

Os 3 argumentos são recebidos na função de callback que você irá passar para dentro do map.

> O segundo e terceiro parâmetro (Índice e Array original) se repetem logo não irei adicionar novos exemplos deles.

```javascript
const numeros = [1,2,3,4,5]
const apenasNumerosImpares = numeros.filter((numero, indice, array) => {
    return numero % 2 !== 0;
});
console.log(apenasNumerosImpares)
/**
 * Saida 
 * [ 1, 3, 5 ]
 */
```

## Reduce

Como o nome sugere o método reduce é usado para reduzir o array para um único valor.

### Argumentos

1. Acumulador: Essa parâmetro é responsável por guardar todo o valor acumulado durante a execução do reduce. O mesmo será retorno no fim da execução.

2. Valor atual: É o valor atual do array.

4. Índice ou index: Esse valor é o índice do item dentro do array no qual você está trabalhando.

5. Array original: Você pode pegar todo o array e trabalhar com ele dentro do filter também. 

```javascript
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
```
