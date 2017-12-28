function maxSubArrSum(arr) {
	let sum = 0;
	let sumArr = [];
	for(let i = 0;i < arr.length; i++){
		if(arr[i] < 0){
			sumArr.push(sum);
			sum = 0;
			continue;
		}else{
			sum += arr[i];
		}
	}

	sum > 0 && sumArr.push(sum)

	let max = 0;
	sumArr.forEach((val, i) => {
		max = i === 0 ? val : (sumArr[i - 1] > val ? sumArr[i - 1] : val);
	})

	return max;
}

console.log(maxSubArrSum([12,13,-14, 2, 7, -8, 88]));