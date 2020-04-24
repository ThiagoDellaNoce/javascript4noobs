# 5.7 - Event Listener

- O método `addEventListener()` anexa um manipulador de eventos ao elemento especificado, facilitando o controle de como o elemento reage a cada interação com o usuário.

- Você pode adicionar ouvintes de eventos a qualquer objeto DOM, não apenas aos elementos HTML. ou seja, o objeto da janela.

## Sintaxe

```javascript
element.addEventListener(event, function);
```

1. O primeiro parâmetro é o tipo do evento (como "`click`" ou "`mousedown`" ou qualquer outro evento HTML DOM).

2. O segundo parâmetro é a função que queremos chamar quando o evento ocorrer.