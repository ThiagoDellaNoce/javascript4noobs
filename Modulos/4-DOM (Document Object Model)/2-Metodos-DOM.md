# 2 - Métodos do DOM

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


## Métodos de acessando um elemento HTML

Métodos para encontrar um ou mais elementos no DOM.

| Método                                 |  Descrição                                                        |
| -------------------------------------- | ----------------------------------------------------------------- |
| document.getElementById(id)            |  Encontra um elemento por seu Id                                  |
| document.getElementsByClassName(nome)  |  Encontra um elemento pela classe                                 |
| document.getElementsByTagName(tag)     |  Encontra um elemento pela sua tag HTML                           |
| document.querySelector(nome)           |  Encontra o primeiro elemento com o valor informado (id,nome,tag) |
| document.querySelectorAll(name)        |  Encontra todos os elementos com o valor informado (id, nome,tag) |

## Changing HTML Elements

// TODO: Elements
// .parentNode, .firstElementChild, .lastElementChild

// TODO: eventos
// click, select, 
