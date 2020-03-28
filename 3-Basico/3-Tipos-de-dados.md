# 3.3 - Tipo de dados primitivos

Variáveis em Javascript são uma forma para se salvar dados que possam ser acessados e/ou manipulados posteriormente.

Elas podem ser dos tipos:

- strings,
- numbers,
- booleanos,
- Arrays,
- Objetos

Por Javascript ser uma linguagem de tipagem fraca (ou tipagem dinâmica), dependendo do contexto é possível que uma mesma variável tenha diferentes tipos de dados para um mesmo valor.

## Strings

O tipo String em JavaScript é usado para representar textos, ou cadeias de caracteres.

## Numbers

O tipo Number é usado para reprensetar numeros, qualquer tipo deles.

## Boolean

Boolean representa uma entidade lógica e pode ter dois valores:

- verdadeiro(true) ou
- falso(false).

## Arrays

Array é uma variável ​​que contêm vários valores. ele é comumente usados ​​para armazenar um grupo de valores relacionados.

Os Arrays podem armazenar números, seqüências de caracteres, booleanos ou nulos.

## Objetos

Os objetos são muito semelhantes aos Arrays, pois são variáveis ​​que podem conter vários valores.
No entanto, os objetos têm uma propriedade-chave que ajuda a dar mais significado às informações armazenadas neles.

## Null e Undefined (\*bonus)

O tipo Null tem exatamente um valor: null(nulo).

O tipo Undefined é uma variável que não foi atribuída a um valor específico, assume o valor undefined(indefinido).

## Variables & Data Types

[skip](#functions)

Variables can be thought of as container that let us store data on them. These will help us while writing code by letting us save and re-use any data to accomplish your goal.

To create a variable, you use the following syntax:

```javascript
var x;
```

This creates the container x which can be then used to store any kind of data in it.

A variable can also be created with a default variable:

```javascript
var x = 1;
```

In this case, we are creating a variable x containing the value 1.

In javascript, your variables can store 6 kinds of data. These are known as our data types.

### Numbers

The example above is creating a variable storing a number. Numbers in variables can be manipulated using the basic math operators.

```javascript
var foo = 1;
var bar = 2 + 1; // bar = 3
var biz = foo + bar; // biz = 4

var x = biz - 3; // x = 1
var y = bar * 2; // y = 6
var z = y / 2; // z = 2
var i = (z + 10) / 2; // i = 6
```

Javascript and other programming languages also have a special operator called 'mod'. This operator would give us the remainder of a division between two numbers. the 'mod' operator is respresented by a `%`.

```javascript
var x = 10 % 3; // x = 1
```

### Strings

In any programming language, we use the word strings to refer to words or phrases stored in a variable. When storing a string in a variable, it needs to be wrapped in single quotes.

```javascript
var name = "Mario";
```

Two strings can also be appended together. In programming we call this string concatenation

```javascript
var opening = "My favorite fruit is the ";
var fruit = "apple";

var phrase = opening + fruit;
```

If you notice the content of the variables `opening` and `fruit` are wrapped in quotes. This is because they are strings. Then the variable `phrase` is adding the values of `opening` and `fruit`. Since these are strings, the addition results in the concatenation of both strings resulting in the value `'My favorite fruit is the apple'`

Numbers can also be concatenated with strings

```javascript
var amount = 5;
var phrase = "I bought " + amount + " apples";
```

In this example we are concatenating a string with a number and then with another string, forming the phrase `'I bought 5 apples'`

Every time you concatenate a number to a string it will turn into a string, even if this string is an empty string.

```javascript
/**
 * This code will result in '5', which means if you try to add it with
 * another number it will result in string concatenation and not
 * number addition.
 */
var amount = 5 + ""; // amount = '5'
var newAmmutn = amount + 2; // newAmount = '52'
```

### Booleans

A boolean variable can contain only two values: `true` or `false`. A boolean variable can help define conditions in your code. We will go more into deep on this once we reach the section about Statements.

```javascript
var isLearningJavascript = true;
var isLearningRuby = false;
```

Boolean values should not be wrapped in single quotes. Otherwise they will be interpreted as strings and they would not be able to fulfill their purpose. Apart from conditions, another common use for booleans is to set flags in your code.

### Arrays

Arrays are variables that contain several values. These are commonly used to store a group of related values. Arrays can store Numbers, Strings, Booleans or Null.

An array will look like this

```javascript
var colors = ["red", "blue", "pink", "black"];
```

In this example, our array contains four different values. We can access the different values in the array by accessing the corresponding index for the value.

```javascript
var colors = ["red", "blue", "pink", "black"];
var favoriteColor = colors[0]; // red
var mostHatedColor = colors[1]; // blue
```

The array's index will always start in 0.

After creating an array, you can add more values into it

```javascript
var colors = ["red", "blue", "pink", "black"];
colors.push("purple"); // This will add purple at the end of the colors array: ['red', 'blue', 'pink', 'black', 'purple']
```

When you create an array, you will normally know the size of the array. However, an array can also be dynamically created by your code. When this happens you may not know the size of your array. You can check it using the following property

```javascript
var colors = ["red", "blue", "pink", "black"];
var arraySize = colors.length; // araySize = 4
```

The `length` property will provide the literal size of the array. However, keep in mind that the index of arrays starts in 0, so you need to be careful when you use access the array using it's length as its last index will be its length - 1

```javascript
var colors = ["red", "blue", "pink", "black"];
var arraySize = colors.length; // araySize = 4
var invalidColor = colors[arraySize]; // This will throw an error
var validColor = colors[arraySize - 1]; // validColor = 'black'
```

Another important thing about arrays is that not all their values need to be of the same data type, it can contain sever types of data at the same time.

```javascript
var randomValues = ["red", 5, false, "cow"];
```

### Objects

Objects are very similar to arrays as in they are variables that can contain several values. However, objects have a key property that helps give more meaning to the information stored in them.

```javascript
var userInfo = { name: "Derp", age: 26, position: "Javascript Developer" };
```

Object values can be accessed in two different ways.

```javascript
var userInfo = { name: "Derp", age: 26, position: "Javascript Developer" };
var name = userInfo.name;
var age = userInfo["age"];
```

We recommend using the first syntax. However there are times where the second is necessary to be able to access the information in the object.

Arrays can also contain objects. This helps us group a set of key/value pairs.

```javascript
var users = [
  { name: "Derp", age: 26, position: "Javascript Developer" },
  { name: "Derpina", age: 27, position: "Designer" },
  { name: "Herp", age: 25, position: "Creative Director" }
];
```

For readability purposes, arrays and objects can also be broken down into several lines.

```javascript
var users = [
  {
    name: "Derp",
    age: 26,
    position: "Javascript Developer"
  },
  {
    name: "Derpina",
    age: 27,
    position: "Designer"
  },
  {
    name: "Herp",
    age: 25,
    position: "Creative Director"
  }
];
```

Having our objects properly idented helps us understand where an object in the array starts and where it ends making it a lot easier to read and understand while looking at the code.

### Null

The last data type we are going to talk about is the `null` value. For a variable to contain a `null` value means that it's not storing any data or that it's empty. This is the value we assign to a variable when we want to remove its content.
