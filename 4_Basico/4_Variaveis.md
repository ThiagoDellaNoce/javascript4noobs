# 4.4 - Variáveis

> **Descrição**:
  As variáveis ​​podem ser consideradas como contêineres que permitem armazenar dados sobre elas. \
  Isso nos ajudará a escrever o código, permitindo salvar e reutilizar quaisquer dados para atingir seu objetivo.

Existem 3 maneiras de declarar variáveis:
  - var
  - let
  - const

o problema que temos com a variável `var` é que ela tem um pequeno problema de ESCOPO.

---

## Mas o que é ESCOPO?

> **Descrição**: \
  A grande maioria das linguagens possui o conceito de ESCOPO, e JavaScript não é diferente. \
  ESCOPO é a acessibilidade de objetos, variáveis e funções em diferentes partes do código.

Em outras palavras, o que determina quais são os dados que podem ser acessados em uma determinada parte do código é o ESCOPO.

### Escopo Local e Escopo Global

Escopo local basicamente é um bloco que tudo o que for declarado, executado dentro dele somente ira existir nele, exemplo:

```javascript
  function soma() {
    var numero = 0

    Tudo o que está dentro da chaves é o nosso escopo local

  }

  console.log( numero ) <- não consigo ter acesso a variavel x pois foi declarada dentro do escopo local da funcão soma
```

Escopo global é tudo o que for declarado, criado fora do bloco, por conta disso toda a nossa aplicação tem acesso a eles, exemplo:

```javascript
  var numero = 1

  function soma(){
    return numero + 1 <-- estamos a retornado a soma do numero acrescentando mais 1
  }

  console.log(numero)
```

No JS em especifico até o ES2016 (ECMAScript2016), tinhamos um grande problema ao declarar variáves usando **`var`** dentro de blocos de instrução (IF, FOR, WHILE, etc...) pois esses blocos não criam o seu próprio escopo, o que fazia com que todas as variaveis declaradas com **`var`** dentro dele se tornassem globais.

Por conta disso evitamos ao máximo o uso da **`var`**, pois a **`let`** nasceu dessa necessidade de podermos declarar variáveis com escopo local dentro de blocos de instrução, exemplo:

```javascript
  if(1 == 1) {
    var x = 'Ela foi criada e inicializada no escopo global da aplicação.'
  }

  console.log(x) /*
  conseguimos acessar a variável pois blocos de instrução não criam escopo.

  Se fizermos a mesma verificação e declarar a variável x usando let, conseguimos criar um escopo local para ela:

  */

  if(1 == 1) {
    let x = 'Agora ela possui um escopo local.'
  }

  console.log(x) /* <- não conseguimos mais ter acesso a variável. */
```

E para declaração de constantes, cujo valor é fixo que não serão possíveis atribuir um novo valor, são criada como **`const`**.

Para usarmos variáveis, podemos fazer:

```javascript
  let x;
  const y;

  let foo = 1;
  let bar = 2 + 1; // bar = 3
  let biz = foo + bar; // biz = 4

  const texto = 'Os melhores cursos são na ';
  const plataforma = 'He4rt!';
  const frase = texto + plataforma; // frase = Os melhores cursos são na He4rt!

  const cores = [ ' vermelho ' , ' azul ' , ' rosa ' , ' preto ' ];

  let usuario = {
      nome :  'Fulano' ,
      idade :  22
  };
```
