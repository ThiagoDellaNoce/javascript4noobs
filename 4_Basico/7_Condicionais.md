# 4.7 - Condicionais

## Lógicos

### IF ... ELSE

Descrição: De longe o tipo mais comum de declaração condicional que você usará em JavaScript — as modestas declarações `if ... else.`

```javascript
if (condicao) {
  // codigo para executar caso a condição seja verdadeira
} else {
  // senão, executar este código
}
```

### ELSE IF

Descrição: Existe uma maneira de encadear escolhas/resultados extras ao seu `if...else` — usando `else if`.
Cada escolha extra requer um bloco adicional para colocar entre `if() { ... }` e `else { ... }`

```javascript
if (condicao) {
  // codigo para executar caso a condição seja verdadeira
} else if (outraCondicao) {
  // senão, executar este código caso outra condição seja verdadeira
}
```

### Operador ternário

Descrição: Os operadores ternários testam uma condição e retorna um valor/expressão se for `TRUE`, e outro caso seja `FALSE` — isso pode ser útil em algumas situações e pode ocupar muito menos código que um bloco `if...else` se você simplesmente tiver duas opções escolhidas entre uma condição *TRUE/FALSE condition*.

```javascript
condicao ? valor1 : valor2;
```

Se condicao for `TRUE`, o operador terá o valor de `valor1`. Caso contrário, terá o valor de `valor2`. Você pode utilizar o operador condicional em qualquer lugar onde utilizaria um operador padrão.

### SWITCH

Descrição: Em alguns casos você terá diversas condições, este é o trabalho do `switch`.
Eles tomam uma única expressão/valor como uma entrada e, em seguida, examinam várias opções até encontrarem um que corresponda a esse valor, executando o código correspondente que o acompanha.

Usando o `break`, encerra o loop atual;
Usando o `continue`, encerrará a iteração do loop e continua para o próximo iterando.

```javascript
switch (expression) {
  case choice1:
    // codigo para executar
    break;

  case choice2:
    // codigo para executar
    break;

  // podem ser incluídos quantos casos precisar.

  default:
    // se não for nenhum caso, executa este caso
}
```
