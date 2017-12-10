/**
 * 归并排序：分治思想
 * 递归法：
 * 1、将序列一分为二，申请空间，两个区域设定2个指针，较小的元素放入到合并空间，移动指针到下一位置，知道某一指针到结尾，将另一区域剩余元素合并到申请的空间内。
 * 2、当区域内元素不等于1时，重复步骤一再次归并，直到区域内序列数为一为止
 */

class MergeSort{
	mergeSort(arr){
		if(arr.length === 1) return arr;

		let mid = ~~(arr.length/2);

		return this.merge(this.mergeSort(arr.slice(0, mid)), this.mergeSort(arr.slice(mid)))
	}

	merge(left, right){
		var final = [];

		while (left.length && right.length) {
			if (left[0] < right[0])
				final.push(left.shift());
			else
				final.push(right.shift());
		}

		return final.concat(left, right);
	}
}

const obj = new MergeSort();
console.log(obj.mergeSort([45,1,1,9,2,5,23,72,3]));