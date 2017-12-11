/**
 * quickSort expand:
 * 查找第K大的值
 */

const sortSwap = require("../../utils/sort-swap")

class FindNthK{
	constructor() {
		this.nthK = -1;
	}

	//find nth K
	findK(arr, left, right, k){
		if(left > right)
			return

		let storeIndex = this.position(arr, left, right);
		if(arr.length - storeIndex === k){
			this.nthK = arr[storeIndex];
			return;
		}else if(arr.length - storeIndex > k){
			this.findK(arr, storeIndex + 1, right, k);
		}else{
			this.findK(arr, left, storeIndex - 1, k);
		}
	}


	position(arr, left, right){
		let storeIndex = left,
			pivot = arr[right];

		for(let i = left;i<right;i++){
			if(arr[i] < pivot){
				sortSwap.swap(arr, storeIndex, i);
				storeIndex++;
			}
		}

		sortSwap.swap(arr, storeIndex, right);
		return storeIndex;
	}
}

const obj = new FindNthK();
const arr = [4, 23, 1 ,22, 0, 3, 55 , 5];
obj.findK(arr, 0 , arr.length - 1, 3);
console.log(obj.nthK);