/**
 * 归并排序：分治思想
 * 递归法：
 * 1、将序列一分为二，申请空间，两个区域设定2个指针，较小的元素放入到合并空间，移动指针到下一位置，直到某一指针到结尾，将另一区域剩余元素合并到申请的空间内。
 * 2、当区域内元素不等于1时，重复步骤一再次归并，直到区域内序列数为一为止
 */

class MergeSort{
	mergeSort(arr){

		let merge = (left, right) => {
			var final = [];

			while (left.length && right.length) {
				if (left[0] < right[0])
					final.push(left.shift());
				else
					final.push(right.shift());
			}

			return final.concat(left, right);
		}


		if(arr.length === 1) return arr;

		let mid = ~~(arr.length/2);

		return merge(this.mergeSort(arr.slice(0, mid)), this.mergeSort(arr.slice(mid)))
	}

	mergeSort2(arr, result, start, end){
		let merge = (arr, result, leftStart, leftEnd, rightStart, rightEnd, start)=>{
			let k = start;
			while (leftStart <= leftEnd && rightStart <= rightEnd)
				result[k++] = arr[leftStart] < arr[rightStart] ? arr[leftStart++] : arr[rightStart++];
			while (leftStart <= leftEnd)
				result[k++] = arr[leftStart++];
			while (rightStart <= rightEnd)
				result[k++] = arr[rightStart++];
			for (k = start; k <= end; k++)
				arr[k] = result[k];
		}

		if (start >= end)
			return;

		let len = end - start, mid = (len >> 1) + start; // len >> 1 ===  ~~(len/2)

		let leftStart = start, leftEnd = mid;
		let rightStart = mid + 1, rightEnd = end;
		this.mergeSort2(arr, result, leftStart, leftEnd);
		this.mergeSort2(arr, result, rightStart, rightEnd);

		merge(arr, result, leftStart, leftEnd, rightStart, rightEnd, start);
	}
}

const obj = new MergeSort();
const arr = [45,1,1,9,2,5,23,72,3];

// console.log(obj.mergeSort(arr))

let result = []
obj.mergeSort2(arr, result, 0 , arr.length - 1);
console.log(result)
