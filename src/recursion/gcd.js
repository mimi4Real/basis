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

const num1 = 12,  num2 = 16;

let common = gcd(num1, num2)

console.log("最大公约数：" + common);

console.log("最小公倍数：" + num1*num2/common);
