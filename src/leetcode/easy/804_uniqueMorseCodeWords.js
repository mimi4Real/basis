/**
 * @param {string[]} words
 * @return {number}
 * https://leetcode.com/problems/unique-morse-code-words/
 */
var CODE_MAP = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
var getCode = function(word){
	var str = '';
	for(var i = 0;i<word.length;i++){
		var wordCode = word[i].charCodeAt();
		str+= CODE_MAP[wordCode - 97];
	}
	return str;
}
var uniqueMorseRepresentations = function(words) {
	if(words.length > 100){
		console.error('The length of words will be at most 100');
		return -1;
	}

	var res = [];
	for(var i = 0; i<words.length;i++){
		var word = words[i];
		if(!/[a-zA-Z]/.test(word)){
			return -1;
		}
		word = word.toLowerCase();
		var temp = getCode(word);
		res.indexOf(temp) < 0 && res.push(temp);
	}
	return res.length;
};

var words = ["gin", "zen", "gig", "msg"]
console.log(uniqueMorseRepresentations(words))