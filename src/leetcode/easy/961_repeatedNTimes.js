/**
 * @param {number[]} A
 * @return {number}
 * https://leetcode.com/problems/n-repeated-element-in-size-2n-array/
 */
var repeatedNTimes = function(A) {
	var list = [];
	for(var i = 0;i<A.length;i++){
		if(list.indexOf(A[i]) > -1){
			return A[i];
		}
		list.push(A[i]);
	}
	return -1;
};

var arr = [5,1,5,2,5,3,5,4];
console.log(repeatedNTimes(arr));