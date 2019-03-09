/**
 * 选择排序：
 * 找到最小元素放入至已排序的起始位置，循环此操作。
 */

class SelectionSort{
	sort(arr){
		for(let i = 0; i< arr.length - 1; i++){
			var min = arr[i];
			for(let j = i+1;j<arr.length;j++){
				if(arr[j] < min){
					let temp = min;
					min = arr[j];
					arr[j] = temp;
				}
			}
			arr[i] = min;

		}

		return arr;
	}
}

const obj = new SelectionSort();
console.log(obj.sort([23, 1,6,2,45,2,1,9,4]));