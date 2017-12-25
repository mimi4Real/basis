/*
* 最大公约数：辗转相除法(欧几里得算法)
*/

var gcd = function(a,  b){
	if(b === 0) return a;

	if(a < b){
		return gcd(b, a);
	}else{
		return a%b === 0 ? b : gcd(b, a%b);
	}
}

console.log(gcd(12, 0));
