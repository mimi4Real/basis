class InsertSort{
	sort(arr){
		for(let i = 1; i<arr.length;i++){

			let temp = arr[i];
			let j;
			for(j = i - 1; j>=0 && temp < arr[j];j--){
				arr[j + 1] = arr[j];
			}

			arr[j + 1] = temp;
		}
	}

	binarySort(arr){
		for(let i = 1; i<arr.length;i++){
			let temp = arr[i];
			let point = this.binarySearch(arr, 0 , i-1, temp);
			for(let j = i - 1; j>=point;j--) {
				arr[j + 1] = arr[j];
			}

			arr[point] = temp;
		}
	}

	binarySearch(arr, low, high, current){
		while(low <= high){
			let mid = ~~((low + high)/2);
			current > arr[mid] ? (low = mid + 1) : (high = mid- 1);
		}

		return low;
	}


}
/*
const sortUtil =  new InsertSort();
let arr = [45,23,6,23,1]
sortUtil.binarySort(arr);

console.log(arr);*/
module.exports = InsertSort;
