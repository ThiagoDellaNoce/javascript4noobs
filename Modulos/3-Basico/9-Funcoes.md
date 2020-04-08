### Funções

Descrição: é um bloco de códigos, que conseguimos utilizar sempre que chamarmos em qualquer parte da nossa aplicação, para realizar uma ação.

Uma função é definida pela palavra reservada `function`, seguida por um *nome* e então os parenteses `()`.

- Os nomes das funções podem conter letras, números, sublinhado e caracteres especiais.

- Dentro dos parenteses, você insere os parametros - os parametros são dados enviados a função, aos quais serão processados pela função.

- O código a ser executado pela função, deve estar dentro de Chaves `{}`

```javascript
function nome_funcao (param1, param2) {
    // código a ser executado
};
```

Basicamente caso eu precisar multiplicar um número com outro eu preciso fazer o procedimento a seguir:

```javascript
    // criação da função
    function multiplicar(param1, param2) { 
        // aqui vai entrar o seu código
        let result = param1 * param2;

        return result;
    }

    // chamar a função passando os parametros
    let resultado = multiplicar(2, 2);

    console.log(resultado);// mostra no console o resultado (4)
```

### para que isso?

Nós podemos *reutilizar os códigos* a partir de funções, por exemplo sempre que precisarmos multiplicar números, podemos usar a função citada acima.