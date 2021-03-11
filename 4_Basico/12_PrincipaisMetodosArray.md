# 4.11 - Principais métodos de Array

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
## Join

O método join junta todos os elementos de um array em uma única string.

### Argumentos

1. Separador: Especifica a string que vai separar os elementos

> Caso o separador seja omitido, os elementos vão ser separados por virgula

```javascript
const palavras = ["Aprendendo", "como", "o", "Javascript", "funciona"]
const frase = palavras.join(" ")
console.log(frase)

/**
* Saida
* > Aprendendo como o Javascript funciona
*/

// Note que o separador é um espaço em branco " ", é diferente de ""
// Se o separador fosse "", as palavras não iriam ser separadas por espaço
```

## Push

O método push adiciona N elementos no final do array e retorna o valor do novo tamanho do array 

### Argumentos

1. Elementos a serem adicionados

```javascript
const numeros = [1,2,3,4,5]
const novoTamanho = numeros.push(6,7,8,9)
console.log(numeros) // Saida: [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(novoTamanho) // Saida: 9
```

## Pop

O método pop remove o último elemento do array, e retorna o valor do elemento removido
> Pop não recebe parãmetros

```javascript
const numeros = [1, 2, 3, 4, 5]
const elementoRemovido = numeros.pop();
console.log(numeros) // Saida: [1, 2, 3, 4]
console.log(elementoRemovido) // Saida: 5
```

## Unshift
O método unshift adiciona N elementos no inicio do array e, assim como o push, retorna o valor do novo tamanho do array 

### Argumentos

1. Elementos a serem adicionados

``` javascript
const numeros = [5, 6, 7, 8]
const novoTamanho = numeros.unshift(1, 2, 3, 4)
console.log(numeros) // Saida: [1, 2, 3, 4, 5, 6, 7, 8]
console.log(novoTamanho) // Saida: 8
```

## Shift

O método shift remove o primeiro elemento do array, e assim como o método pop, retorna o valor do elemento removido
> Shift não recebe parãmetros

```javascript
const numeros = [1, 2, 3, 4, 5]
const elementoRemovido = numeros.shift()
console.log(numeros) // Saida: [2, 3, 4, 5]
console.log(elementoRemovido) // Saida: 1
```

## Includes
Este método é responsável por verificiar se determinado valor passado como argumento está incluso no array. Seu retorno é um boolean que indica se o item existe ou não no array.

### Argumentos
Valor que será verificado se está incluso ou não no array.

```javascript
const numbers = [1, 2, 3]

const numero3EstaIncluso = numbers.includes(3)
console.log(numero3EstaIncluso) // Saída: true
```

## Find
Trata-se de um método responsável por retornar o item que primeiro satisfazer a função de callback passada como argumento deste método.

### Argumentos
1. Função de callback que será executada para cada item, podendo receber os seguintes parâmetros:
    1. item atual que está sendo iterado;
    2. index do item atual que está sendo iterado (opcional);
    3. array que está sendo iterado (opcional).
    
```javascript
const dogs = [
    { name: 'Tulipa', age: 4 },
    { name: 'Thor', age: 10 },
    { name: 'Bolinha', age: 3 },
    { name: 'Zequinha', age: 6 }
]

const zequinha = dogs.find(item => {
    return item.name === 'Zequinha'
})

console.log(zequinha) // Saída: { name: 'Zequinha', age: 6 }
```
