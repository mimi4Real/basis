/**
 * @param {number[]} A
 * @return {number[]}
 * https://leetcode.com/problems/squares-of-a-sorted-array/
 */
var sortedSquares = function(A) {
	for(var i = 0;i<A.length;i++){
		A[i]  = A[i] * A[i];
	}
	return A.sort(function(a,b){return a-b});
};

var arr = [-7,-3,2,3,11];
console.log(sortedSquares(arr));