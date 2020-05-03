# 4.1 - Funções de Saída

Após o nosso ambiente montado com todas as ferramentas necessárias, iremos começar a ver algum código na prática. <br>
Como iremos usar o nosso console em uma boa parte do curso, precisaremos de algumas funções para nos auxiliar a visualizar qualquer saída de dados do nosso código. E nessa lição, iremos conhecer essas funções.<br>

## Função -> Console.log()

Descrição: Exibe uma mensagem no console do navegador.<br><br>

Quando nós fizermos qualquer tipo de código, precisaremos entender se ele funcionou ou não. Na maior parte do tempo, iremos usar o `console.log()` para fazer essa verificação. Com esta função a mensagem, variável ou oque quisermos, será imprimido no console.<br>

Veja este primeiro exemplo:<br>

```javascript
console.log("He4rtDevs <3"); // He4rtDevs <3

console.log(123); // 123

console.log([1, 2, 3]); // [1, 2 , 3]

console.log({ curso: "js4noobs" }); // { curso: "js4noobs" }
```

A saida no navegador:

<p align="center">
    <img src="../assets/3-1-saida-exemplo.png" alt="Tela do navegador chrome, utilizando o console" />
</p>
<span align="center">
    Imagem 1 - Tela do navegador chrome, utilizando o console.
</span>

## Outras funções do Console

### Assert

Descrição: Escreve uma mensagem de erro para o `console` se a afirmação é `false`. Se a firmação é `true`, nada acontece.

```javascript
let boolean = false;
console.assert(boolean, "mensagem a ser exibida se o boolean for falso");
// mensagem a ser exibida se o boolean for falso.
```

### count

Descrição: Exibe no console o número de vezes em que a chamada `count()` em particular foi invocada.

```javascript
let label = "";

function consoleLabel() {
  console.count(label);
  return "label: " + label;
}

label = "he4rt";
consoleLabel();
label = "devs";
consoleLabel();
consoleLabel();
console.count();

// saida
//"he4rt: 1"
//"devs: 1"
//"devs: 2"
//"devs: 3"
```

### dir

Descrição: Exibe uma lista interativa das propriedades do objeto JavaScript especificado. A saída é apresentada como uma lista hierárquica com triângulos que permitem ver o conteúdo de objetos-filho.

```javascript
let comunidade = {
  nome: "he4rt",
};

console.dir(comunidade);

// Object
// nome: "he4rt";
```

### error & exception

Descrição: 'Escreve' uma mensagem de erro no Web Console.

```javascript
console.error("Erro aqui irmão!");
// Erro aqui irmão!

Descrição: Um atalho para o `error`.

console.exception("Erro aqui irmão! mas de outra forma");
// Erro aqui irmão! mas de outra forma
```

### group

Descrição: cria e separa as mensagens em grupo alinhados.

```javascript
console.log("Canais do discord");
console.group();
console.log("global");
console.group();
console.log("bate-papo");
console.log("aprendizado-diário");
console.groupEnd();
console.groupEnd();

// Canais do discord
// | global
// | | bate-papo
// | | aprendizado-diário
```

## table

Descrição: Exibe as informações em forma de tabela.

```javascript
console.table("he4rt", "devs", "discord");
```

| (index) | values  |
| ------- | ------- |
| 0       | he4rt   |
| 1       | devs    |
| 2       | discord |

## Time & TimeEnd

Descrição: `time()` Inicia a contagem de milisegundos de uma operação. `timeEnd()` termina a contagem do tempo, após o inicio do `time()`.

```javascript
console.time();
for(let i=0; i <10; i++) {
    // alguma ação
};
console.timeEnd();

// default: TEMPOCRONOMETRADOms
```

### warning

Descrição: Escreve uma mensagem de alerta no Console Web.

Usado para mostrar mensagens de erro para o usuário pelo console.

```javascript
console.warn("Texto de alerta!");
// Texto de alerta!
```
