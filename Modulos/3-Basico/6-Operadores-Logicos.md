# 3.6 - Operadores

## Lógicos

Descrição: Operadores lógicos são tipicamente usados com valores Booleanos (lógicos - `TRUE/FALSE`).

- **`var1 && var2` - AND** = Retorna `var1` caso possa ser convertido para `FALSE`; senão, retorna `var2`. Assim, quando utilizado com valores booleanos, && retorna `TRUE` caso ambos operandos sejam verdadeiros; caso contrário, retorna `FALSE`.

- **`var1 || var2` - OR** = Retorna `var1` caso possa ser convertido para `TRUE`; senão, retorna `var2`. Assim, quando utilizado com valores booleanos, || retorna `TRUE` caso ambos os operandos sejam verdadeiro; se ambos forem falsos, retorna `FALSE`.

- **`!var1` - NOT** = Retorna `FALSE` caso o único operando possa ser convertido para `TRUE`; senão, retorna `TRUE`.

## Comparação

Descrição: Operadores de comparação retornam um valor lógico se a comparação é verdadeira.

As únicas exceções a esta regra são os operadores `===` e o `!==`, que realizam comparações de igualdade e desigualdade "estritas".

- **Igual (==)** = Retorna `TRUE` caso os operandos sejam iguais.

- **Não igual (!=)** = Retorna `TRUE` caso os operandos não sejam iguais.

- **Estritamente igual (===)** = Retorna `TRUE` caso os operandos sejam iguais **e do mesmo tipo**.

- **Estritamente não igual (!==)** = Retorna `TRUE` caso os operandos não sejam iguais **e/ou não sejam do mesmo tipo**.

- **Maior que (>)** = Retorna `TRUE` caso o operando da esquerda seja maior que o da direita.

- **Maior que ou igual (>=)** = Retorna `TRUE` caso o operando da esquerda seja maior ou igual ao da direita.

- **Menor que (<)** = Retorna `TRUE` caso o operando da esquerda seja menor que o da direita.

- **Menor que ou igual (<=)** = Retorna `TRUE` caso o operando da esquerda seja menor ou igual ao da direita.
