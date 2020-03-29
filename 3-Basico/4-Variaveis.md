# 3.4 - Variáveis

Descrição: As variáveis ​​podem ser consideradas como contêineres que permitem armazenar dados sobre elas.
Isso nos ajudará a escrever o código, permitindo salvar e reutilizar quaisquer dados para atingir seu objetivo.

Existem 3 maneiras de declarar variáveis:

- var
- let
- const

o problema que temos com a variável `var` é que ela tem um pequeno problema de ESCOPO.

### Mas o que é ESCOPO?

Descrição: A grande maioria das linguagens possui o conceito de ESCOPO, e JavaScript não é diferente.
ESCOPO é a acessibilidade de objetos, variáveis e funções em diferentes partes do código.

Em outras palavras, o que determina quais são os dados que podem ser acessados em uma determinada parte do código é o ESCOPO.

Nós evitamos ao máximo o usa da `var`, porque a `let`
Por a **`let`** ter o escopo melhor definido e ter comportamento menos inesperado que a **`var`**, nós evitamos ao máximo o uso da **`var`** usando assim sempre que possível a **`let`**.

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
