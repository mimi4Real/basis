/**
 * @param {string} str
 * @return {string}
 * https://leetcode.com/problems/to-lower-case/
 */
var toLowerCase = function(str) {
	var strArr = str.split('');
	for(var i in strArr){
		var code = strArr[i];
		if(/[A-Z]/.test(code)){
			strArr[i] = String.fromCharCode(code.charCodeAt() + 32)
		}
	}
	return strArr.join('');
};


console.log(toLowerCase('Mariah Caray'));
