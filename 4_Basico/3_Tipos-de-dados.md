# 4.3 - Tipo de dados primitivos

## Tipagem dinâmica

- JavaScript é uma linguagem de tipagem dinâmica.

- Isso significa que não necessita declarar o tipo de dado de uma variável antes de sua atribuição. O tipo será automaticamente determinado quando o programa for processado.

- Você pode reatribuir a uma variável um tipo de dado diferente.

## Tipos de dados

Descrição: Os tipos de dados em JavaScript são basicamente os tipos de valores que podemos manipular com a linguagem.

Elas podem ser dos tipos:

- Strings
- Numbers
- Booleans
- Arrays
- Objetos
- null
- undefined

### Strings

Descrição: O tipo `String` em JavaScript é usado para representar textos, ou cadeias de caracteres.

Para declarar strings podemos usar aspas simples ' ' ou aspas duplas " ". Tudo que estiver dentro das aspas vai ser considerado texto exemplo "1".

Mais para a frente iremos ver que existe ainda uma terceira forma que usa crases:

```js
const valor = 8;

const texto = `Valor: ${8}`;
```

Isso é o que chamamos de `template string`, ou seja, um modelo de string.
No código acima, o motor JavaScript iria processar a `template string` de forma que a string armazenada pela variável `texto` seria `"Valor: 8"`.

### Numbers

Descrição: O tipo `Number` é usado para representar números, independente se for um número inteiro tipo `7` ou um número real como `32.4`.

Para declarar números não tem muito segredo, simplesmente atribua o número.

Note que o valor de exemplo acima usa ponto e não vírgula para separar os decimais, afinal a linguagem utiliza o padrão Inglês.

### Boolean

Descrição: O tipo `Boolean` representa uma entidade lógica e pode ter dois valores:

- verdadeiro(`true`) ou
- falso(`false`).

Normalmente os valores desse tipo, a gente consegue através da avaliação de uma condição, por exemplo:

```
1 == 1 (mesma coisa que 1 é igual a 1)

essa condição nos retorna um valor booleano, nesse caso, `true`
```

### bigInt

Descrição: É um tipo de dado numérico que representa inteiros no formato de precisão arbitrária. Em outras linguagens de programação existem tipos numéricos diferentes, como por exemplo: Integers, Floats, Doubles ou Bignums.

### Arrays

Descrição: `Array` é uma variável ​​que contêm vários valores. Ele é comumente usados ​​para armazenar um grupo de valores relacionados.

Os `Arrays` podem armazenar quaisquer outro tipo de dados.
Podemos ter um array de arrays, array de objetos, array de números, strings, booleanos, etc...

Podemos declarar um `Array` com colchetes [ ], todo e qualquer tipo de dados que estiver dentro dele vai ser armazenado, exemplos:

```js
const numeros = [1, 2, 3, 4, 5, 6];

const palavras = ["He4rt", "Dev", "Melhor", "Comunidade"];

const misto = ["He4rt", 1, 27.5, 3];

const array_com_arrays = ["Heart", "Dev", [1, "Melhor Comunidade"]];
```

### Objetos

Descrição: Os objetos são muito semelhantes aos `Arrays`, pois são variáveis ​​que podem conter vários valores.
No entanto, os objetos têm uma propriedade-chave que ajuda a dar mais significado às informações armazenadas neles.

Podemos declarar `Objetos literais` utilizando chaves `{ }`.
Segue a mesma regra dos `Arrays` porem devemos informar uma chave para eles e para cada chave/valor devemos colocar uma virgula para informamos a proxima chave/valor, exemplo:

```js
const professor = {
  nome:    "He4rt",
  nota:    10,              // avaliação do professor
  classes: [1, 2, 3, 4, 5]  // ids das classes que leciona.
};
```

Note que os espaços são puramente para alinhar e facilitar a leitura, é possível deixar um espaço só caso prefira, ou mesmo utilizar outra formatação.

```js
// mesma coisa:
const professor = {
  nome: "He4rt",
  nota: 10, // avaliação do professor
  classes: [1, 2, 3, 4, 5] // ids das classes que leciona.
};
```

Não temos restrição para o valor que cada chave recebe, pode ser um valor `Boolean`, `Array`, `Number`, `String`, outro objeto, etc...

### Null e Undefined

Descrição: O tipo `Null` tem exatamente um valor: `null`(nulo).

O tipo `Undefined` é um valor um tanto único.
Uma variável que não tenha recebido nenhum valor específico, assume o valor `undefined` (indefinido).
Outra forma de se obter `undefined` seria tentar pegar o retorno de uma função que não retorna nada, ou mesmo tentar acessar um parâmetro de função que não tenha recebido um argumento, mas isso veremos mais para a frente.
