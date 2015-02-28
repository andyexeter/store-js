# store.js v0.9

store.js is a lightweight wrapper for the HTML5 [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API). It also adds the ability to store data as an array or an object

### 1. Getting Started
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

>Note: Properties defined as functions cannot be stored with an object because they are removed by the `JSON.stringify` method store.js uses

### 3. Getting data

```js
store.get('test'); // Returns "Hello World"
```

```js
store.get('myArray'); // Returns ['Value 1', true, 99]
```


```js
store.get('myObject'); // Returns Object {a: true, b: false, c: 'Hello World'}
```


### 4. Pushing to data
Because store.js allows storage of arrays and objects, elements or properties can be pushed on to them with the `push` method

#### Objects

```js
store.push('myObject', {d: 100});
store.get('myObject'); // Returns Object {a: true, b: false, c: 'Hello World', d: 100}
```

```js
store.push('myObject', 'e', 'Another String');
store.get('myObject'); // Returns Object {a: true, b: false, c: 'Hello World', d: 100, e: 'Another String'}
```

```js
store.push('myObject', 'f', {foo: 'bar'});
store.get('myObject'); // // Returns Object {a: true, b: false, c: 'Hello World', d: 100, e: 'Another String', f: Object {foo: 'bar'}}
```

```js
store.push('myObject', 'g', [10,20,30]);
store.get('myObject'); // // Returns Object {a: true, b: false, c: 'Hello World', d: 100, e: 'Another String', f: Object {foo: 'bar'}, g: Array[10,20,30]}
```

#### Arrays

```js
store.push('myArray', 76);
store.get('myArray'); // Returns ["Value 1", true, 99, 76]
```

### 5. Popping from data
Similarly, we can remove elements from arrays and properties from objects using `pop`

```js
store.pop('myObject', 'b');
store.get('myObject'); // Returns Object {a: true, c: 'Hello World', d: 100}
```

```js
store.pop('myArray');
store.get('myArray');  // Returns ["Value 1", true, 99]
```

### 6. Removing data
Data can be removed from storage with the `remove` method:

```js
store.remove('test');
store.remove('myArray');
store.remove('myObject');
```

### 7. Setting the storage mechanism
By default, store.js uses `localStorage` as the storage mechanism, meaning the data persists across different browser sessions. To change this just pass a reference to the `storage` method:

```js
store.storage(sessionStorage);
store.set('test', 'Hello World'); // Stored in sessionStorage
store.storage(localStorage); // Sets the mechanism back to localStorage
```

### 8. Clearing storage
To remove all items from the current storage mechanism store.js provides the `clear` method:

```js
store.clear(); // Clears either localStorage or sessionStorage
```

License
------------
[The MIT License (MIT)](http://opensource.org/licenses/mit-license.php)