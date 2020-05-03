# 4.10 - Exceptions

Descrição: Uma exceção representa uma situação que normalmente não ocorre e representa algo de estranho ou inesperado no sistema.

`try` - permite definir um bloco de código a ser testado quanto a erros enquanto ele está sendo executado.

`catch` - instrução permite definir um bloco de código a ser executado, se ocorrer um erro no bloco `try`.

A `throw` permite criar erros personalizados.

A `finally` permite executar o código, após tentar e capturar, independentemente do resultado.

```javascript
try {
  // Bloco do código
} catch (err) {
  // Código para lidar com os erros
}
```

Exemplo:
```javascript
function UserException(message) {
  this.message = message;
  this.name = "UserException";
}

function getMonthName(mes) {
  mes = mes - 1; // Ajusta o número do mês para index de array (1=Jan, 12=Dec)
  var meses = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  if (meses[mes] !== undefined) {
    return meses[mes];
  } else {
    throw new UserException("MesInvalido");
  }
}

try {
  // statements to try
  var meuMes = 15; // 15 não é um valor válido.
  nomeMes = getMonthName(meuMes);
} catch (e) {
  nomeMes = "não informado";
  console.log(e.message, e.name); // mostra no console a mensagem e o erro que foram pegos.
}
```
