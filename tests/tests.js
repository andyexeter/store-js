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
	
	store.clear()
});

QUnit.test("set boolean", function( assert ) {
	
	store.set('testItem', true);
	
	var item = store.get('testItem');
	
	assert.strictEqual(item, true, "Passed!");
	
	item = store.set('testItem', false);
	
	assert.strictEqual(item, false, "Passed!");
	
	store.clear();
	
});

QUnit.test("set object", function( assert ) {
	
	var obj = {a: true, b: "Hello World", c: 0}
	
	store.set('testItem', obj);
	
	var item = store.get('testItem');
	
	assert.strictEqual(item, 'test', "Passed!");
	
	store.clear()
});