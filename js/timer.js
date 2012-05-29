
	var Timer = function(){

		var t, timers = [], curr, prepareTimer = [], slowTimer = 1, index = 0;
		
		var getSlow = function(){
			return Config.fps * slowTimer;	
		}
		
		var start = function(){
			if ( t ) return;
			t = setInterval( function(){
				if ( slowTimer !== 1 ){
					if ( index++ % slowTimer !== 0 ){
						return;
					}
				}
				timers = prepareTimer.concat( timers );
				prepareTimer.length = 0;
				for ( curr = timers.length - 1; curr >= 0; curr-- ){
					if ( timers[ curr ].state === 'stop' ){
						continue;
					}
					timers[ curr ]();
					//if ( timers[ curr ].state === 'stop' ){
						//timers[ curr ].state = 'destory';
						//timers.splice( curr, 1 );
					//}
				}
			
			}, Config.fps * slowTimer );
		}

		var clean = function(){
			for ( ; curr >= 0; curr-- ){
				if ( timers[ curr ]() === 'done' ){
					timers.splice( i, 1 );
				}
			}
		}

		var push = function( fn ){
			timers[ timers.length ] = fn;
			return fn;
		}

		var unshift = function( fn ){
			return prepareTimer.unshift( fn );  //保持同步, 不然可能会出现A添加进了timer， 而B没有. 好基友永远不分开.
		}
		
		var checkZindex = function( fn ){
			var j, k, oldFn;
			for ( var i = 0, c; c = timers[ i++ ]; ){
				if ( c === fn ){
					j =  i - 1;	
				}else if ( c.zIndex ){
					k = i - 1;
					oldFn = c;
				}
			}
			if ( j > k ){
				timers[ j ] = oldFn;
				timers[ k ] = fn;	
			}
		}

		var stop = function(){
			clean();
			clearInterval( t );
			t = null;
		}

		var empty = function(){
			timers.length = 0;
			//stop();
		}
		
		var slow = function( timer ){
			stop()
			slowTimer = 3;
			start();
			setTimeout( function(){
				stop();
				slowTimer = 1;
				start();
			}, timer )
		}
		
		var normal = function(){
			slowTimer = 1;
		}
		
		
		
	var add = function( fn ){
		
		fn.state = 'normal';
	
		var start = function(){
			if ( fn.state === 'normal' ){
				unshift( fn );
				fn.state = 'add';
			}
	
			else if ( fn.state === 'stop' ){
				fn.state = 'add';	
			}
	
		}

		var stop = function(){
			fn.state = 'stop';
		}
	
		return {
			start: start,
			stop: stop
		}
	
	}

		return {
			add: add,
			start: start,
			push: push,
			unshift: unshift,
			stop: stop,
			empty: empty,
			slow: slow,
			normal: normal,
			checkZindex: checkZindex
		}


	}()