/**
 * 求数组A连续的非空子数组
 */

function getSubObj(start, arr){
	let end = start;
	let order = 'asc';

	for(let i = start + 1; i < arr.length; i++){

		if(i === start + 1 && arr[i] === arr[i - 1] - 1)
			order = 'desc';

		let prevVal = order === 'asc' ? (arr[i - 1] + 1) : (arr[i - 1] - 1);
		if(arr[i] !== prevVal)
			break;
		else
			end = i;
	}

	return {
		start: start,
		end: end + 1,
		arr: arr.slice(start, end + 1)
	};
}

function maxSubArrSum1(arr, start, prevSum) {
	!start && (start = 0);

	if(start > arr.length - 1) return prevSum;

	const subObj = getSubObj(start, arr);

	let sum = 0;
	subObj.arr.forEach(val=>{
		sum += val;
	});

	prevSum = isNaN(parseInt(prevSum)) ? sum : (prevSum > sum ? prevSum : sum);

	return maxSubArrSum1(arr, subObj.end, prevSum);
}

console.log(maxSubArrSum1([12,13,14, 2, 7, 8, 88]));
console.log(maxSubArrSum1([-12,-13,-14, -89, -7, -8]));


function maxSubArrSum2(arr) {
	let sum = null;
	let prevOrder = 'init';

	arr.forEach((val, i) => {
		if(i === 0){
			sum = val;
		}else{

			let currOrder = (arr[i] === arr[i - 1] - 1 ? 'desc' : (arr[i] === arr[i - 1] + 1 ? 'asc' : 'init'));

			let prevVal = currOrder === 'asc' ? (arr[i - 1] + 1) : (arr[i - 1] - 1);

			if((prevOrder === 'init' || currOrder === prevOrder) && prevVal === arr[i]){
				sum += arr[i];
			}else{
				sum = sum > arr[i] ? sum : arr[i];
			}

			prevOrder = currOrder;
		}
	});

	return sum;
}

console.log(maxSubArrSum2([12,13,14, 2, 7, 8, 88]));
console.log(maxSubArrSum2([-12,-13,-14, -89, -7, -8]));