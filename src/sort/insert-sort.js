/**
 * 插入排序：
 * 在已经排序好的序列中插入元素。
 */

class InsertSort{
	sort(arr){
		for(let i = 1; i< arr.length; i++){
			let current = arr[i];
			for(let j = i - 1;j >= 0 && arr[j] > current; j--){
				arr[j + 1] = arr[j];
				arr[j] = current;
			}
		}
		return arr;
	}

	binarySort(arr){
		for(let i = 1; i< arr.length; i++){
			let current = arr[i];

			let pivot = this.binarySearch(arr, current, 0, i-1);

			for(let j = i - 1;j >= pivot && arr[j] > current; j--){
				arr[j + 1] = arr[j];
				arr[j] = current;
			}
		}
		return arr;
	}

	binarySearch(arr, current, low, high){
		while(low <= high){
			var mid = Math.floor((low + high)/2);
			current > arr[mid] ? low = mid + 1 : high = mid - 1;
		}

		return low;
	}
}

/*const obj = new InsertSort();
console.log(obj.sort([23, 1,6,2,45,2,1,9,4]));
console.log(obj.binarySort([12, 9, 4, 2, 34, 0, 1, 2, 5]));*/




function binarySearch(arr, low, high, hkey){
	//递归
	/*var mid = ~~((low + high)/2);
	if(low > high) return -1;
	if(arr[mid] > hkey){
		return binarySearch(arr, low, mid -1 , hkey);
	}

	if(arr[mid] < hkey){
		return binarySearch(arr, mid + 1, high, hkey);
	}

	return mid;*/

	//循环
	while(low <= high){
		var mid = ~~((low + high)/2);
		hkey > arr[mid] ? low = mid + 1 : high = mid - 1;
	}

	return low;
}

var arr = [3,56,45,67,89];
console.log(binarySearch(arr, 0, arr.length - 1, 44));