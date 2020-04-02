### Funções

Descrição: é um bloco de códigos que esta armazenado dentro da função, com isso conseguimos utilizar ele em qualquer outra parte da nossa aplicação.

Ou seja uma função nada mais do que é um bloco de códigos criado por outra pessoa, nativo da própria linguagem ou por você. Assim conseguimos reutilizar esse bloco de códigos em toda nossa aplicação  

Vamos supor que iremos fazer uma soma
```javascript
let soma = 1 + 1
```

Basicamente caso eu queira somar outro numero eu preciso fazer o mesmo procedimento, ou seja algo bem repetitivo por conta disso vamos criar nossa primeira função.
```javascript
    // substitua o nomeFuncao pelo qual você desejar, para entendimento vamos chamar de somar
    function somar(){ 
        // aqui vai entrar o seu código
        let soma = 1 + 3
        console.log(soma)
    }

    // Para chamar a função bastar colocar o nome dela e o parenteses na frente.
    somar()
```

Explicando um pouco esse código para a criação da função

Quando vamos criar uma função devemos colocar function ```Nomedela```() e o parentenses na frente do nome, ficando essa estrutura para criação
```javascript
    function qualquerNome(){

    }
```

Uma função pode ou não retornar algum valor, quando dizemos retornar basicamente estamos falando que se essa função for chamada em uma variavel, essa variavel vai guardar o valor retornado pela função, dando um exemplo:

 ```javascript

    //vamos criar uma função
    function exemploRetorno(){
        return 1 // estamos retornando o valor 1
    }

    // quando chamar essa função dentro de uma variavel, a variavel ira guardar o valor 1 que a função está retornando.

    let teste = exemploRetorno()

    console.log(teste) // vai mostrar no console do navegador 1
```

Toda função pode receber parametros, pense no parametros como se fosse uma formula matematica que serve apenas para substituir os parametros pelos valores que você informar, exemplo
```javascript
    function funcaoComParametro(a) {
        /* o que está acontecendo aqui é que estamos informando que a função pode ou não receber algum valor no parametro A, esse valor é recebido quando a gente chama a função */

        

        console.log(a) // estamos imprimindo o valor dele
    }

    funcaoComParametro(10) /* Estamos chamando a função e passando para o parametro A o valor de 10, dentro da função simplesmente imprime o valor no console do navegador. */

    /* Ja que é uma função podemos fazer a mesma passando outros tipos de dados para o parametro */
    funcaoComParametro([1,2])
```

Sabendo de tudo isso podemosmelhorar a nossa ```função somar()``` criada no começo desse tópico, vamos adicionar parametros nela e retornar sempre a soma deles.
```javascript
    function somar(n1, n2) {
        // recebemos dois parametros que os valores vão ser definidos quando chamar a função

        return n1 + n2 // estamos retornando a soma desses dois parametros.
    }

    let resultado = somar(10, 5) // Passamos no parametro n1 o valor 10 e para o parametro n2 o valor 5, ai na variavel resultado estamos simplesmente armazenando o resultado da soma entre esses dois valores.
```

E com somente duas linhas criamos uma função que simplesmente sempre ira fazer a soma de qualquer numero que informamos ali.