# 4.7 - Condicionais

## Lógicos

### IF ... ELSE

Descrição: De longe o tipo mais comum de declaração condicional que você usará em JavaScript — as modestas declarações `if ... else.`

```javascript
if (condicao) {
  // código para executar caso a condição seja verdadeira
} else {
  // senão, executar este código
}
```

### ELSE IF

Descrição: Existe uma maneira de encadear escolhas/resultados extras ao seu `if...else` — usando `else if`.
Cada escolha extra requer um bloco adicional para colocar entre `if() { ... }` e `else { ... }`

```javascript
if (condicao) {
  // código para executar caso a condição seja verdadeira
} else if (outraCondicao) {
  // senão, executar este código caso outra condição seja verdadeira
}
```

### Operador ternário

Descrição: Os operadores ternários testam uma condição e retorna um valor/expressão se for `TRUE`, e outro caso seja `FALSE` — isso pode ser útil em algumas situações e pode ocupar muito menos código que um bloco `if...else` se você simplesmente tiver duas opções escolhidas entre uma condição *TRUE/FALSE condition*.

```javascript
condicao ? valor1 : valor2;
```

Se condição for `TRUE`, o operador terá o valor de `valor1`. Caso contrário, terá o valor de `valor2`. Você pode utilizar o operador condicional em qualquer lugar onde utilizaria um operador padrão.

Outra maneira de utilizarmos o operador ternário é usá-lo para simplificar a condicional if...else if...else.

```javascript
condicao ? valor1 : outraCondicao ? valor2 : valor3;
```

Se condição for `TRUE`, o operador terá o valor de `valor1`. Caso contrário, irá para a `outraCondicao` e se for `TRUE`, o operador terá o valor de `valor2` e por último se não corresponder a nenhuma condição caíra no else e o operador terá o valor de `valor3`. Você pode utilizar o operador condicional em qualquer lugar onde utilizaria um operador padrão.

### SWITCH

Descrição: Em alguns casos você terá diversas condições, este é o trabalho do `switch`.
Eles tomam uma única expressão/valor como uma entrada e, em seguida, examinam várias opções até encontrarem um que corresponda a esse valor, executando o código correspondente que o acompanha.

Usando o `break`, encerra o loop atual;
Usando o `continue`, encerrará a iteração do loop e continua para o próximo iterando.

```javascript
switch (expression) {
  case choice1:
    // código para executar
    break;

  case choice2:
    // código para executar
    break;

  // podem ser incluídos quantos casos precisar.

  default:
    // se não for nenhum caso, executa este caso
}
```
Outro exemplo de uso do switch é o `Multi-caso: Operação Simples (Multi-case : single operation)`

Utilizar esse método tem a vantagem de não ter um `break` depois do case e continuara sendo executado mesmo que o critério não seja correspondido.

No exemplo abaixo temos uma operação sequencial simples, onde três valores diferentes retornam a mesma coisa

```javascript
var Color = 'Red';
switch (Color) {
  case 'Pink':
  case 'Purple':
  case 'Orange':
    console.log('This is not a primary color.');
    break;
  case 'Blue':
  default:
    console.log('This is a primary color.');
}
```
Ao esquecer o break, o codigo irá executar a partir do caso que a condição foi correspondida e irá rodar o caso seguinte independente se obedeceu o critério ou nao.

[Proximo Capitulo](./8_Estruturas-de-repeticao.md)