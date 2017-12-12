/**
 * 堆排序：
 * 把最大堆堆顶的最大数取出，将剩余的堆继续调整为最大堆，再次将堆顶的最大数取出，直到剩一个数为止
 * 最大堆调整（Max-Heapify）：将堆的末端子节点作调整，使得子节点永远小于父节点
 * 创建最大堆（Build-Max-Heap）：将堆所有数据重新排序，使其成为最大堆
 * 堆排序（Heap-Sort）：移除位在第一个数据的根节点，并做最大堆调整的递归运算
 */

const sortSwap = require("../utils/sort-swap")

class HeapSort {
	maxHeapify (arr, index, heapSize) {
		let iMax,
			iLeft,
			iRight;
		while (true) {
			iMax = index;
			iLeft = 2 * index + 1;
			iRight = 2 * (index + 1);
			if (iLeft < heapSize && arr[index] < arr[iLeft]) {
				iMax = iLeft;
			}
			if (iRight < heapSize && arr[iMax] < arr[iRight]) {
				iMax = iRight;
			}
			if (iMax != index) {
				sortSwap.swap(arr, iMax, index);
				index = iMax;
			} else {
				break;
			}
		}
	}
	buildMaxHeap(arr) {
		let i,
			iParent = Math.floor(arr.length / 2) - 1;
		for (i = iParent; i >= 0; i--) {
			this.maxHeapify(arr, i, arr.length);
		}
	}
	sort(arr) {
		this.buildMaxHeap(arr);
		for (var i = arr.length - 1; i > 0; i--) {
			sortSwap.swap(arr, 0, i);
			this.maxHeapify(arr, 0, i);
		}
		return arr;
	}

}

console.log(new HeapSort().sort([23, 1, 67, 3, 5, 11,2]));