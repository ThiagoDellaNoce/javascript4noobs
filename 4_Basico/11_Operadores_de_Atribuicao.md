# 4.11 - Operadores de Atribuição

Descrição: Operadores de atribuição são capazes de atribuir valores ao operando da esquerda baseado no operando da direita. 

Além o operador de atribuição básico(`=`), é possível utilizar os operadores aritméticos(`+`, `-`, `*`, `/`, `**` e `%`) em conjunto com o operador de atribuição. Permitindo realizar operações aritméticas entre os operandos e, em seguida, armazenar o valor.

Tabela dos operadores e seus significados:  
| Operador | Significado |
| -------- | ----------- |
| x = y | x = y |
| x += y | x = x + y |
| x -= y | x = x - y |
| x *= y | x = x * y |
| x /= y | x = x / y |
| x **= y | x = x ** y |
| x %= y | x = x % y |

Exemplos de uso:
```javascript
let foo = 2;
const bar = 3;

foo += bar; // foo = foo + bar = 2 + 3
console.log(foo); // 5

foo *= bar; // foo = foo * bar = 5 * 3
console.log(foo); // 15
```

> *Atenção, diferente de outras linguagens de programação, o JavaScript não permite alterar a ordem do operador para realizar as operações. Pode gerar erros ou resultados indesejados.*

Exemplo:

```javascript
let foo = 2;

foo =+ '9'; // foo = +'9' = 9
console.log(foo); // 9

foo =- '9'; // foo = -'9' = -9
console.log(foo); // -9

foo =* 5; // Erro de sintaxe
console.log(foo); // Não é executado pois ocorreu um erro na linha anterior
```

[Proximo Capitulo](./12_PrincipaisMetodosArray.md)