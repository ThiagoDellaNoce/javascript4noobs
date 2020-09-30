# 4.5 - Operadores Aritméticos

Descrição: Operadores aritméticos tomam valores numéricos como seus operandos e retornam um único valor númerico.

Os operadores aritméticos padrões são:

- **os de soma (`+`)**,
- **subtração (`-`)**,
- **multiplicação (`*`)**,
- **divisão (`/`)**,

Estes operadores trabalham da mesma forma como na maioria das linguagens de programação quando utilizados com números de ponto flutuante.

- **Módulo(Resto da Divisão) (`%`)** Irá retornar o resto da divisão.
- **Exponencial (`**`)** Retorna o resultado de uma variável elevada a outra.

## Incremento (`++`)

Descrição: O operador de incremento acrescenta um no dado tratado.

Se usado depois da variável, ele incrementa o valor depois retorna.

```javascript
let numero = 1;
console.log(numero); // 1
console.log(numero++); // 1
console.log(numero); // 2
```

Se usado antes da variável, ele retorna o valor depois incrementa.

```javascript
let numero = 1;
console.log(numero); // 1
console.log(++numero); // 2
console.log(numero); // 2
```

## Decremento (`--`)

Descrição: O operador de decremento subtrai um no dado tratado.

Se usado depois da variável, ele subtrai o valor depois retorna.

```javascript
let numero = 2;
console.log(numero); // 2
console.log(numero--); // 1
console.log(numero); // 1
```

Se usado antes da variável, ele retorna o valor depois subtrai.

```javascript
let numero = 2;
console.log(numero); // 2
console.log(++numero); // 2
console.log(numero); // 1
```

## Negação (`-`)

Descrição: O operador de negação unária precede seu operando e o nega.

```javascript
let numero = 1;
console.log(numero); // 1
console.log(-numero); // -1
```

## Soma Unária (`+`)

Descrição: o `+` antes de uma variável, é a forma mais rápida e a forma preferida de converter alguma coisa em um número, porque ele não realiza nenhuma outra operação no número.

```javascript
console.log(+3); // 3
console.log(+"3"); // 3
console.log(+true); // 1
console.log(+false); // 0
console.log(+null); // 0
```
