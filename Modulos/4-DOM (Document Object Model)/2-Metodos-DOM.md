# 2 - Métodos do DOM




A property is a value that you can get or set (like changing the content of an HTML element).

A method is an action you can do (like add or deleting an HTML element).

```javascript
    <p id="demo"></p>

    <script>
    document.getElementById("demo").innerHTML = "He4rt Devs!";
    </script>
```

In the example acima, getElementById is a method, while innerHTML is a property.

## The getElementById Method

The most common way to access an HTML element is to use the id of the element.

In the example above the getElementById method used id="demo" to find the element.



## The innerHTML Property

The easiest way to get the content of an element is by using the innerHTML property.

The innerHTML property is useful for getting or replacing the content of HTML elements.


## Finding HTML Elements

Below are some examples of how you can use the document object to access and manipulate HTML.

| Method                                 |  Description                   |
| -------------------------------------- | ------------------------------ |
| document.getElementById(id)            |  Find an element by element id |
| document.getElementsByTagName(name)    |  Find elements by tag name     |
| document.getElementsByClassName(name)  |  Find elements by class name   |

## Changing HTML Elements

| Property                                  |	Description                                      | 
| ---------------------------------------------------------------------------------------------- |
| element.innerHTML =  new html content	    |    Change the inner HTML of an element             |
| element.attribute = new value	            |    Change the attribute value of an HTML element   |
| element.style.property = new style	    |    Change the style of an HTML element             |

| Method	                                |   Description                                      |
| ---------------------------------------------------------------------------------------------- |
| element.setAttribute(attribute, value)	|   Change the attribute value of an HTML element    |