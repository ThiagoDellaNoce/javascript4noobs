# 5.2 - Métodos do DOM

Descrição: Através do DOM pode-se ter acesso às propriedades. Estas propriedades servem para poder pegar (`get`) e alterar (`set`) os elementos que foram processados. 

O DOM nos dá acesso também aos métodos, os quais são ações que conseguimos desempenhar na nossa aplicação. Estas ações podem ser, adicionar, remover, alterar entre diversas outras coisas.

Um exemplo do método é o  `document.getElementById()`, veja a seguir:

```javascript
    <p id="demo"></p>

    <script>
    document.getElementById("demo").innerHTML = "He4rt Devs!";
    </script>
```
Neste exemplo, usamos o método `getElementById` e a propriedade `innerHTML`.
