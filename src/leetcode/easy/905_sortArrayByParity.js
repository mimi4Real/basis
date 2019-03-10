/**
 * @param {number[]} A
 * @return {number[]}
 * https://leetcode.com/problems/sort-array-by-parity/
 */
var sortArrayByParity = function(A) {
	var evenList = [], oddList = [];
	for(var i = 0;i<A.length;i++){
		if(A[i]%2 === 0){
			evenList.push(A[i]);
		} else {
			oddList.push(A[i]);
		}
	}

	return evenList.concat(oddList);
};

var arr = [3,1,2,4];
console.log(sortArrayByParity(arr));