/*!
	store.js v0.9
	A lightweight browser storage wrapper
	(c) 2015 Andy Palmer
	license: http://www.opensource.org/licenses/mit-license.php
*/
window.store = (function() {
	
	// Set the default storage type to localStorage
	var storage = localStorage;
	
	return {
		
		/**
		 *  Set the storage type (localStorage|sessionStorage)
		 */
		storageType: function(type) {
			
			if(type) {		
				storage = type;
			}
			
			return storage;
		},
		
		/**
		 *  Set a key/value pair. Value can be of any type including objects/arrays
		 */
		set: function(key, value) {
		
			if(!key || !value) return;
			
			if(typeof value == 'object') {
				value = JSON.stringify(value);
			}
			
			storage.setItem(key, value);
			
			return value;
		},
		
		/**
		 *  Get an item from storage
		 */
		get: function(key) {
		
			if(!key) return false;
			
			value = storage.getItem(key);
			
			if(value) {
			
				if(value[0] == '{' || value[0] == '[') {
					try {
						value = JSON.parse(value);
					} catch(e) {}
				}
			}
			
			return value;
		},
		
		/**
		 *  Push an item on to the end of the object
		 */
		push: function(key,  obj_key, obj_value) {
			
			if(!obj_value) {
				obj_value = obj_key;
			}
			
			value = store.get(key);
			
			if(typeof value == 'object') {
			
				if(value.constructor === Array) {
					value.push(obj_value);
				} else {
					value[obj_key] = obj_value;
				}
				
				store.set(key, value);
				
			} else {
				throw new Error('store.js: push: Cannot push to ' + key + ' (' + typeof key + ')');
			}
			
			return value;
		},
		
		/**
		 *  Remove a key from a stored object
		 */
		pop: function(key, obj_key) {
		
			var value = store.get(key);
			
			delete value[obj_key];
			
			store.set(key, value);
			
			return value;
		},
		
		/**
		 *  Remove an item from storage
		 */
		remove: function(key) {
		
			return storage.removeItem(key);
		}
	};
	
})();
