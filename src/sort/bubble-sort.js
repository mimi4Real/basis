/**
 * 冒泡排序：
 * 两个元素比较，前者大于后者，交换。重复此步骤
 */

// import Swap from '../utils/sort-swap'
let swapModule = require('../utils/sort-swap')

class BubbleSort{
	sort(arr){
		for(let i= 0; i< arr.length -1; i++){
			for(let j = 0; j< arr.length; j++){
				if(arr[j + 1] < arr[j]){
					swapModule.swap(arr, j, j+1);
				}
			}
		}
		return arr;
	}
}

const obj = new BubbleSort();
console.log(obj.sort([2,67,0,1,4,9,32,5,2]));
