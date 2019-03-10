/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
	var CIRCLE_MAP = {
		R: 1,
		L: -1,
		U: 1,
		D: -1
	}

	for(var i = 0;i<moves.length;i++){
		switch(moves[i]){
			case 'R':
				CIRCLE_MAP['R']++;
				break;
			case 'L':
				CIRCLE_MAP['L']--;
				break;
			case 'U':
				CIRCLE_MAP['U']++;
				break;
			case 'D':
				CIRCLE_MAP['D']--;
				break;
			default:
				break;
		}
	}

	if((CIRCLE_MAP['R'] + CIRCLE_MAP['L'] === 0) && (CIRCLE_MAP['U'] + CIRCLE_MAP['D'] === 0)){
		return true;
	} else{
		return false;
	}
};

console.log(judgeCircle('LLRRUD'));