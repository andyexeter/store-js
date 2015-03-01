/*!
	store.js v0.9.5
	A lightweight JavaScript browser storage wrapper
	(c) 2015 Andy Palmer
	license: http://www.opensource.org/licenses/mit-license.php
*/
window.store = (function(localStorage) {
	
	'use strict';
	
	// Set the default storage type to localStorage
	var storage = localStorage;
	
	return {
		
		/**
		 *  Set the storage type (localStorage|sessionStorage)
		 */
		storage: function(type) {
			
			if(type) {		
				storage = type;
			}
			
			return (storage === localStorage ? 'local' : 'session') + 'Storage';
		},
		
		/**
		 *  Set a key/value pair. Value can be of any type including objects/arrays
		 */
		set: function(key, value) {
			
			if(typeof value == 'object') {
				value = JSON.stringify(value);
			}
			
			storage.setItem(key, value);
			
			//return value;
		},
		
		/**
		 *  Get an item from storage
		 */
		get: function(key) {
		
			if(!key) {
				return null;
			}
			
			var item = storage.getItem(key);
			
			if(item) {
			
				if(item[0] == '{' || item[0] == '[') {
				
					try {
					
						item = JSON.parse(item);
						
					} catch(e) {}
				}
			}
			
			if(+item == item) {
				return +item;
			} if(item == 'true') {
				item = true;
			} else if(item == 'false') {
				item = false;
			}
			
			return item;
		},
		
		/**
		 *  Push an item on to an object
		 */
		push: function(item_key, key, value) {
			
			// Shift arguments if the third isn't set
			if(!value) {
				value = key;
			}
			
			var item = store.get(item_key);
			
			// If item is null set it to an empty object or array 
			if(!item) {
				item = (typeof key == 'object' || arguments.length == 3) ? {} : [];
			}
			
			// We can only push to the item if it's an object/array
			if(typeof item == 'object') {
				
				if(item.constructor === Array) {
					// item is a true array, push value on to the end of it	
					item.push(value);
					
				} else {

					if(arguments.length < 3 && typeof value != 'object') {
						
						store._error('push', 'Cannot push empty value to ' + item_key);
						
					} else if(typeof value == 'object' && value === key) {
						
						// item and value are both objects, extend item with value
						for(var prop in value) {
							item[prop] = value[prop];
						}
						
					} else {
						
						item[key] = value;
					}
				}
				
				store.set(item_key, item);
				
			} else {
				store._error('push', 'Cannot push to ' + item_key + ' (' + typeof item_key + ')');
			}
			
			return item;
		},
		
		/**
		 *  Remove a key from a stored object
		 */
		pop: function(key, obj_key) {
		
			var value = store.get(key);
			
			if(typeof value != 'object') {
				store._error('pop', 'Cannot pop from ' + key + ' (' + typeof key + ')');
			} else {
			
				if(value.constructor === Array) {
					value.pop();
				} else {
					delete value[obj_key];
				}
				
				store.set(key, value);
				
				return value;
			}
		},
		
		/**
		 *  Remove an item from storage
		 */
		remove: function(key) {
		
			return storage.removeItem(key);
		},
		
		/**
		 *  Clear all data from the storage mechanism
		 */
		 clear: function() {
			return storage.clear();
		 },
		 
		 _error: function(method, message) {
			 throw new Error('store.js: ' + method + ': ' + message);
		 }
	};
	
})(localStorage);
