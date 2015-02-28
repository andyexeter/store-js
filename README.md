# store.js
>v0.9

store.js is a lightweight wrapper for the HTML5 [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API). It allows storage of key/value pairs with any type of value, including arrays and objects

### 1.Getting Started
Load the store.js or store.min.js file in your HTML page

```html
<script src="path/to/store.js"></script>
```

### 2. Setting Data

`store` is defined as a global variable so setting data is as easy as:


```js
store.set('test', 'Hello World');
```

Storing arrays or objects is just as simple:
```js
store.set('myArray', ['Value 1', true, 99]);
store.set('myObject', {
    a: true,
    b: false,
    c: 'Hello World'
});
```

>Note: Properties defined as functions cannot be stored with an object because they are removed by the `JSON.stringify` method

### 3. Getting data

```js
store.get('test');
```
Returns `"Hello World"`

```js
store.get('myArray');
```
Returns an array: `['Value 1', true, 99]`

```js
store.get('myObject');
```
Returns an object: `Object {a: true, b: false, c: 'Hello World'}`

# Pushing to data
Because store.js allows storage of arrays an objects, elements or properties can be pushed on to them with ease:

```js
store.push('myObject', {d: 100});
store.get('myObject');
```
Returns an object: `Object {a: true, b: false, c: 'Hello World', d: 100}`

```js
store.push('myArray', 'Hello World');
store.get('myArray');
```
Returns an array: `["Value 1", true, 99, "Hello World"]`

License
------------
The MIT License (MIT)