# 3.8 - Estruturas de repetição (laços)

Descrição: Estruturas de repetição, também chamados de laços, são uma maneira fácil e rápido de executar uma ação várias vezes com pouco código.

### FOR

Um laço `for` é repetido até que a condição especificada seja `FALSE`.

```javascript
for ([expressaoInicial]; [condicao]; [incremento]) {
  // ações a serem repetidas
}
```

Quando um `for` é executado, ocorre o seguinte:

- A expressão expressao Inicial é inicializada e, caso possível, é executada. Normalmente essa expressão inicializa um ou mais contadores, mas a sintaxe permite expressões de qualquer grau de complexidade. Podendo conter também declaração de variáveis.

- A expressão condicao é avaliada. caso o resultado de condicao seja `TRUE`, o laço é executado. Se o valor de condicao é `FALSE`, então o laço terminará. Se a expressão condicao é omitida, a condicao é assumida como `TRUE`.

- A instrução é executada. Para executar múltiplas declarações, use uma declaração em bloco (`{ ... }`) para agrupá-las.

- A atualização da expressão incremento, se houver, executa, e retorna o controle para o próximo passo.

### DO ... WHILE

A instrução `do...while` repetirá até que a condição especificada seja `FALSE`.

```javascript
do {
  // ações a serem repetidas
} while (condicao);
```

A instrução será executada uma vez antes da condição ser verificada. 
Caso a condicao seja `TRUE`, então o laço será executado novamente. 
Ao final de cada execução, a condicao é verificada. 
Quando a condição contida no `while` for `FALSE` a execução do laço é terminada.

### WHILE

Uma declaração `while` executa suas instruções, desde que uma condição especificada seja avaliada como `TRUE`.

```javascript
while (condicao) {
    // ações a serem repetidas
}
```

O teste da condição ocorre antes que o laço seja executado.

### FOR.. IN

O laço `for.. in` passa por todas propriedades de um objeto.

```javascript
for ( [variavel] in [objeto]) {
  // ações a serem feitas
}
```

### FOR.. OF

O laço `for.. of` passa por todos os elementos de um coleção (`Array`, `Map`, `Set`, `Arguments`, `Object`).

```javascript
for ([variavel] of [objeto]) {
  // ações a serem feitas
}
```