# Raimonds
## JS
### JS arrays
Piemēri no [W3 scool](https://www.w3schools.com/js/js_arrays.asp)

### JS objekts

- Declaring object literla

```
const object name = {...};

For example:
 const object_name_literal = {name: "Inastance name immediately",
  greeting: function() {
    alert('Hi! I\'m ' + this.name + '.');
  }
}
```

- Using constructor function

```
function createnewObject(...) {
    ...
}
const object name = createnewObject(...);

For example:

Using constructor function (long; with empty object):
function createNewPersonV1(name) {
  const obj = {};
  obj.name = name;
  obj.greeting = function() {
    alert('Hi! I\'m ' + obj.name + '.');
  };
  return obj;
}
const object_name_constructor_function_V1 = createNewPersonV1('Inastance name at creation');

or with new

Using constructor function (short; with keyword new; standard construction function is modified):
function ObjectV2(name) {
  this.name = name;
  this.greeting = function() {
    alert('Hi! I\'m ' + this.name + '.');
  };
}
const object_name_constructor_function_V2 = new ObjectV2("Instance name at creation");


Unsing create to give another object as argument to another object
```