var Ai = function(){

	var self = this, timer, enemy = self.enemy, queue = Interfaces.Queue(), level = 11;

	enemy.bloodBar.event.listen( 'drain', function(){
		timer.stop();
	})

	var random = function( num ){
		return Math.random() * num | 0;
	}


	var responsefn = function( distance ){

		var state = enemy.state, enemy_statusManage = enemy.statusManage, attack_type = enemy_statusManage.get().attack_type, response;

		var invincible = enemy_statusManage.get().invincible

		//console.log( 'invincible= ' + invincible )

	//	console.log( distance )
		
		if ( attack_type === 'attack' && self.statusManage.get().attack_type === 'defense' ){
			return response = {
				correct: [ self.state ],
				wrong: [ 'force_wait', 'force_wait' ]
			}
		}

		if ( attack_type === 'fall_down' || invincible ){
			return response = {
				correct: [ 'jump_back', 'force_back', 'heavy_wave_boxing' ],
				wrong: [ 'force_wait', 'force_wait' ]
			}
		}
		
		if ( state === 'jump_whirl_kick' || state === 'light_jump_whirl_kick' ){
			if ( distance === 'near' || distance === 'middle' ){
				return response	= {
					correct: [ 'jump_heavy_impact_boxing' ],
					wrong: [ 'force_wait', 'force_wait' ]	
				}	
			}
			return response	= {
				correct: [  'crouch' ],
				wrong: [ 'force_wait', 'force_wait' ]	
			}
		}

		if ( distance === 'near' ){
			
			if ( enemy.waveBoxing.firing ){
				return response = {
					correct: [ 'jump_whirl_kick', 'jump_heavy_impact_boxing', 'jump_whirl_kick', 'jump_whirl_kick', 'jump_whirl_kick' ],
					wrong: [ 'force_wait', 'force_wait' ]
				}
			}
			
			if ( enemy.statusManage.isJump() ){  //如果是跳跃
				return response = {
					correct: [ [ 'jump', 'heavy_kick' ], 'jump_heavy_impact_boxing', 'jump_light_impact_boxing' ],
					wrong: [ 'force_wait', 'crouch_heavy_kick' ]
				}
			}

			
			if ( attack_type === 'attack' ){  //如果是攻击
				return response = {
					correct: [ 'crouch_heavy_kick', enemy_statusManage.isCrouch() ? 'force_stand_crouch_defense' : 'force_stand_up_defense',  'jump_whirl_kick', 'jump_light_impact_boxing', 'jump_light_impact_boxing', 'jump_light_impact_boxing' ],
					wrong: [ 'force_wait', 'force_wait' ]
				}
			}

			else {
				return response = {
					correct: [ 'crouch_heavy_kick', 'heavy_boxing', 'light_boxing', 'crouch_light_kick' ],
					wrong: [ 'force_wait', 'crouch_heavy_kick' ]
				}
			}

		}

		else if ( distance === 'middle' ){
			
			if ( enemy.waveBoxing.firing ){
				return response = {
					correct: [ [ 'jump_forward', 'heavy_kick' ], 'jump_whirl_kick', 'jump_whirl_kick', 'jump_whirl_kick' ],
					wrong: [ 'force_wait', 'force_wait' ]
				}
			}
			
			if ( enemy.statusManage.isJump() ){  //如果是跳跃
				return response = {
					correct: [ [ 'jump', 'heavy_kick' ] ],
					wrong: [ 'force_wait', 'crouch_heavy_kick' ]
				}
			}

			if ( attack_type === 'attack' ){  //如果是攻击
				return response = {
					correct: [ enemy_statusManage.isCrouch() ? 'stand_crouch_defense' : 'stand_crouch_defense', 'crouch_heavy_kick', 'jump_whirl_kick', 'jump_heavy_impact_boxing', 'crouch_heavy_boxing' ],
					wrong: [ 'haha', '' ]
				}
			}


			else {
				return response = {
					correct: [ 'force_back', 'light_wave_boxing', [ 'jump_back', 'heavy_kick' ] ],
					wrong: [ 'force_wait', 'crouch_heavy_kick' ]	
				}	
			}
		}

		else if ( distance === 'far' ){
			
			if ( enemy.waveBoxing.firing ){
				return response = {
					correct: [ 'jump_whirl_kick', 'jump_whirl_kick', [ 'jump_forward', 'heavy_kick' ] ],
					wrong: [ 'force_wait', 'force_wait' ]
				}
			}
			
			if ( enemy.statusManage.isJump() ){  //如果是跳跃
				return response = {
					correct: [ 'jump_heavy_impact_boxing', [ 'jump_forward', 'heavy_kick' ] ],
					wrong: [ 'force_wait', 'crouch_heavy_kick' ]
				}
			}
			
			if ( attack_type === 'attack' ){  //如果是攻击
				response = {
					//correct: [ 'stand_crouch_defense' ],
					correct: [ enemy_statusManage.isCrouch() ? 'stand_crouch_defense' : 'stand_crouch_defense', 'jump_whirl_kick', 'jump_back', [ 'jump_forward', 'heavy_kick' ] ],
					wrong: [ 'force_wait', 'force_wait' ]
				}
			}


			else {
				return response = {
					correct: [ 'force_forward', 'jump_back', 'heavy_wave_boxing', [ 'force_back', 'force_back' ] ],
					wrong: [ 'force_wait', 'crouch_heavy_kick' ]
				}
			}

		}

		else{
			if ( enemy.waveBoxing.firing ){
				return response = {
					correct: [ 'light_wave_boxing' ],
					wrong: [ 'force_wait', 'force_wait' ]
				}
			}
			return response = {
				correct: [ 'force_forward', 'force_forward', 'force_forward', 'force_forward', 'light_wave_boxing', 'heavy_wave_boxing', [ 'jump_back', 'heavy_wave_boxing' ] ],
				wrong: [ 'force_wait', 'crouch_heavy_kick' ]
			}


		}

		
		return response;
		


	}
	
	

	
	var framefn = function(){


		if ( self.queue.isEmpty() && !queue.isEmpty() ){
			return self.play( queue.dequeue() || 'force_wait' );
		}

		var distance = self.statusManage.get().enemy_distance_type;

		var re = responsefn( distance );


		if ( !re ){
			re = {
				correct: [ 'force_wait' ],
				wrong: [ 'force_wait' ]	
			}
		}

		
		if ( random( 10 ) < level ){
			try{
				re = re.correct; 	
			}catch(e){
				console.log( enemy.state )	
			}
		}else{
			re = re.wrong;
		}
		

		re = re[ random( re.length ) ];
		//console.log( re )
		queue.add( re );
		
		
		var dequeue = queue.dequeue();
			//console.log( dequeue );
		return self.play( dequeue || 'wait' );
		//return self.play( 'jump_back' );
		try{

		}catch(e){
			console.log( 111 )
		}
		
		//console.log( random() )
		
		
		
		
		//console.log( re.correct )
		
	//	console.dir( re )
		
		//var re = responsefn( distance ) || ( response[ enemy.state ] && response[ enemy.state ][ distance  ] );
		

		
	//	console.log( enemy.state )
		
		//self.play( re || 'wait' );

		//console.log( distance );
		
		
		
	}
	
	timer = Timer.add( framefn );
	
	//timer.destory();
	

	var start = function(){
		timer.start();
	}

	var stop = function(){
		timer.stop();	
	}
	
	return {
		start: start,
		stop: stop
		
	}
	
	
	
}