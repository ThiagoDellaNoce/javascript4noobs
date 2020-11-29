# 5.6 - Event Handlers

- Podemos executar um script quando um evento ocorre.

Os eventos podem ser quando:

- Um usuário clica no mouse;
- Uma página da web é carregada;
- Uma imagem é carregada;
- O mouse se move sobre um elemento;
- Um campo de entrada é alterado;
- Um formulário HTML é enviado;
- Um usuário pressiona uma tecla.

## Atributos de evento HTML

- Para atribuir eventos a elementos HTML, você pode usar atributos de evento.

```html
<button onclick="fazAlgumaCoisa()">Try it</button>
```

## Atribuir eventos usando o DOM HTML

- O DOM HTML permite atribuir eventos a elementos HTML usando JavaScript:

```javascript
document.getElementById("myBtn").onclick = fazAlgumaCoisa;
```

## Os eventos onload e onunload

- Os eventos `onload` e `onunload` são acionados quando o usuário entra ou sai da página.

- O `onload` evento pode ser usado para verificar o tipo e a versão do navegador do visitante e carregar a versão adequada da página da Web com base nas informações.

- Os eventos `onload` e `onunload` podem ser usados ​​para lidar com cookies.

```html
<body onload="checkCookies()">
```

## O evento onchange

- O evento `onchange` é frequentemente usado em combinação com a validação dos campos de entrada.

```html
<input type="text" id="fname" onchange="upperCase()">
```

## Os eventos onmouseover e onmouseout

- Os eventos `onmouseover` e `onmouseout` podem ser usados ​​para disparar uma função quando o usuário passa o mouse sobre ou fora de um elemento HTML:

```html
<div onmouseover="mOver(this)" onmouseout="mOut(this)">
  Mouse Over Me
</div>
```

## Eventos onmousedown, onmouseup e onclick

- Os eventos `onmousedown`, `onmouseup` e `onclick` são todos partes de um clique do mouse. Primeiro, quando um botão do mouse é clicado, o evento `onmousedown` é acionado; depois, quando o botão do mouse é liberado, o evento `onmouseup` é acionado; finalmente, quando o clique do mouse é concluído, o evento `onclick` é acionado.

```html
<div onmousedown="mDown(this)" onmouseup="mUp(this)">
  Click Me
</div>
```

## Evento onfocus

- Altera atributos quando um campo de entrada recebe o foco.

```html
<input type="text" onfocus="myFunction(this)">
```
