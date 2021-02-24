ATIVIDADES DE LÓGICA DE PROGRAMAÇÃO COM JAVASCRIPT

01 - Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a função) e
com ponto de exclamação "!" no final.

Exemplo:

cumprimentar("Leonardo") // retornará "Olá, Leonardo!"

----------------------------------------------------------------------------------------------------------

02 - Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias. 
OBS: Considere que um ano tem 365 dias. Desconsidere anos bissextos (com 366 dias) e desconsidere
também dias decorridos desde o último aniversário.

Exemplo:

converterIdadeEmAnosParaDias(25) // retornará 9125

----------------------------------------------------------------------------------------------------------

03 - Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um funcionário
num mês, e o quanto ele recebe por hora. A função deverá calcular o salário líquido mensal do funcionário, que é
da quantidade de horas trabalhadas no mês multiplicada pelo valor da sua hora. Desse valor, deve ser subtraído
30%, relativo a impostos. O retorno da função deve ser a string "Salário líquido é igual a R$ X", em que X é o salário líquido do funcionário no mês.

Exemplo: 

calcularSalarioLiquido(180, 60) //Retornará "Salário igual a R$ 7560".

----------------------------------------------------------------------------------------------------------

04 - Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por
exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.

Exemplo:

receberNomeDoMes(1) // retornará "janeiro"

----------------------------------------------------------------------------------------------------------

05 - Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo. Deverá diferenciar
números de strings.

Exemplo:

maiorOuIgual(0, 0) // retornará true
maiorOuIgual(0, "0") //retornará false

----------------------------------------------------------------------------------------------------------

06 - Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o
retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será 1. Se o parâmetro de
entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do tipo ...".

Exemplo: 

inverso(true) // retornará false
inverso("6") // retornará "booleano ou número esperados, mas o parâmetro é do tipo string"

----------------------------------------------------------------------------------------------------------

07 - Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se o
parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha "entre"
como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro inclusivo não
seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não considerando se numero
é igual a minimo ou a maximo.

Exemplo: 

estaEntre(10, 100, 50) // retornará true
estaEntre(16, 100, 160) // retornará false

----------------------------------------------------------------------------------------------------------

08 - Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação.

Exemplo:

multiplicar(5, 5) // retornará 25
multiplicar(0, 7) // retornará 0

----------------------------------------------------------------------------------------------------------

09 - Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto que
o segundo será o número de vezes que haverá repetição. Um array será retornado.

Exemplo:

repetir("código", 2) // retornará ["código", "código"]
repetir(7, 3) // retornará [7, 7, 7]

----------------------------------------------------------------------------------------------------------

10 - Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.

Exemplo:

simboloMais(2) // retornará "++"
simboloMais(4) // retornará "++++"