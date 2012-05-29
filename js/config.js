
var Config = {

	fps: 17,

	key_fps: 800,

	map: {
		bgBehind: 'behind',
		bgFront: 'front',
		width: 776,
		height: 440,
		windowWidth: 776,
		spiritZoom: 2.1
	},

	spiritShadow: 'fighterShadow',

	Spirit: {

		RYU1: {
			name: 'RYU1',
			states: {
				default: 'wait',
				/******************** 移动 *********************/
				wait: {
					bg: 'RYU1_wait',
					framesNum: 6,
					easing: [ 0, 0, 3, 'linear' ],
					attack_type: 0
				},
				force_wait: {
					bg: 'RYU1_wait',
					framesNum: 6,
					easing: [ 0, 0, 3, 'linear' ],
					attack_type: 0
				},
				back: {
					bg: 'RYU1_goBack',
					framesNum: 6,
					easing: [ -120, 0, 6, 'linear' ],
					attack_type: 0
				},
				force_back: {
					bg: 'RYU1_goBack',
					framesNum: 6,
					easing: [ -120, 0, 6, 'linear' ],
					attack_type: 0
				},
				forward: {
					bg: 'RYU1_goForward',
					framesNum: 6,
					easing: [ 150, 0, 6, 'linear' ],
					attack_type: 0
				},
				force_forward: {
					bg: 'RYU1_goForward',
					framesNum: 6,
					easing: [ 150, 0, 6, 'linear' ],
					attack_type: 0
				},
				stand_up: {
					bg: 'RYU1_stand_up',
					framesNum: 3,
					easing: [ 0, 0, 3, 'easeIn' ],
					attack_type: 0
				},
				stand_up_defense: {
					bg: 'RYU1_stand_up_defense',
					framesNum: 2,
					repeat: [ 1, 100 ],
					easing: [ 0, 0, 3, 'easeIn' ],
					attack_type: 1
				},
				force_stand_up_defense: {
					bg: 'RYU1_stand_up_defense',
					framesNum: 2,
					repeat: [ 0, 5 ],
					easing: [ 0, 0, 5, 'easeIn' ],
					attack_type: 1	
				},
				crouch: {
					bg: 'RYU1_crouch',
					framesNum: 1,
					repeat: [ 100 ],
					easing: [ 0, 0, 3, 'easeIn' ],
					attack_type: 0
				},
				stand_crouch_defense: {
					bg: 'RYU1_stand_crouch_defense',
					framesNum: 2,
					repeat: [ 1,100 ],
					easing: [ 0, 0, 3, 'easeIn' ],
					attack_type: 1
				},
				force_stand_crouch_defense: {
					bg: 'RYU1_stand_crouch_defense',
					framesNum: 2,
					repeat: [ 0, 5 ],
					easing: [ 0, 0, 5, 'easeIn' ],
					attack_type: 1
				},
				/******************** 跳跃 *********************/
				jumpUp: {
					bg: 'RYU1_jumpUp',
					framesNum: 8,
					repeat: [ 1, 1, 2, 2, 2, 1, 0, 0 ],
					easing: [ 0, -170, 3, 'sineaseOut' ],
					attack_type: 0
				},
				jump_forward_up: {
					bg: 'RYU1_jump_forward',
					framesNum: 9,
					repeat: [ 1, 4, 1, 1, 0, 0, 0, 0, 0 ],
					easing: [ 200, -170, 3, 'sineaseOut' ],
					position: 62,
					attack_type: 0
				},
				jump_forward_down: {
					bg: 'RYU1_jump_forward',
					framesNum: 9,
					repeat: [ 0, 0, 0, 0, 1, 1, 1, 4, 2 ],
					easing: [ 100, 170, 3, 'sineaseIn' ],
					attack_type: 0
				},
				jump_back_up: {
					bg: 'RYU1_jump_back',
					framesNum: 9,
					repeat: [ 1, 4, 1, 1, 0, 0, 0, 0, 0 ],
					easing: [ -200, -170, 3, 'sineaseOut' ],
					position: 62,
					attack_type: 0
				},
				jump_back_down: {
					bg: 'RYU1_jump_back',
					framesNum: 9,
					repeat: [ 0, 0, 0, 0, 1, 1, 1, 4, 2 ],
					easing: [ -100, 170, 3, 'sineaseIn' ],
					attack_type: 0
				},
				jumpDown: {
					bg: 'RYU1_jump_down',
					framesNum: 2,
					easing: [ 0, 170, 10, 'sineaseIn' ],
					attack_type: 0
				},
				/******************** 拳 *********************/
				light_boxing: {
					bg: 'RYU1_light_boxing',
					framesNum: 3,
					easing: [ 0, 0, 3, 'linear' ],   //left, top, 几针画一次, 算法,
					position: 7,
					attack_type: 2,
					attack_config: [ 10, 60, 110, 0, 100, 'linear', 'light', 'attacked_light_top', 20 ],  //偏移x, 偏移y, left, top, timer, easing
					attack_power: [ 1, false ],
					effect_position: [ 0, 20 ],
					sound: [ 'sound/light_boxing.mp3', 'sound/hit_light.mp3' ]
				},
				near_light_boxing: {
					bg: 'RYU1_near_light_boxing',
					framesNum: 3,
					easing: [ 0, 0, 3, 'linear' ],
					near: 130,
					attack_type: 2,
					attack_config: [ 10, 45, 110, 0, 100, 'linear', 'light', 'attacked_light_top', 25 ],  //偏移x, 偏移y, left, top, timer, easing
					attack_power: [ 1, false ],
					effect_position: [ 0, 10 ],
					sound: [ 'sound/light_boxing.mp3', 'sound/hit_light.mp3' ]
				},
				heavy_boxing: {
					bg: 'RYU1_middle_boxing',
					framesNum: 5,
					easing: [ 0, 0, 3, 'linear' ],   //left, top, 几针画一次, 算法,
					position: 7,
					attack_type: 2,
					attack_config: [ 10, 60, 120, 0, 150, 'linear', 'heavy', 'attacked_heavy', 120 ],  //偏移x, 偏移y, left, top, timer, easing
					attack_power: [ 2, false ],
					effect_position: [ 0, 25 ],
					sound: [ 'sound/heavy_boxing.mp3', 'sound/hit_heavy_boxing.mp3' ]
				},
				near_heavy_boxing: {
					bg: 'RYU1_near_heavy_boxing',
					framesNum: 6,
					repeat: [ 1, 1, 3, 3, 1, 1 ],
					easing: [ 0, 0, 3, 'linear' ],
					near: 140,
					attack_type: 2,
					attack_config: [ 10, 60, 110, 0, 150, 'linear', 'heavy', 'attacked_heavy_top', 130 ],
					attack_power: [ 2, false ],
					effect_position: [ 0, 0 ],
					sound: [ 'sound/heavy_boxing.mp3', 'sound/hit_heavy_boxing.mp3' ]
				},
				crouch_light_boxing: {
					bg: 'RYU1_crouch_light_boxing',
					framesNum: 3,
					easing: [ 0, 0, 6, 'linear' ],
					attack_type: 2,
					attack_config: [ 10, 60, 150, 0, 150, 'linear', 'light', 'attacked_light_bottom', 30 ],  //偏移x, 偏移y, left, top, timer, easing
					attack_power: [ 3, false ],
					effect_position: [ 0, 80 ],
					sound: [ 'sound/light_boxing.mp3', 'sound/hit_light.mp3' ]
				},
				crouch_heavy_boxing: {
					bg: 'RYU1_crouch_middle_boxing',
					framesNum: 3,
					easing: [ 0, 0, 6, 'linear' ],
					attack_type: 2,
					attack_config: [ 10, 60, 150, 0, 150, 'linear', 'heavy', 'attacked_heavy_bottom', 120 ],  //偏移x, 偏移y, left, top, timer, easing
					attack_power: [ 4, false ],
					effect_position: [ 0, 80 ],
					sound: [ 'sound/heavy_boxing.mp3', 'sound/hit_heavy_boxing.mp3' ]
				},
				/******************** 腿 *********************/
				light_kick: {
					bg: 'RYU1_light_kick',
					framesNum: 5,
					repeat: [ 1, 1, 2, 1, 1 ],
					easing: [ 0, 0, 3, 'linear' ],   //left, top, 几针画一次, 算法,
					position: -50,
					attack_type: 2,
					attack_config: [ 10, 40, 120, 0, 150, 'linear', 'light', 'attacked_light_top', 30 ],  //偏移x, 偏移y, left, top, timer, easing
					attack_power: [ 1, false ],
					effect_position: [ 0, 0 ],
					sound: [ 'sound/light_boxing.mp3', 'sound/hit_light.mp3' ]
				},
				near_light_kick: {
					bg: 'RYU1_near_light_kick',
					framesNum: 5,
					easing: [ 0, 0, 3, 'linear' ],
					near: 140,
					attack_type: 2,
					attack_config: [ 10, 150, 110, 0, 100, 'linear', 'light', 'attacked_light_bottom', 40 ],  //偏移x, 偏移y, left, top, timer, easing
					attack_power: [ 1, false ],
					effect_position: [ 0, 140 ],
					sound: [ 'sound/light_boxing.mp3', 'sound/hit_light.mp3' ]
				},
				crouch_light_kick: {
					bg: 'RYU1_crouch_light_kick',
					framesNum: 3,
					easing: [ 0, 0, 3, 'linear' ],
					attack_type: 2,
					attack_config: [ 10, 100, 210, 0, 150, 'linear', 'light', 'attacked_light_bottom', 40 ],  //偏移x, 偏移y, left, top, timer, easing
					attack_power: [ 3, false ],
					effect_position: [ 0, 140 ],
					sound: [ 'sound/light_boxing.mp3', 'sound/hit_light.mp3' ]
				},
				heavy_kick: {
					bg: 'RYU1_heavy_kick',
					framesNum: 5,
					easing: [ 0, 0, 6, 'easeIn' ],
					attack_type: 2,
					attack_config: [ 10, 120, 160, -100, 200, 'linear', 'heavy', 'attacked_heavy_top', 150 ],  //偏移x, 偏移y, left, top, timer, easing
					attack_power: [ 2, false ],
					effect_position: [ 0, -20 ],
					sound: [ 'sound/heavy_boxing.mp3', 'sound/hit_heavy_kick.mp3' ]
				},
				near_heavy_kick: {
					bg: 'RYU1_near_heavy_kick',
					framesNum: 6,
					repeat: [ 1, 2, 3, 3, 2, 2 ],
					easing: [ 0, 0, 3, 'easeIn' ],
					near: 160,
					attack_type: 2,
					attack_config: [ 10, 90, 110, 0, 150, 'linear', 'heavy', 'attacked_heavy_top', 160 ],  //偏移x, 偏移y, left, top, timer, easing
					attack_power: [ 2, false ],
					effect_position: [ 0, -20 ],
					sound: [ 'sound/heavy_boxing.mp3', 'sound/hit_heavy_kick.mp3' ]
				},
				crouch_heavy_kick: {
					bg: 'RYU1_crouch_heavy_kick',
					framesNum: 5,
					easing: [ 0, 0, 6, 'easeIn' ],
					attack_type: 2,
					attack_config: [ 10, 50, 230, 0, 150, 'linear', 'heavy', 'crouch_kick_attacked_fall', 130 ],  //偏移x, 偏移y, left, top, timer, easing
					attack_power: [ 4, false ],
					effect_position: [ 0, 140 ],
					sound: [ 'sound/heavy_boxing.mp3', 'sound/hit_heavy_kick.mp3' ]
				},
				/******************** 特殊技能 *********************/
				jump_light_impact_boxing: {
					bg: 'RYU1_impact_boxing',
					framesNum: 3,
					repeat: [ 1, 2, 4 ],
					easing: [ 10, -120, 3, 'strongEaseOut' ],
					attack_type: 2,
					attack_config: [ 150, 130, 0, -120, 100, 'linear', 'heavy', 'heavy_attacked_fall_down', 150 ],  //偏移x, 偏移y, left, top, timer, easing
					attack_power: [ 9, true ],
					effect_position: [ 70, -20 ],
					sound: [ '', 'sound/hit_heavy_boxing.mp3' ],
					specialSound: 'sound/impact_boxing.mp3',
					defenseBlood: 30,
				},
				after_jump_light_impact_boxing: {
					bg: 'RYU1_after_impact_boxing',
					framesNum: 3,
					easing: [ 0, 120, 6, 'strongEaseIn' ],
					attack_type: 0,
					attack_power: [ 0, false ]  //power_level, 无敌.
				},
				jump_heavy_impact_boxing: {
					bg: 'RYU1_impact_boxing',
					framesNum: 3,
					repeat: [ 1, 3, 7 ],
					easing: [ 40, -180, 3, 'strongEaseOut' ],
					attack_type: 2,
					attack_config: [ 150, 130, 0, -180, 200, 'linear', 'heavy', 'heavy_attacked_fall_down', 220 ],
					attack_power: [ 10, true ],
					effect_position: [ 70, -70 ],
					sound: [ '', 'sound/hit_heavy_boxing.mp3' ],
					specialSound: 'sound/impact_boxing.mp3',
					defenseBlood: 50,
				},
				after_jump_heavy_impact_boxing: {
					bg: 'RYU1_after_impact_boxing',
					framesNum: 3,
					easing: [ 0, 180, 12, 'strongEaseIn' ],
					attack_type: 0,
					attack_power: [ 0, false ]  //power_level, 无敌.
				},
				before_jump_whirl_kick: {
					bg: 'RYU1_before_whirl_kick',
					framesNum: 3,
					easing: [ 0, -20, 3, 'strongEaseOut' ],
					attack_type: 0,
					specialSound: 'sound/whirl_kick.mp3'
				},
				after_jump_whirl_kick: {
					bg: 'RYU1_after_whirl_kick',
					framesNum: 5,
					easing: [ 20, 20, 2, 'strongEaseIn' ],
					attack_type: 0
				},
				jump_whirl_kick: {
					bg: 'RYU1_whirl_kick',
					framesNum: 4,
					easing: [ 90, 0, 3, 'easeIn' ],
					attack_type: 2,
					attack_config: [ 50, 120, 370, 0, 150, 'linear', 'heavy', 'heavy_attacked_fall_down', 180 ],  //偏移x, 偏移y, left, top, timer, easing
					attack_power: [ 8, false ],
					effect_position: [ 70, -30 ],
					sound: [ '', 'sound/hit_heavy_kick.mp3' ],
					defenseBlood: 5
				},
				light_wave_boxing: {
					bg: 'RYU1_wave_boxing',
					framesNum: 4,
					repeat: [ 1, 1, 1, 10 ],
					easing: [ 0, 0, 3, 'easeIn' ],
					attack_type: 2,
					specialSound: 'sound/wave_boxing.mp3'
				},
				heavy_wave_boxing: {
					bg: 'RYU1_wave_boxing',
					framesNum: 4,
					repeat: [ 1, 1, 1, 15 ],
					easing: [ 0, 0, 3, 'easeIn' ],
					attack_type: 2,
					specialSound: 'sound/wave_boxing.mp3'
				},
				light_wave: {
					bg: 'transverseWave',
					framesNum: 2,
					repeat: [ 1, 2 ],
					easing: [ 50, 0, 2, 'linear' ],
					attack_type: 2,
					attack_config: [ 7, 16, 0, 0, 'transverseWaveDisappear', 'attacked_light_impact', 80, 10 ]
				},
				heavy_wave: {
					bg: 'transverseWave',
					framesNum: 2,
					repeat: [ 1, 2 ],
					easing: [ 80, 0, 2, 'linear' ],
					attack_type: 2,
					attack_config: [ 7, 116, 0, 0, 'transverseWaveDisappear', 'attacked_heavy_impact', 120, 20 ]
				},
				
/******************************** 被击打 ****************************************/

				before_crouch_kick_attacked_fall: {
					bg: 'RYU1_beAttacked_fall',
					framesNum: 4,
					repeat: [ 5, 0, 0, 0 ],
					easing: [ 0, -110, 3, 'sineaseOut' ],
					attack_type: 4,
					attack_power: [ 0, true ]
				},

				crouch_kick_attacked_fall: {
					bg: 'RYU1_beAttacked_fall',
					framesNum: 4,
					easing: [ -70, null, 6, 'sineaseIn' ],
					attack_type: 4,
					attack_power: [ 0, true ]
				},

			
				before_light_attacked_fall_down: {
					bg: 'RYU1_beAttacked_fall',
					framesNum: 4,
					repeat: [ 5, 0, 0, 0 ],
					easing: [ -110, -50, 3, 'sineaseOut' ],
					attack_type: 4,
					attack_power: [ 0, true ]
				},

				jump_back_fall_down: {
					bg: 'RYU1_jump_back',
					framesNum: 9,
					repeat: [ 0, 0, 0, 0, 1, 1, 1, 4, 2 ],
					easing: [ -100, null, 3, 'sineaseIn' ],
					attack_type: 4,
					attack_power: [ 0, true ]
				},

				before_heavy_attacked_fall_down: {
					bg: 'RYU1_beAttacked_fall',
					framesNum: 4,
					repeat: [ 5, 0, 0, 0 ],
					easing: [ -100, -110, 6, 'sineaseOut' ],
					attack_type: 4,
					attack_power: [ 0, true ]
				},

				after_heavy_attacked_fall_down: {
					bg: 'RYU1_beAttacked_fall',
					framesNum: 4,
					repeat: [ 5, 0, 0, 0 ],
					easing: [ -110, null, 6, 'sineaseIn' ],
					attack_type: 4,
					attack_power: [ 0, true ]
				},

				before_dead: {
					bg: 'RYU1_before_fall_down',
					framesNum: 1,
					easing: [ -70, -160, 60, 'sineaseOut' ],
					attack_type: 4,
					attack_power: [ 0, true ]
				},

				dead: {
					bg: 'RYU1_before_fall_down',
					framesNum: 1,
					easing: [ -120, null, 45, 'sineaseIn' ],
					attack_type: 4,
					attack_power: [ 0, true ]
				},

				after_dead: {
					bg: 'RYU1_fall_down',
					framesNum: 3,
					repeat: [ 1, 0, 0 ],
					easing: [ 0, -30, 6, 'sineaseOut' ],
					attack_type: 4,
					attack_power: [ 0, true ]
				},

				after_dead2: {
					bg: 'RYU1_fall_down',
					framesNum: 3,
					repeat: [ 1, 1, 5000 ],
					easing: [ 0, 30, 3, 'sineaseIn' ],
					attack_type: 4,
					attack_power: [ 0, true ]
				},

				somesault_up: {
					bg: 'RYU1_somesault_up',
					framesNum: 5,
					easing: [ 0, 0, 6, 'linear' ],
					attack_type: 4,
					attack_power: [ 0, true ]
				},

				attacked_light_top: {
					bg: 'RYU1_beAttacked_top',
					framesNum: 2,
					easing: [ -20, 0, 6, 'linear' ],
					attack_type: 3,
					attack_power: [ 0, false ]
				},
				
				attacked_heavy_top: {
					bg: 'RYU1_beAttacked_top',
					framesNum: 2,
					repeat: [ 2, 3 ],
					easing: [ -100, 0, 7, 'linear' ],
					attack_type: 3,
					attack_power: [ 0, false ]
				},

				attacked_light_bottom: {
					bg: 'RYU1_beAttacked_bottom',
					framesNum: 2,
					easing: [ -20, 0, 6, 'linear' ],
					attack_type: 3,
					attack_power: [ 0, false ]
				},

				attacked_heavy_bottom: {
					bg: 'RYU1_beAttacked_bottom',
					framesNum: 2,
					repeat: [ 1, 3 ],
					easing: [ -60, 0, 6, 'linear' ],
					attack_type: 3,
					attack_power: [ 0, false ]
				},
				
				attacked_heavy: {
					bg: 'RYU1_beAttacked_heavy',
					framesNum: 3,
					repeat: [ 1, 1, 3 ],
					easing: [ -80, 0, 6, 'linear' ],
					attack_type: 3,
					attack_power: [ 0, false ]
				},

				attacked_light_impact: {
					bg: 'RYU1_beAttacked_impact',
					framesNum: 3,
					repeat: [ 1, 2, 1 ],
					easing: [ -40, 0, 6, 'linear' ],
					attack_type: 3,
					attack_power: [ 0, true ]
				},

				attacked_heavy_impact: {
					bg: 'RYU1_beAttacked_impact',
					framesNum: 3,
					repeat: [ 1, 4, 2 ],
					easing: [ -80, 0, 6, 'linear' ],
					attack_type: 3,
					attack_power: [ 0, true ]
				},
	/******************************** 组合技能 **************************************/			
				combo: {
					jump_light_boxing: {
						bg: 'RYU1_jump_light_boxing',
						framesNum: 2,
						repeat: [ 3, 36 ],
						attack_type: 2,
						attack_config: [ 150, 100, 40, 0, 'heavy', 'attacked_light_top', 30 ],
						afterFrame: 1,  //完成之后停留在之前动作的倒数第几针.
						attack_power: [ 5, false ],
						effect_position: [ 0, 10 ],
						sound: [ 'sound/light_boxing.mp3', 'sound/hit_light.mp3' ]
					},
					jump_heavy_boxing: {
						bg: 'RYU1_jump_middle_boxing',
						framesNum: 4,
						repeat: [ 3, 3, 15, 3 ],
						attack_type: 2,
						attack_config: [ 150, 100, 40, 0, 'heavy', 'attacked_heavy_top', 100 ],
						afterFrame: 1 ,
						attack_power: [ 7, false ],
						effect_position: [ 0, 10 ],
						sound: [ 'sound/heavy_boxing.mp3', 'sound/hit_heavy_boxing.mp3' ]
					},
					jump_light_kick: {
						bg: 'RYU1_jump_light_kick',
						framesNum: 2,
						repeat: [ 3, 6 ],
						attack_type: 2,
						attack_config: [ 170, 50, 50, 0, 'heavy', 'attacked_light_top', 40 ],
						afterFrame: 3,   //完成之后停留在之前动作的倒数第几针.
						attack_power: [ 5, false ],
						effect_position: [ 0, 10 ],
						sound: [ 'sound/light_boxing.mp3', 'sound/hit_light.mp3' ]
					},
					jump_heavy_kick: {
						bg: 'RYU1_jump_heavy_kick',
						framesNum: 5,
						repeat: [ 3, 3, 6, 3, 3 ],
						attack_type: 2,
						attack_config: [ 170, 100, 50, 0, 'heavy', 'attacked_heavy_top', 120 ],
						afterFrame: 1,   //完成之后停留在之前动作的倒数第几针.
						attack_power: [ 7, false ],
						effect_position: [ 0, 10 ],
						sound: [ 'sound/heavy_boxing.mp3', 'sound/hit_heavy_kick.mp3' ]
					},
					jump_forward_light_boxing: {
						bg: 'RYU1_jumpMoved_light_kick',
						framesNum: 3,
						repeat: [ 3, 6, 24 ],
						attack_type: 2,
						attack_config: [ 150, 100, 40, 0, 'heavy', 'attacked_light_top', 30 ],
						attack_power: [ 5, false ],
						effect_position: [ 0, 10 ],
						sound: [ 'sound/light_boxing.mp3', 'sound/hit_light.mp3' ]
					},
					jump_back_light_boxing: {
						bg: 'RYU1_jumpMoved_light_kick',
						framesNum: 3,
						repeat: [ 3, 6, 24 ],
						attack_type: 2,
						attack_config: [ 150, 100, 40, 0, 'heavy', 'attacked_light_top', 30 ],
						attack_power: [ 5, false ],
						effect_position: [ 0, 10 ],
						sound: [ 'sound/light_boxing.mp3', 'sound/hit_light.mp3' ]
					},
					jump_forward_heavy_boxing: {
						bg: 'RYU1_jump_middle_boxing',
						framesNum: 4,
						repeat: [ 3, 3, 15, 3 ],
						attack_type: 2,
						attack_config: [ 150, 100, 50, 0, 'heavy', 'attacked_heavy_top', 100 ],
						attack_power: [ 6, false ],
						effect_position: [ 0, 10 ],
						sound: [ 'sound/heavy_boxing.mp3', 'sound/hit_heavy_boxing.mp3' ]
					},
					jump_back_heavy_boxing: {
						bg: 'RYU1_jump_middle_boxing',
						framesNum: 4,
						repeat: [ 3, 3, 15, 3 ],
						attack_type: 2,
						attack_config: [ 150, 100, 50, 0, 'heavy', 'attacked_heavy_top', 100 ],
						attack_power: [ 6, false ],
						effect_position: [ 0, 10 ],
						sound: [ 'sound/heavy_boxing.mp3', 'sound/hit_heavy_boxing.mp3' ]
					},
					jump_forward_light_kick: {
						bg: 'RYU1_jumpMoved_light_kick',
						framesNum: 3,
						repeat: [ 3, 6, 24 ],
						attack_type: 2,
						attack_config: [ 150, 100, 40, 0, 'heavy', 'attacked_light_top', 40 ],
						attack_power: [ 5, false ],
						effect_position: [ 0, 10 ],
						sound: [ 'sound/light_boxing.mp3', 'sound/hit_light.mp3' ]
					},
					jump_back_light_kick: {
						bg: 'RYU1_jumpMoved_light_kick',
						framesNum: 3,
						repeat: [ 3, 6, 24 ],
						attack_type: 2,
						attack_config: [ 150, 100, 40, 0, 'heavy', 'attacked_light_top', 40 ],
						attack_power: [ 5, false ],
						effect_position: [ 0, 10 ],
						sound: [ 'sound/light_boxing.mp3', 'sound/hit_light.mp3' ]
					},
					jump_forward_heavy_kick: {
						bg: 'RYU1_jumpMoved_middle_kick',
						framesNum: 4,
						repeat: [ 3, 3, 12, 3 ],
						attack_type: 2,
						attack_config: [ 150, 120, 50, 0, 'heavy', 'attacked_heavy_top', 130 ],
						attack_power: [ 6, false ],
						effect_position: [ 0, 10 ],
						sound: [ 'sound/heavy_boxing.mp3', 'sound/hit_heavy_kick.mp3' ]
					},
					jump_back_heavy_kick: {
						bg: 'RYU1_jumpMoved_middle_kick',
						framesNum: 4,
						repeat: [ 3, 3, 12, 3 ],
						attack_type: 2,
						attack_config: [ 150, 120, 50, 0, 'heavy', 'attacked_heavy_top', 130 ],
						attack_power: [ 6, false ],
						effect_position: [ 0, 10 ],
						sound: [ 'sound/heavy_boxing.mp3', 'sound/hit_heavy_kick.mp3' ]
					},
				}
			},
			keyMap: {
				mapping: {
					'65': 'a',
					'83': 's',
					'68': 'd',
					'87': 'w',
					'85': 'u',
					'73': 'i',
					'74': 'j',
					'75': 'k'
				},
				move: {
					'w': 'jump',
					'a': 'back',
					'wa': 'jump_back',
					'aw': 'jump_back',
					'wd': 'jump_forward',
					'dw': 'jump_forward',
					'sd': 'crouch',
					'ds': 'crouch',
					'as': 'stand_crouch_defense',
					'sa': 'stand_crouch_defense',
					'd': 'forward',
					's': 'crouch'
				},
				move_mirror: {
					'w': 'jump',
					'a': 'forward',
					'wa': 'jump_forward',
					'aw': 'jump_forward',
					'wd': 'jump_back',
					'dw': 'jump_back',
					'sd': 'stand_crouch_defense',
					'ds': 'stand_crouch_defense',
					'as': 'crouch',
					'sa': 'crouch',
					'd': 'back',
					's': 'crouch'
				},
				attack: {
					special: {
						'crouch,light_boxing': 'crouch_light_boxing',
						'crouch,heavy_boxing': 'crouch_heavy_boxing',
						'crouch,light_kick': 'crouch_light_kick',
						'crouch,heavy_kick': 'crouch_heavy_kick',
						'crouch,back,light_kick': 'light_jump_whirl_kick',
						'crouch,back,heavy_kick': 'jump_whirl_kick',
						'crouch,stand_crouch_defense,back,light_kick': 'light_jump_whirl_kick',
						'crouch,stand_crouch_defense,back,heavy_kick': 'jump_whirl_kick',
						'crouch,forward,light_boxing': 'light_wave_boxing',
						'crouch,forward,heavy_boxing': 'heavy_wave_boxing',
						'forward,crouch,forward,light_boxing': 'jump_light_impact_boxing',
						'forward,crouch,forward,crouch,light_boxing': 'jump_light_impact_boxing',
						'forward,crouch,forward,heavy_boxing': 'jump_heavy_impact_boxing',
						'forward,crouch,forward,crouch,heavy_boxing': 'jump_heavy_impact_boxing'
					},
					normal: {
						'j': 'light_boxing',
						'k': 'heavy_boxing',
						'u': 'light_kick',
						'i': 'heavy_kick'
					}
				}
			}
		},

		RYU2: {
			name: 'RYU2',
			states: {
				default: 'wait',
				/******************** 移动 *********************/
				wait: {
					bg: 'RYU2_wait',
					framesNum: 6,
					easing: [ 0, 0, 3, 'linear' ],
					attack_type: 0
				},
				force_wait: {
					bg: 'RYU2_wait',
					framesNum: 6,
					easing: [ 0, 0, 3, 'linear' ],
					attack_type: 0
				},
				back: {
					bg: 'RYU2_goBack',
					framesNum: 6,
					easing: [ -120, 0, 6, 'linear' ],
					attack_type: 0
				},
				force_back: {
					bg: 'RYU2_goBack',
					framesNum: 6,
					easing: [ -120, 0, 6, 'linear' ],
					attack_type: 0
				},
				forward: {
					bg: 'RYU2_goForward',
					framesNum: 6,
					easing: [ 150, 0, 6, 'linear' ],
					attack_type: 0
				},
				force_forward: {
					bg: 'RYU2_goForward',
					framesNum: 6,
					easing: [ 150, 0, 6, 'linear' ],
					attack_type: 0
				},
				stand_up: {
					bg: 'RYU2_stand_up',
					framesNum: 3,
					easing: [ 0, 0, 3, 'easeIn' ],
					attack_type: 0
				},
				stand_up_defense: {
					bg: 'RYU2_stand_up_defense',
					framesNum: 2,
					repeat: [ 1, 100 ],
					easing: [ 0, 0, 3, 'easeIn' ],
					attack_type: 1
				},
				force_stand_up_defense: {
					bg: 'RYU2_stand_up_defense',
					framesNum: 2,
					repeat: [ 0, 5 ],
					easing: [ 0, 0, 5, 'easeIn' ],
					attack_type: 1	
				},
				crouch: {
					bg: 'RYU2_crouch',
					framesNum: 1,
					repeat: [ 100 ],
					easing: [ 0, 0, 3, 'easeIn' ],
					attack_type: 0
				},
				stand_crouch_defense: {
					bg: 'RYU2_stand_crouch_defense',
					framesNum: 2,
					repeat: [ 1,100 ],
					easing: [ 0, 0, 3, 'easeIn' ],
					attack_type: 1
				},
				force_stand_crouch_defense: {
					bg: 'RYU2_stand_crouch_defense',
					framesNum: 2,
					repeat: [ 0, 5 ],
					easing: [ 0, 0, 5, 'easeIn' ],
					attack_type: 1
				},
				/******************** 跳跃 *********************/
				jumpUp: {
					bg: 'RYU2_jumpUp',
					framesNum: 8,
					repeat: [ 1, 1, 2, 2, 2, 1, 0, 0 ],
					easing: [ 0, -170, 3, 'sineaseOut' ],
					attack_type: 0
				},
				jump_forward_up: {
					bg: 'RYU2_jump_forward',
					framesNum: 9,
					repeat: [ 1, 4, 1, 1, 0, 0, 0, 0, 0 ],
					easing: [ 200, -170, 3, 'sineaseOut' ],
					position: 62,
					attack_type: 0
				},
				jump_forward_down: {
					bg: 'RYU2_jump_forward',
					framesNum: 9,
					repeat: [ 0, 0, 0, 0, 1, 1, 1, 4, 2 ],
					easing: [ 100, 170, 3, 'sineaseIn' ],
					attack_type: 0
				},
				jump_back_up: {
					bg: 'RYU2_jump_back',
					framesNum: 9,
					repeat: [ 1, 4, 1, 1, 0, 0, 0, 0, 0 ],
					easing: [ -200, -170, 3, 'sineaseOut' ],
					position: 62,
					attack_type: 0
				},
				jump_back_down: {
					bg: 'RYU2_jump_back',
					framesNum: 9,
					repeat: [ 0, 0, 0, 0, 1, 1, 1, 4, 2 ],
					easing: [ -100, 170, 3, 'sineaseIn' ],
					attack_type: 0
				},
				jumpDown: {
					bg: 'RYU2_jump_down',
					framesNum: 2,
					easing: [ 0, 170, 10, 'sineaseIn' ],
					attack_type: 0
				},
				/******************** 拳 *********************/
				light_boxing: {
					bg: 'RYU2_light_boxing',
					framesNum: 3,
					easing: [ 0, 0, 3, 'linear' ],   //left, top, 几针画一次, 算法,
					position: 7,
					attack_type: 2,
					attack_config: [ 10, 60, 110, 0, 100, 'linear', 'light', 'attacked_light_top', 20 ],  //偏移x, 偏移y, left, top, timer, easing
					attack_power: [ 1, false ],
					effect_position: [ 0, 20 ],
					sound: [ 'sound/light_boxing.mp3', 'sound/hit_light.mp3' ]
				},
				near_light_boxing: {
					bg: 'RYU2_near_light_boxing',
					framesNum: 3,
					easing: [ 0, 0, 3, 'linear' ],
					near: 130,
					attack_type: 2,
					attack_config: [ 10, 45, 110, 0, 100, 'linear', 'light', 'attacked_light_top', 25 ],  //偏移x, 偏移y, left, top, timer, easing
					attack_power: [ 1, false ],
					effect_position: [ 0, 10 ],
					sound: [ 'sound/light_boxing.mp3', 'sound/hit_light.mp3' ]
				},
				heavy_boxing: {
					bg: 'RYU2_middle_boxing',
					framesNum: 5,
					easing: [ 0, 0, 3, 'linear' ],   //left, top, 几针画一次, 算法,
					position: 7,
					attack_type: 2,
					attack_config: [ 10, 60, 120, 0, 150, 'linear', 'heavy', 'attacked_heavy', 120 ],  //偏移x, 偏移y, left, top, timer, easing
					attack_power: [ 2, false ],
					effect_position: [ 0, 25 ],
					sound: [ 'sound/heavy_boxing.mp3', 'sound/hit_heavy_boxing.mp3' ]
				},
				near_heavy_boxing: {
					bg: 'RYU2_near_heavy_boxing',
					framesNum: 6,
					repeat: [ 1, 1, 3, 3, 1, 1 ],
					easing: [ 0, 0, 3, 'linear' ],
					near: 140,
					attack_type: 2,
					attack_config: [ 10, 60, 110, 0, 150, 'linear', 'heavy', 'attacked_heavy_top', 130 ],
					attack_power: [ 2, false ],
					effect_position: [ 0, 0 ],
					sound: [ 'sound/heavy_boxing.mp3', 'sound/hit_heavy_boxing.mp3' ]
				},
				crouch_light_boxing: {
					bg: 'RYU2_crouch_light_boxing',
					framesNum: 3,
					easing: [ 0, 0, 6, 'linear' ],
					attack_type: 2,
					attack_config: [ 10, 60, 150, 0, 150, 'linear', 'light', 'attacked_light_bottom', 30 ],  //偏移x, 偏移y, left, top, timer, easing
					attack_power: [ 3, false ],
					effect_position: [ 0, 80 ],
					sound: [ 'sound/light_boxing.mp3', 'sound/hit_light.mp3' ]
				},
				crouch_heavy_boxing: {
					bg: 'RYU2_crouch_middle_boxing',
					framesNum: 3,
					easing: [ 0, 0, 6, 'linear' ],
					attack_type: 2,
					attack_config: [ 10, 60, 150, 0, 150, 'linear', 'heavy', 'attacked_heavy_bottom', 120 ],  //偏移x, 偏移y, left, top, timer, easing
					attack_power: [ 4, false ],
					effect_position: [ 0, 80 ],
					sound: [ 'sound/heavy_boxing.mp3', 'sound/hit_heavy_boxing.mp3' ]
				},
				/******************** 腿 *********************/
				light_kick: {
					bg: 'RYU2_light_kick',
					framesNum: 5,
					repeat: [ 1, 1, 2, 1, 1 ],
					easing: [ 0, 0, 3, 'linear' ],   //left, top, 几针画一次, 算法,
					position: -50,
					attack_type: 2,
					attack_config: [ 10, 40, 120, 0, 150, 'linear', 'light', 'attacked_light_top', 30 ],  //偏移x, 偏移y, left, top, timer, easing
					attack_power: [ 1, false ],
					effect_position: [ 0, 0 ],
					sound: [ 'sound/light_boxing.mp3', 'sound/hit_light.mp3' ]
				},
				near_light_kick: {
					bg: 'RYU2_near_light_kick',
					framesNum: 5,
					easing: [ 0, 0, 3, 'linear' ],
					near: 140,
					attack_type: 2,
					attack_config: [ 10, 150, 110, 0, 100, 'linear', 'light', 'attacked_light_bottom', 40 ],  //偏移x, 偏移y, left, top, timer, easing
					attack_power: [ 1, false ],
					effect_position: [ 0, 140 ],
					sound: [ 'sound/light_boxing.mp3', 'sound/hit_light.mp3' ]
				},
				crouch_light_kick: {
					bg: 'RYU2_crouch_light_kick',
					framesNum: 3,
					easing: [ 0, 0, 3, 'linear' ],
					attack_type: 2,
					attack_config: [ 10, 100, 210, 0, 150, 'linear', 'light', 'attacked_light_bottom', 40 ],  //偏移x, 偏移y, left, top, timer, easing
					attack_power: [ 3, false ],
					effect_position: [ 0, 140 ],
					sound: [ 'sound/light_boxing.mp3', 'sound/hit_light.mp3' ]
				},
				heavy_kick: {
					bg: 'RYU2_heavy_kick',
					framesNum: 5,
					easing: [ 0, 0, 6, 'easeIn' ],
					attack_type: 2,
					attack_config: [ 10, 120, 160, -100, 200, 'linear', 'heavy', 'attacked_heavy_top', 150 ],  //偏移x, 偏移y, left, top, timer, easing
					attack_power: [ 2, false ],
					effect_position: [ 0, -20 ],
					sound: [ 'sound/heavy_boxing.mp3', 'sound/hit_heavy_kick.mp3' ]
				},
				near_heavy_kick: {
					bg: 'RYU2_near_heavy_kick',
					framesNum: 6,
					repeat: [ 1, 2, 3, 3, 2, 2 ],
					easing: [ 0, 0, 3, 'easeIn' ],
					near: 160,
					attack_type: 2,
					attack_config: [ 10, 90, 110, 0, 150, 'linear', 'heavy', 'attacked_heavy_top', 160 ],  //偏移x, 偏移y, left, top, timer, easing
					attack_power: [ 2, false ],
					effect_position: [ 0, -20 ],
					sound: [ 'sound/heavy_boxing.mp3', 'sound/hit_heavy_kick.mp3' ]
				},
				crouch_heavy_kick: {
					bg: 'RYU2_crouch_heavy_kick',
					framesNum: 5,
					easing: [ 0, 0, 6, 'easeIn' ],
					attack_type: 2,
					attack_config: [ 10, 50, 230, 0, 150, 'linear', 'heavy', 'crouch_kick_attacked_fall', 130 ],  //偏移x, 偏移y, left, top, timer, easing
					attack_power: [ 4, false ],
					effect_position: [ 0, 140 ],
					sound: [ 'sound/heavy_boxing.mp3', 'sound/hit_heavy_kick.mp3' ]
				},
				/******************** 特殊技能 *********************/
				jump_light_impact_boxing: {
					bg: 'RYU2_impact_boxing',
					framesNum: 3,
					repeat: [ 1, 2, 4 ],
					easing: [ 10, -120, 3, 'strongEaseOut' ],
					attack_type: 2,
					attack_config: [ 150, 130, 0, -120, 100, 'linear', 'heavy', 'heavy_attacked_fall_down', 150 ],  //偏移x, 偏移y, left, top, timer, easing
					attack_power: [ 9, true ],
					effect_position: [ 70, -20 ],
					sound: [ '', 'sound/hit_heavy_boxing.mp3' ],
					specialSound: 'sound/impact_boxing.mp3',
					defenseBlood: 30,
				},
				after_jump_light_impact_boxing: {
					bg: 'RYU2_after_impact_boxing',
					framesNum: 3,
					easing: [ 0, 120, 6, 'strongEaseIn' ],
					attack_type: 0,
					attack_power: [ 0, false ]  //power_level, 无敌.
				},
				jump_heavy_impact_boxing: {
					bg: 'RYU2_impact_boxing',
					framesNum: 3,
					repeat: [ 1, 3, 7 ],
					easing: [ 40, -180, 3, 'strongEaseOut' ],
					attack_type: 2,
					attack_config: [ 150, 130, 0, -180, 200, 'linear', 'heavy', 'heavy_attacked_fall_down', 220 ],
					attack_power: [ 10, true ],
					effect_position: [ 70, -70 ],
					sound: [ '', 'sound/hit_heavy_boxing.mp3' ],
					specialSound: 'sound/impact_boxing.mp3',
					defenseBlood: 50,
				},
				after_jump_heavy_impact_boxing: {
					bg: 'RYU2_after_impact_boxing',
					framesNum: 3,
					easing: [ 0, 180, 12, 'strongEaseIn' ],
					attack_type: 0,
					attack_power: [ 0, false ]  //power_level, 无敌.
				},
				before_jump_whirl_kick: {
					bg: 'RYU2_before_whirl_kick',
					framesNum: 3,
					easing: [ 0, -20, 3, 'strongEaseOut' ],
					attack_type: 2,
					specialSound: 'sound/whirl_kick.mp3'
				},
				after_jump_whirl_kick: {
					bg: 'RYU2_after_whirl_kick',
					framesNum: 5,
					easing: [ 20, 20, 2, 'strongEaseIn' ],
					attack_type: 0
				},
				jump_whirl_kick: {
					bg: 'RYU2_whirl_kick',
					framesNum: 4,
					easing: [ 90, 0, 3, 'easeIn' ],
					attack_type: 2,
					attack_config: [ 50, 120, 370, 0, 150, 'linear', 'heavy', 'heavy_attacked_fall_down', 180 ],  //偏移x, 偏移y, left, top, timer, easing
					attack_power: [ 8, false ],
					effect_position: [ 70, -30 ],
					sound: [ '', 'sound/hit_heavy_kick.mp3' ],
					defenseBlood: 5
				},
				light_wave_boxing: {
					bg: 'RYU2_wave_boxing',
					framesNum: 4,
					repeat: [ 1, 1, 1, 10 ],
					easing: [ 0, 0, 3, 'easeIn' ],
					attack_type: 2,
					specialSound: 'sound/wave_boxing.mp3'
				},
				heavy_wave_boxing: {
					bg: 'RYU2_wave_boxing',
					framesNum: 4,
					repeat: [ 1, 1, 1, 15 ],
					easing: [ 0, 0, 3, 'easeIn' ],
					attack_type: 2,
					specialSound: 'sound/wave_boxing.mp3'
				},
				light_wave: {
					bg: 'transverseWave',
					framesNum: 2,
					repeat: [ 1, 2 ],
					easing: [ 50, 0, 2, 'linear' ],
					attack_type: 2,
					attack_config: [ 7, 16, 0, 0, 'transverseWaveDisappear', 'attacked_light_impact', 80, 10 ]
				},
				heavy_wave: {
					bg: 'transverseWave',
					framesNum: 2,
					repeat: [ 1, 2 ],
					easing: [ 80, 0, 2, 'linear' ],
					attack_type: 2,
					attack_config: [ 7, 116, 0, 0, 'transverseWaveDisappear', 'attacked_heavy_impact', 120, 20 ]
				},
				
/******************************** 被击打 ****************************************/

				before_crouch_kick_attacked_fall: {
					bg: 'RYU2_beAttacked_fall',
					framesNum: 4,
					repeat: [ 5, 0, 0, 0 ],
					easing: [ 0, -110, 3, 'sineaseOut' ],
					attack_type: 4,
					attack_power: [ 0, true ]
				},

				crouch_kick_attacked_fall: {
					bg: 'RYU2_beAttacked_fall',
					framesNum: 4,
					easing: [ -70, null, 6, 'sineaseIn' ],
					attack_type: 4,
					attack_power: [ 0, true ]
				},

			
				before_light_attacked_fall_down: {
					bg: 'RYU2_beAttacked_fall',
					framesNum: 4,
					repeat: [ 5, 0, 0, 0 ],
					easing: [ -110, -50, 3, 'sineaseOut' ],
					attack_type: 4,
					attack_power: [ 0, true ]
				},

				jump_back_fall_down: {
					bg: 'RYU2_jump_back',
					framesNum: 9,
					repeat: [ 0, 0, 0, 0, 1, 1, 1, 4, 2 ],
					easing: [ -100, null, 3, 'sineaseIn' ],
					attack_type: 4,
					attack_power: [ 0, true ]
				},

				before_heavy_attacked_fall_down: {
					bg: 'RYU2_beAttacked_fall',
					framesNum: 4,
					repeat: [ 5, 0, 0, 0 ],
					easing: [ -100, -110, 6, 'sineaseOut' ],
					attack_type: 4,
					attack_power: [ 0, true ]
				},

				after_heavy_attacked_fall_down: {
					bg: 'RYU2_beAttacked_fall',
					framesNum: 4,
					repeat: [ 5, 0, 0, 0 ],
					easing: [ -110, null, 6, 'sineaseIn' ],
					attack_type: 4,
					attack_power: [ 0, true ]
				},

				before_dead: {
					bg: 'RYU2_before_fall_down',
					framesNum: 1,
					easing: [ -70, -160, 60, 'sineaseOut' ],
					attack_type: 4,
					attack_power: [ 0, true ]
				},

				dead: {
					bg: 'RYU2_before_fall_down',
					framesNum: 1,
					easing: [ -120, null, 45, 'sineaseIn' ],
					attack_type: 4,
					attack_power: [ 0, true ]
				},

				after_dead: {
					bg: 'RYU2_fall_down',
					framesNum: 3,
					repeat: [ 1, 0, 0 ],
					easing: [ 0, -30, 6, 'sineaseOut' ],
					attack_type: 4,
					attack_power: [ 0, true ]
				},

				after_dead2: {
					bg: 'RYU2_fall_down',
					framesNum: 3,
					repeat: [ 1, 1, 5000 ],
					easing: [ 0, 30, 3, 'sineaseIn' ],
					attack_type: 4,
					attack_power: [ 0, true ]
				},

				somesault_up: {
					bg: 'RYU2_somesault_up',
					framesNum: 5,
					easing: [ 0, 0, 6, 'linear' ],
					attack_type: 4,
					attack_power: [ 0, true ]
				},

				attacked_light_top: {
					bg: 'RYU2_beAttacked_top',
					framesNum: 2,
					easing: [ -20, 0, 6, 'linear' ],
					attack_type: 3,
					attack_power: [ 0, false ]
				},
				
				attacked_heavy_top: {
					bg: 'RYU2_beAttacked_top',
					framesNum: 2,
					repeat: [ 2, 3 ],
					easing: [ -100, 0, 7, 'linear' ],
					attack_type: 3,
					attack_power: [ 0, false ]
				},

				attacked_light_bottom: {
					bg: 'RYU2_beAttacked_bottom',
					framesNum: 2,
					easing: [ -20, 0, 6, 'linear' ],
					attack_type: 3,
					attack_power: [ 0, false ]
				},

				attacked_heavy_bottom: {
					bg: 'RYU2_beAttacked_bottom',
					framesNum: 2,
					repeat: [ 1, 3 ],
					easing: [ -60, 0, 6, 'linear' ],
					attack_type: 3,
					attack_power: [ 0, false ]
				},
				
				attacked_heavy: {
					bg: 'RYU2_beAttacked_heavy',
					framesNum: 3,
					repeat: [ 1, 1, 3 ],
					easing: [ -80, 0, 6, 'linear' ],
					attack_type: 3,
					attack_power: [ 0, false ]
				},

				attacked_light_impact: {
					bg: 'RYU2_beAttacked_impact',
					framesNum: 3,
					repeat: [ 1, 2, 1 ],
					easing: [ -40, 0, 6, 'linear' ],
					attack_type: 3,
					attack_power: [ 0, true ]
				},

				attacked_heavy_impact: {
					bg: 'RYU2_beAttacked_impact',
					framesNum: 3,
					repeat: [ 1, 4, 2 ],
					easing: [ -80, 0, 6, 'linear' ],
					attack_type: 3,
					attack_power: [ 0, true ]
				},
	/******************************** 组合技能 **************************************/			
				combo: {
					jump_light_boxing: {
						bg: 'RYU2_jump_light_boxing',
						framesNum: 2,
						repeat: [ 3, 36 ],
						attack_type: 2,
						attack_config: [ 150, 100, 40, 0, 'heavy', 'attacked_light_top', 30 ],
						afterFrame: 1,  //完成之后停留在之前动作的倒数第几针.
						attack_power: [ 5, false ],
						effect_position: [ 0, 10 ],
						sound: [ 'sound/light_boxing.mp3', 'sound/hit_light.mp3' ]
					},
					jump_heavy_boxing: {
						bg: 'RYU2_jump_middle_boxing',
						framesNum: 4,
						repeat: [ 3, 3, 15, 3 ],
						attack_type: 2,
						attack_config: [ 150, 100, 40, 0, 'heavy', 'attacked_heavy_top', 100 ],
						afterFrame: 1 ,
						attack_power: [ 7, false ],
						effect_position: [ 0, 10 ],
						sound: [ 'sound/heavy_boxing.mp3', 'sound/hit_heavy_boxing.mp3' ]
					},
					jump_light_kick: {
						bg: 'RYU2_jump_light_kick',
						framesNum: 2,
						repeat: [ 3, 6 ],
						attack_type: 2,
						attack_config: [ 170, 50, 50, 0, 'heavy', 'attacked_light_top', 40 ],
						afterFrame: 3,   //完成之后停留在之前动作的倒数第几针.
						attack_power: [ 5, false ],
						effect_position: [ 0, 10 ],
						sound: [ 'sound/light_boxing.mp3', 'sound/hit_light.mp3' ]
					},
					jump_heavy_kick: {
						bg: 'RYU2_jump_heavy_kick',
						framesNum: 5,
						repeat: [ 3, 3, 6, 3, 3 ],
						attack_type: 2,
						attack_config: [ 170, 100, 50, 0, 'heavy', 'attacked_heavy_top', 120 ],
						afterFrame: 1,   //完成之后停留在之前动作的倒数第几针.
						attack_power: [ 7, false ],
						effect_position: [ 0, 10 ],
						sound: [ 'sound/heavy_boxing.mp3', 'sound/hit_heavy_kick.mp3' ]
					},
					jump_forward_light_boxing: {
						bg: 'RYU2_jumpMoved_light_kick',
						framesNum: 3,
						repeat: [ 3, 6, 24 ],
						attack_type: 2,
						attack_config: [ 150, 100, 40, 0, 'heavy', 'attacked_light_top', 30 ],
						attack_power: [ 5, false ],
						effect_position: [ 0, 10 ],
						sound: [ 'sound/light_boxing.mp3', 'sound/hit_light.mp3' ]
					},
					jump_back_light_boxing: {
						bg: 'RYU2_jumpMoved_light_kick',
						framesNum: 3,
						repeat: [ 3, 6, 24 ],
						attack_type: 2,
						attack_config: [ 150, 100, 40, 0, 'heavy', 'attacked_light_top', 30 ],
						attack_power: [ 5, false ],
						effect_position: [ 0, 10 ],
						sound: [ 'sound/light_boxing.mp3', 'sound/hit_light.mp3' ]
					},
					jump_forward_heavy_boxing: {
						bg: 'RYU2_jump_middle_boxing',
						framesNum: 4,
						repeat: [ 3, 3, 15, 3 ],
						attack_type: 2,
						attack_config: [ 150, 100, 50, 0, 'heavy', 'attacked_heavy_top', 100 ],
						attack_power: [ 6, false ],
						effect_position: [ 0, 10 ],
						sound: [ 'sound/heavy_boxing.mp3', 'sound/hit_heavy_boxing.mp3' ]
					},
					jump_back_heavy_boxing: {
						bg: 'RYU2_jump_middle_boxing',
						framesNum: 4,
						repeat: [ 3, 3, 15, 3 ],
						attack_type: 2,
						attack_config: [ 150, 100, 50, 0, 'heavy', 'attacked_heavy_top', 100 ],
						attack_power: [ 6, false ],
						effect_position: [ 0, 10 ],
						sound: [ 'sound/heavy_boxing.mp3', 'sound/hit_heavy_boxing.mp3' ]
					},
					jump_forward_light_kick: {
						bg: 'RYU2_jumpMoved_light_kick',
						framesNum: 3,
						repeat: [ 3, 6, 24 ],
						attack_type: 2,
						attack_config: [ 150, 100, 40, 0, 'heavy', 'attacked_light_top', 40 ],
						attack_power: [ 5, false ],
						effect_position: [ 0, 10 ],
						sound: [ 'sound/light_boxing.mp3', 'sound/hit_light.mp3' ]
					},
					jump_back_light_kick: {
						bg: 'RYU2_jumpMoved_light_kick',
						framesNum: 3,
						repeat: [ 3, 6, 24 ],
						attack_type: 2,
						attack_config: [ 150, 100, 40, 0, 'heavy', 'attacked_light_top', 40 ],
						attack_power: [ 5, false ],
						effect_position: [ 0, 10 ],
						sound: [ 'sound/light_boxing.mp3', 'sound/hit_light.mp3' ]
					},
					jump_forward_heavy_kick: {
						bg: 'RYU2_jumpMoved_middle_kick',
						framesNum: 4,
						repeat: [ 3, 3, 12, 3 ],
						attack_type: 2,
						attack_config: [ 150, 120, 50, 0, 'heavy', 'attacked_heavy_top', 130 ],
						attack_power: [ 6, false ],
						effect_position: [ 0, 10 ],
						sound: [ 'sound/heavy_boxing.mp3', 'sound/hit_heavy_kick.mp3' ]
					},
					jump_back_heavy_kick: {
						bg: 'RYU2_jumpMoved_middle_kick',
						framesNum: 4,
						repeat: [ 3, 3, 12, 3 ],
						attack_type: 2,
						attack_config: [ 150, 120, 50, 0, 'heavy', 'attacked_heavy_top', 130 ],
						attack_power: [ 6, false ],
						effect_position: [ 0, 10 ],
						sound: [ 'sound/heavy_boxing.mp3', 'sound/hit_heavy_kick.mp3' ]
					},
				}
			},
			keyMap: {
				mapping: {
					'37': 'left',
					'38': 'up',
					'39': 'right',
					'40': 'down',
					'97': '1',
					'98': '2',
					'100': '4',
					'101': '5'
				},
				move: {
					'up': 'jump',
					'left': 'back',
					'right': 'forward',
					'down': 'crouch',
					'upright': 'jump_forward',
					'rightup': 'jump_forward',
					'upleft': 'jump_back',
					'leftup': 'jump_back',
					'downleft': 'stand_crouch_defense',
					'leftdown': 'stand_crouch_defense',
					'downright': 'crouch',
					'rightdown': 'crouch'
				},
				move_mirror: {
					'up': 'jump',
					'left': 'forward',
					'right': 'back',
					'down': 'crouch',
					'upleft': 'jump_forward',
					'leftup': 'jump_forward',
					'upright': 'jump_back',
					'rightup': 'jump_back',
					'downleft': 'crouch',
					'leftdown': 'crouch',
					'downright': 'stand_crouch_defense',
					'rightdown': 'stand_crouch_defense',
				},
				attack: {
					special: {
						'crouch,light_boxing': 'crouch_light_boxing',
						'crouch,heavy_boxing': 'crouch_heavy_boxing',
						'crouch,light_kick': 'crouch_light_kick',
						'crouch,heavy_kick': 'crouch_heavy_kick',
						'crouch,back,light_kick': 'light_jump_whirl_kick',
						'crouch,back,heavy_kick': 'jump_whirl_kick',
						'crouch,stand_crouch_defense,back,light_kick': 'light_jump_whirl_kick',
						'crouch,stand_crouch_defense,back,heavy_kick': 'jump_whirl_kick',
						'crouch,forward,light_boxing': 'light_wave_boxing',
						'crouch,forward,heavy_boxing': 'heavy_wave_boxing',
						'forward,crouch,forward,light_boxing': 'jump_light_impact_boxing',
						'forward,crouch,forward,crouch,light_boxing': 'jump_light_impact_boxing',
						'forward,crouch,forward,heavy_boxing': 'jump_heavy_impact_boxing',
						'forward,crouch,forward,crouch,heavy_boxing': 'jump_heavy_impact_boxing'
					},
					normal: {
						'1': 'light_boxing',
						'2': 'heavy_boxing',
						'4': 'light_kick',
						'5': 'heavy_kick'
					}
				}
			}
		}
		
	},


	play: {
		wait: {
			compose: [ 'wait' ]
		},
		force_wait: {
			compose: [ 'wait' ],
			lock: 2
		},
		back: {
			compose: [ 'back' ],
			lock: 0
		},
		forward: {
			compose: [ 'forward' ],
			lock: 0
		},
		force_back: {
			compose: [ 'force_back' ],
			lock: 2
		},
		force_forward: {
			compose: [ 'force_forward' ],
			lock: 2
		},
		crouch: {
			compose: [ 'crouch' ],
			lock: 0
		},
		stand_up: {
			compose: [ 'stand_up' ]
		},
		stand_up_defense: {
			compose: [ 'stand_up_defense' ]
		},
		force_stand_up_defense: {
			compose: [ 'force_stand_up_defense' ],
			lock: 2
		},
		stand_crouch_defense: {
			compose: [ 'stand_crouch_defense' ]
		},
		force_stand_crouch_defense: {
			compose: [ 'force_stand_crouch_defense' ],
			lock: 2	
		},
		jump: {
			compose: [ 'jumpUp', 'jumpDown' ],
			lock: 1
		},
		jump_forward: {
			compose: [ 'jump_forward_up', 'jump_forward_down' ],
			lock: 1
		},
		jump_back: {
			compose: [ 'jump_back_up', 'jump_back_down' ],
			lock: 1
		},
		jump_light_impact_boxing: {
			compose: [ 'jump_light_impact_boxing', 'after_jump_light_impact_boxing' ],
			lock: 2
		},
		jump_heavy_impact_boxing: {
			compose: [ 'jump_heavy_impact_boxing', 'after_jump_heavy_impact_boxing' ],
			lock: 2
		},
		light_boxing: {
			compose: [ 'light_boxing' ],
			lock: 2
		},
		heavy_boxing: {
			compose: [ 'heavy_boxing' ],
			lock: 2
		},
		crouch_light_boxing: {
			compose: [ 'crouch_light_boxing' ],
			lock: 2
		},
		crouch_light_kick: {
			compose: [ 'crouch_light_kick' ],
			lock: 2
		},
		crouch_heavy_boxing: {
			compose: [ 'crouch_heavy_boxing' ],
			lock: 2
		},
		light_jump_whirl_kick: {
			compose: [ 'before_jump_whirl_kick', 'jump_whirl_kick', 'jump_whirl_kick', 'after_jump_whirl_kick'  ],
			lock: 2
		},
		jump_whirl_kick: {
			compose: [ 'before_jump_whirl_kick', 'jump_whirl_kick', 'jump_whirl_kick', 'jump_whirl_kick', 'jump_whirl_kick', 'after_jump_whirl_kick'  ],
			lock: 2
		},
		light_kick: {
			compose: [ 'light_kick' ],
			lock: 2
		},
		heavy_kick: {
			compose: [ 'heavy_kick' ],
			lock: 2
		},
		crouch_heavy_kick: {
			compose: [ 'crouch_heavy_kick' ],
			lock: 2
		},
		near_light_boxing: {
			compose: [ 'near_light_boxing' ],
			lock: 2
		},
		near_heavy_boxing: {
			compose: [ 'near_heavy_boxing' ],
			lock: 2
		},
		near_light_kick: {
			compose: [ 'near_light_kick' ],
			lock: 2
		},
		near_heavy_kick: {
			compose: [ 'near_heavy_kick' ],
			lock: 2
		},
		light_wave_boxing: {
			compose: [ 'light_wave_boxing' ],
			lock: 2
		},
		heavy_wave_boxing: {
			compose: [ 'heavy_wave_boxing' ],
			lock: 2
		},
		crouch_kick_attacked_fall: {
			compose: [ 'before_crouch_kick_attacked_fall', 'crouch_kick_attacked_fall', 'somesault_up' ],
			lock: 4
		},
		jump_fall_down: {
			compose: [ 'before_light_attacked_fall_down', 'jump_back_fall_down' ],
			lock: 4
		},
		heavy_attacked_fall_down: {
			compose: [ 'before_heavy_attacked_fall_down', 'after_heavy_attacked_fall_down', 'somesault_up'  ],
			lock: 4
		},
		jump_dead: {
			compose: [ 'before_dead', 'dead', 'after_dead', 'after_dead2' ],
			lock: 5	
		},
		attacked_bottom: {
			compose: [ 'attacked_bottom' ],
			lock: 3	
		},
		attacked_light_top: {
			compose: [ 'attacked_light_top' ],
			lock: 3
		},
		attacked_heavy_top: {
			compose: [ 'attacked_heavy_top' ],
			lock: 3
		},
		attacked_light_bottom: {
			compose: [ 'attacked_light_bottom' ],
			lock: 3
		},
		attacked_heavy_bottom: {
			compose: [ 'attacked_heavy_bottom' ],
			lock: 3
		},
		attacked_heavy: {
			compose: [ 'attacked_heavy' ],
			lock: 3	
		},
		attacked_light_impact: {
			compose: [ 'attacked_light_impact' ],
			lock: 3
		},
		attacked_heavy_impact: {
			compose: [ 'attacked_heavy_impact' ],
			lock: 3
		},
		fall_down: {
			compose: [ 'before_fall_down', 'fall_down' ],
			lock: 3	
		},
		somesault_up: {
			compose: [ 'somesault_up' ],
			lock: 3		
		},
		dead: {
			compose: [ 'before_dead', 'dead', 'after_dead', 'after_dead2' ],
			lock: 5
		}
	},

	easing: {
		linear: function( t, b, c, d ){
			return c*t/d + b;
		},
		easeIn: function( t, b, c, d ){
   		return c*(t/=d)*t + b;
 		},
		strongEaseIn: function(t, b, c, d){
			return c * (t /= d) * t * t * t * t + b;
		},
		strongEaseOut: function(t, b, c, d){
			return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
		},
		sineaseIn: function( t, b, c, d ){
			return c*(t/=d)*t*t + b;
    },
    sineaseOut: function(t,b,c,d){
    	return c*((t=t/d-1)*t*t + 1) + b;
    },
    sineaseInOut: function(t,b,c,d){
      if ((t/=d/2) < 1) return c/2*t*t + b;
      return -c/2 * ((--t)*(t-2) - 1) + b;
     }

	

	}	

}


