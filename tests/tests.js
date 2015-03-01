QUnit.test("set integer", function( assert ) {
	
	store.set('testItem', 1);
	
	var item = store.get('testItem');
	
	assert.strictEqual(item, 1, "Passed!");
	
	store.clear();
});

QUnit.test("set string", function( assert ) {
	
	store.set('testItem', 'test');
	
	var item = store.get('testItem');
	
	assert.strictEqual(item, 'test', "Passed!");
	
	store.clear();
});

QUnit.test("set boolean", function( assert ) {
	
	store.set('testItem', true);
	
	var item = store.get('testItem');
	
	assert.strictEqual(item, true, "Passed!");
	
	store.set('testItem2', false);
	
	var item2 = store.get('testItem2');
	
	assert.strictEqual(item2, false, "Passed!");
	
	store.clear();
	
});

QUnit.test("set object", function( assert ) {
	
	var obj = {a: true, b: "Hello World", c: 0}
	
	store.set('testItem', obj);
	
	var item = store.get('testItem');
	
	assert.deepEqual(item, {a: true, b: "Hello World", c: 0}, "Passed!");
	
	store.clear()
});

QUnit.test("set array", function( assert ) {
	
	var array = [1,2,3];
	
	store.set('testItem', array);
	
	var item = store.get('testItem');
	
	assert.deepEqual(item, [1,2,3], "Passed!");
	
	store.clear();
});

QUnit.test("push object", function( assert ) {
	
	var obj = {a: true, b: "Hello World", c: 0}
	
	store.set('testItem', obj);
	store.push('testItem', {d: false});
	
	var item = store.get('testItem');
	
	assert.deepEqual(item, {a: true, b: "Hello World", c: 0, d: false}, "Passed!");
	
	store.push('testItem', 'e', []);
	
	item = store.get('testItem');
	
	assert.deepEqual(item, {a: true, b: "Hello World", c: 0, d: false, e: []}, "Passed!");
	
	store.clear();
});

QUnit.test("pop object", function( assert ) {
	
	var obj = {a: true, b: "Hello World", c: 0}
	
	store.set('testItem', obj);
	store.pop('testItem', 'c');
	
	var item = store.get('testItem');
	
	assert.deepEqual(item, {a: true, b: "Hello World"}, "Passed!");
	
	store.clear();
});

QUnit.test("push array", function( assert ) {
	
	var array = [1,2,3];
	
	store.set('testItem', array);
	store.push('testItem', 4);
	
	var item = store.get('testItem');
	
	assert.deepEqual(item, [1,2,3,4], "Passed!");
	
	store.clear();
});

QUnit.test("pop array", function( assert ) {
	
	var array = [1,2,3,4];
	
	store.set('testItem', array);
	store.pop('testItem');
	
	var item = store.get('testItem');
	
	assert.deepEqual(item, [1,2,3], "Passed!");
	
	store.clear();
});

QUnit.test("set storage type", function( assert ) {
	
	store.storage(localStorage);
	
	assert.strictEqual(store.storage(), 'localStorage', "Passed!");	
	
	store.storage(sessionStorage);
	
	assert.strictEqual(store.storage(), 'sessionStorage', "Passed!");
	
});