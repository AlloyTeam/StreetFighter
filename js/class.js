


var Class = function(){

	var cache = {};

	var create = function( fn, methods, parent ){

		var _initialize, _instances = [], instance, _unique = 0;

		_initialize = function( args ){
			fn.apply( this, args );
		}

		if ( parent ){
			_initialize.prototype = parent;
		}

		for ( var i in methods ){
			_initialize.prototype[ i ] = 	methods[ i ];
		}

		_initialize.prototype.implement = function(){
			var fns = arguments[0].split('.'), args = Array.prototype.slice.call( arguments, 1 ), fn = this;
			for ( var i = 0, c; c = fns[i++]; ){
				fn = fn[ c ];
				if ( !fn ){
					return alert ('接口尚未实现');
				}
			}
			return fn.apply( this, args );
		}

		var getInstance = function(){
			var args = Array.prototype.slice.call( arguments, 0 );
			 _instances[ _unique++ ] = new _initialize( args );
			return _instances[ _unique - 1 ];
		}

		var empty = function(){
			for ( var i = 0, c; c = _instances[i++]; ){
				c = null;
			}
			_instances = [];
			_instances.length = 0;
			_unique = 0;
		}

		var getCount = function(){
			return _unique;
		}

		var getPrototype = function(){
			return _initialize.prototype;
		}

		var subClass = function( fn, methods ){
			var a = Class.create( fn, methods, _instances[0] || getInstance() );
			return a
		}

		var interface = function( key, fn ){
			if ( _initialize ){
				_initialize.prototype[ key ] = fn;
			}
		}

		return {
			interface: interface,
			getInstance: getInstance,
			empty: empty,
			getCount: getCount,
			getPrototype: getPrototype,
			subClass: subClass,
		}

	}

	return {
		create: create,
		getInstances: function(){
			return _instances;	
		}
	}
	
	
}()






/*

Sven = Canvas.subClass( function( a, b, c ){
	this.age = a;
});


Sven.addMethod( 'add1', function(){
	return 'haha';
})

*/




