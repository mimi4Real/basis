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

function maxSubArrSum(arr, start, prevSum) {
	!start && (start = 0);

	if(start > arr.length - 1) return prevSum;

	const subObj = getSubObj(start, arr);

	let sum = 0;
	subObj.arr.forEach(val=>{
		sum += val;
	});

	prevSum = isNaN(parseInt(prevSum)) ? sum : (prevSum > sum ? prevSum : sum);

	return maxSubArrSum(arr, subObj.end, prevSum);
}

console.log(maxSubArrSum([12,13,14, 2, 7, 8, 88]));
console.log(maxSubArrSum([-12,-13,-14, -89, -7, -8,]));


