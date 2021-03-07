# 4.13 Entendendo o this no Javascript.

## A palavra "this".

A palavra this, dentro da linguagem Javascript tem um papel importantíssimo ao referir-se ao escopo no qual aquela linha de código está sendo construida.

### O que é o escopo ?

Para entendermos escopo, podemos fazer a seguinte analogia:

Dentro de um país, temos diversos estados, e dentro dos estados temos municípios e dentro desse último os bairros. No código, por sua vez, temos o escopo do node, que seria equivalente ao país, o escopo do módulo, que seria os estados, e por fim as classes que podem ter funções dentro delas com seus escopos próprios.

Ou seja, há diferentes "reinos" dentro de um mesmo arquivo .JS, de forma que uma variável dentro de uma função não é acessível para quem está fora dela, ou então o valor de uma variável que está fora, pode ser alterada dentro de uma classe, porém seu valor fora dela continua não mudando.

Para poder transitar entre os diferentes escopos usamos a palavra reservada "this".

### O this na prática.

```javascript
// No primeiro exemplo, teremos a let C dentro do escopo da função.

function Exemplo() {
  let c = 10;
  return console.log(c);
}
Exemplo();
console.log(c);

// Espera-se recebermos um erro de que "C" não está definida.

/*Agora faremos um exemplo elevando o escopo da variável c,
 permitindo que ela seja acessada fora do escopo da função */

function Exemplo() {
  this.c = 10;
  return console.log(c);
}
Exemplo();
console.log(c);

// Espera-se receber 10 em ambas as chamadas.
```

### O escopo global: node.

Como dito anteriormente, a palavra this permite que possamos acessar escopos mais elevados do que estamos, sendo o mais alto deles o escopo do próprio node, ganhando acesso a propriedades como o prototype dos objetos, podemos, então, definir uma nova constante dentro da própria classe Object usando o this.

```javascript

this.Object.prototype = {
  A: "Nova variável";
}
```

### Cuidados que devemos ter com o this.

O this é uma palavra poderosa dentro do Javascript, porém perigosa. O uso dele deve ser restrito a cenários onde é necessário acessar uma variável que está acima e deve se evitar ao máximo chegar no escopo do módulo. Isso porque o uso excessivo do this pode causar uma confunção no código sobre responsabilidades e localização conforme a aplicação for escalonando.

É preferível que crie-se classes ou componentes e os importe ( via sistema de módulos) do que usar descontroladamente o this.
