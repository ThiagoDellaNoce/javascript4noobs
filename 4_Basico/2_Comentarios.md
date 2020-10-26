# 4.2 - Comentários

Descrição: Um comentário é uma parte de código que não é interpretada pelo motor JavaScript. Pode ser utilizada, também, para colocar textos que ajudam a identificar o que está sendo feito naquele trecho de código.

Claro que idealmente devemos tentar ao máximo deixar nosso código o mais legível possível, usando nomes de variáveis que sejam explícitos no que elas representam. Assim como funções cujos nomes sejam explícitos em relação ao que a função faz.
Entretanto, em trabalhos em equipe, inevitavelmente lidaremos com pessoas de vários níveis diferentes, então é interessante além de ter o código legível, também ter comentários em trechos que possam ser obscuros para alguns.

Existem dois tipos de comentários em JavaScript:

### Comentários de uma única linha de código.

São iniciados com duas barras `//`.

Veja o código abaixo:

```js
// Este é um comentário q vai explicar tudo abaixo
console.log("He4rtDevs <3");
// E também não será interpretado, quer ver?
// console.log("Nada vai aparecer");
```

### Comentários de várias linhas de código.
iniciados com `/*` e terminados com `*/`.

```javascript
/* Exemplo de comentário
    com várias linhas.

  Basta escolher o início
    e o fim. */
```
