/**
 * 快速排序：分治思想
 * 1、分区：选择元素作为基准(选择最右侧元素为基准)，找到比基准小的数放入基准左侧，大的数放入基准右侧
 * 2、基准左右侧区域重复分区操作
 */
let swapModule = require('../utils/sort-swap')

class QuickSort {
	quickSort(arr){
		this.sort(arr, 0 , arr.length - 1);
		return arr;
	}

	sort(arr, left, right){
		if(left > right)
			return

		let storeIndex = this.partition(arr, left, right);

		this.sort(arr, left, storeIndex - 1);
		this.sort(arr, storeIndex + 1, right)
	}

	partition(arr, left, right) {

		let storeIndex = left;
		let pivot = arr[right];

		for(let i = left; i < right; i++){
			if(arr[i] < pivot){
				swapModule.swap(arr, storeIndex, i);
				storeIndex ++;
			}
		}

		swapModule.swap(arr, storeIndex, right);

		return storeIndex;
	}
}


const sort = new QuickSort();
console.log(sort.quickSort([4,35,6,9,1,77,23,1]));