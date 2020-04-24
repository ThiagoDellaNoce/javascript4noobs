# 4.10 - Exceptions

Descrição: Uma exceção representa uma situação que normalmente não ocorre e representa algo de estranho ou inesperado no sistema.

`try` - permite definir um bloco de código a ser testado quanto a erros enquanto ele está sendo executado.

`catch` - instrução permite definir um bloco de código a ser executado, se ocorrer um erro no bloco `try`.

A `throw` permite criar erros personalizados.

A `finally` permite executar o código, após tentar e capturar, independentemente do resultado.

```javascript
try {
  // Bloco do código
}
catch(err) {
  // Código para lidar com os erros
}
```
