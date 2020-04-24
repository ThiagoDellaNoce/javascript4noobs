# 5.4 - Alterando elementos

- Métodos para alterar o elemento do DOM.

| Método                                 | Descrição                                       |
| -------------------------------------- | ----------------------------------------------- |
| element.innerHTML = new html content   | Alterar o HTML interno de um elemento           |
| element.attribute = new value          | Alterar o valor do atributo de um elemento HTML |
| element.style.property = new style     | Alterar o estilo de um elemento HTML            |
| element.setAttribute(attribute, value) | Alterar o valor do atributo de um elemento HTML |

## Alterando Conteúdo
- A maneira mais fácil de modificar o conteúdo do HTML é usando a propriedade `innerHTML`.

```javascript
document.getElementById(id).innerHTML = new HTML();
```

## Alterando Atributos
- Podemos alterar também atributos, como por exemplo:

```javascript
document.getElementById(id).attribute = new value;
```

## Alterando Estilos
- Para alterar estilos de um elemento HTML usa-se:

```javascript
document.getElementById(id).style.property = new style;
```