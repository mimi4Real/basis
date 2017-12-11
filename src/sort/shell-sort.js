/**
 * 希尔排序：
 * 1、插入排序的优化版，先定义初始步长step
 * 2、循环序列，n*step形成的元素进行swap操作
 * 3、缩小step,重复步骤二
 * 4、直至step === 1,再次重复步骤二
 */
let swapModule = require('../utils/sort-swap')

class ShellSort{
	sort(arr){
		const len = arr.length;
		let step = 1;

		while(step * 3 + 1 < len){
			step = step * 3 + 1;
		}

		while (step >= 1){
			for(let i = step; i <arr.length; i++){
				for(let j = i; j >= step && arr[j] < arr[j - step]; j-=step){
					swapModule.swap(arr, j, j-1)
				}
			}

			step = Math.floor(step/3);
		}

		return arr
	}
}

const obj = new ShellSort();
console.log(obj.sort([2,67,0,1,4,9,32,5,2]));