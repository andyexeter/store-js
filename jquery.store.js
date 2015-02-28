/*!
	jQuery store v0.5
	A jQuery plugin for store.js
	(c) 2015 Andy Palmer
	license: http://www.opensource.org/licenses/mit-license.php
*/
(function($, store, undefined) {

	'use strict';
	
	if(!store) {
		return;
	}
	
	$.fn.extend({
	
		store: function(key, value) {
			
			if(!key) {
			
				return store.get(this);
				
			} else if(!value) {
			
				try {
					return store.get(this)[key];
				} catch(e) {
					return undefined;
				}
				
			} else {
			
				store.push(this, key, value);
			}
			
			return this;
		
		},
	
		unstore: function(key) {
	
			if(!key) {
			
				store.remove(this);
				
			} else {		
			
				store.pop(this, key);
			}
			
			return this;
		}
	});
	
})(jQuery, window.store);