/**
 * @param {number[][]} A
 * @return {number[][]}
 * https://leetcode.com/problems/flipping-an-image/
 */
var flipAndInvertImage = function(A) {
	// var res = [];
	for (var i = 0; i < A.length; i++) {
//           var subA = A[i], temp = [];
//           for(var j = subA.length -1 ;j>-1;j--){
//              temp.push(subA[j] === 0 ? 1 : 0);
//           }
//           res.push(temp);
		var sIndex = 0, eIndex = A[i].length - 1;
		while (sIndex <= eIndex) {
			if (A[i][sIndex] === A[i][eIndex]) {
				A[i][sIndex] = 1 - A[i][sIndex];
				A[i][eIndex] = A[i][sIndex];
			}
			sIndex++;
			eIndex--;
		}
	}
	return A;
};

var arr = [[1,1,0],[1,0,1],[0,0,0]];
console.log(flipAndInvertImage(arr));