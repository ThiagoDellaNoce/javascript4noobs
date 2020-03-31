# 3.3 - Tipo de dados primitivos

## Tipagem dinâmica

- JavaScript é uma linguagem de tipagem dinâmica.

- Isso significa que não necessita declarar o tipo de dado de uma variável antes de sua atribuição. O tipo será automaticamente determinado quando o programa for processado. 

- Você pode reatribuir a uma variável um tipo de dado diferente.

## Tipos de dados

Descrição: Os tipos de dados Variáveis em Javascript são uma forma para se salvar dados que possam ser acessados e/ou manipulados posteriormente.

Elas podem ser dos tipos:

- Strings,
- Numbers,
- Booleans,
- Arrays,
- Objetos
- *Null e Undefined


### Strings

Descrição: O tipo `String` em JavaScript é usado para representar textos, ou cadeias de caracteres.

Para declarar strings podemos usar aspas simples ' ', aspas duplas " ", Tudo que estiver dentro das aspas vai ser considerado texto exemplo "1" 



### Numbers

Descrição: O tipo `Number` é usado para reprensetar numeros, qualquer tipo deles.

Para declarar números não tem muito segredo, simplemente atribua o número.

### Boolean

Descrição: O tipo `Boolean` representa uma entidade lógica e pode ter dois valores:

- verdadeiro(`TRUE`) ou
- falso(`FALSE`).

Normalmente os valores desse tipo, a gente consegue atraves de uma condição por exemplo: 
    
    1 == 1 (mesma coisa que 1 é igual a 1) essa condição nos retorna um valor Boolean, sendo que pode ser `true` ou `false`

### Arrays

Descrição: `Array` é uma variável ​​que contêm vários valores. ele é comumente usados ​​para armazenar um grupo de valores relacionados.

Os `Arrays` podem armazenar números (`Numbers`), seqüências de caracteres (`Strings`), `Booleans` ou `Null`.

Podemos declarar um `Array` com colchetes [ ], todo e qualquer tipo de dados que estiver dentro dele vai ser armazenado, exemplo:

    Vamos criar um array de números [1, 2, 3, 4, 5, 6]
    Agora um array de palavras ["He4rt", "Dev", "Melhor", "Comunidade"]
    Agora vamos misturar ambos ["He4rt", 1, 2, 3]
    Podemos criar arrays dentro de arrays tambem ["Heart", "Dev", [1, 2, "Melhor Comunidade" ] ]

### Objetos

Descrição: Os objetos são muito semelhantes aos `Arrays`, pois são variáveis ​​que podem conter vários valores.
No entanto, os objetos têm uma propriedade-chave que ajuda a dar mais significado às informações armazenadas neles.

Podemos declarar `Objetos` com chaves { }, segue a mesma regra dos `Arrays` porem devemos informar uma chave para eles e para cada chave/valor devemos colocar uma virgula para informamos a proxima chave/valor, exemplo

    Vamos criar um objeto que seja um professor {
        nome: "He4rt", // Usamos aspas duplas para informar que é uma string ou seja um texto
        nota: 10, // aqui recebe um número
        classes: [1, 2, 3, 4, 5] // aqui ele recebe as classes que leciona.
    }

Não temos restrição para o valor que cada chave recebe, pode ser um valor `Boolean`, `Array`, `Number`, `String`, etc...

### Null e Undefined (\*bonus)

Descrição: O tipo `Null` tem exatamente um valor: `null`(nulo).

O tipo `Undefined` é uma variável que não foi atribuída a um valor específico, assume o valor `undefined` (indefinido).
